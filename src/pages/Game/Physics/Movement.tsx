import Matter from "matter-js";
import type { PlayerProps } from "../entities/Player";

interface PhysicsProps {
  engine: Matter.Engine;
  world: Matter.World;
}

interface Entities {
  physics: PhysicsProps;
  player: PlayerProps;
  [key: string]: unknown;
}

interface KeyboardState {
  current: Record<string, boolean>;
}

interface SystemArgs {
  time: { delta: number };
}

export const createMovement = (keyboard: KeyboardState) => {
  let jumpWasPressed = false;
  let animationElapsed = 0;
  let groundedGracePeriod = 0;

  return (entities: Entities, { time }: SystemArgs) => {
    const player = entities.player;
    const speed = 1.5;
    const jumpVelocity = -11;
    const platforms = Object.entries(entities)
      .filter(([key]) => key.startsWith("platform"))
      .map(([, entity]) => (entity as { body: Matter.Body }).body);

    let velocityX = 0;

    if (keyboard.current["KeyA"]) {
      velocityX = -speed;
      player.direction = "left";
    }

    if (keyboard.current["KeyD"]) {
      velocityX = speed;
      player.direction = "right";
    }

    const jumpPressed = Boolean(keyboard.current["KeyW"]);
    const hasPlatformCollision = entities.physics.engine.pairs.list.some(
      (pair: Matter.Pair) => {
        const labels = [pair.bodyA.label, pair.bodyB.label];

        return (
          pair.isActive &&
          labels.includes("Player") &&
          labels.some((label) => label.startsWith("platform"))
        );
      },
    );
    const isNearPlatformTop = platforms.some((platform) => {
      const overlapsHorizontally =
        player.body.bounds.max.x > platform.bounds.min.x &&
        player.body.bounds.min.x < platform.bounds.max.x;
      const distanceFromTop =
        player.body.bounds.max.y - platform.bounds.min.y;

      return (
        overlapsHorizontally &&
        distanceFromTop >= -10 &&
        distanceFromTop <= 12 &&
        player.body.velocity.y >= -0.2
      );
    });
    const isOnPlatform = hasPlatformCollision || isNearPlatformTop;

    groundedGracePeriod = isOnPlatform
      ? 120
      : Math.max(0, groundedGracePeriod - time.delta);

    if (jumpPressed && !jumpWasPressed && isOnPlatform) {
      Matter.Body.setVelocity(player.body, { x: velocityX, y: jumpVelocity });
    } else {
      Matter.Body.setVelocity(player.body, {
        x: velocityX,
        y: player.body.velocity.y,
      });
    }

    const isAirborne =
      player.body.velocity.y < -0.2 ||
      player.body.velocity.y > 0.75 ||
      (!isOnPlatform && groundedGracePeriod === 0);
    const nextState = isAirborne
      ? "jumping"
      : velocityX !== 0
        ? "walking"
        : "idle";
    const frameCount = nextState === "walking" ? 8 : nextState === "jumping" ? 4 : 1;

    if (player.state !== nextState) {
      player.state = nextState;
      player.frame = 0;
      animationElapsed = 0;
    } else if (nextState !== "idle") {
      animationElapsed += time.delta;
      if (animationElapsed >= 100) {
        player.frame = (player.frame + 1) % frameCount;
        animationElapsed = 0;
      }
    }

    platforms.forEach((platform) => {
      const playerBottom = player.body.bounds.max.y;
      const platformTop = platform.bounds.min.y;
      const playerIsAbovePlatform = playerBottom <= platformTop + 8;
      const isFalling = player.body.velocity.y >= 0;

      platform.collisionFilter.mask =
        isFalling && playerIsAbovePlatform ? 0xffffffff : 0;
    });

    jumpWasPressed = jumpPressed;

    return entities;
  };
};
