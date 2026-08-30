import Matter from "matter-js";
import type { PlayerProps } from "../entities/Player";
import { soundManager } from "../audio/SoundManager";

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
  let walkSoundElapsed = 0;

  return (entities: Entities, { time }: SystemArgs) => {
    const player = entities.player;
    const speed = 1.5;
    const jumpVelocity = -11;
    const movementSmoothing = 0.2;
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

    const horizontalVelocity =
      player.body.velocity.x +
      (velocityX - player.body.velocity.x) * movementSmoothing;

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
      const distanceFromTop = player.body.bounds.max.y - platform.bounds.min.y;

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

    const startedJump = jumpPressed && !jumpWasPressed && isOnPlatform;

    if (startedJump) {
      Matter.Body.setVelocity(player.body, {
        x: horizontalVelocity,
        y: jumpVelocity,
      });
    } else {
      Matter.Body.setVelocity(player.body, {
        x: horizontalVelocity,
        y: player.body.velocity.y,
      });
    }

    const isAirborne =
      player.body.velocity.y < -0.2 ||
      player.body.velocity.y > 0.75 ||
      (!isOnPlatform && groundedGracePeriod === 0);
    if (startedJump) {
      player.state = "jumping";
      player.frame = 0;
      animationElapsed = 0;
    } else if (isAirborne) {
      player.state = "jumping";
      animationElapsed = 0;

      if (player.body.velocity.y < -6) {
        player.frame = 1;
      } else if (player.body.velocity.y < 0) {
        player.frame = 2;
      } else {
        player.frame = 3;
      }
    } else if (Math.abs(horizontalVelocity) > 0.05) {
      if (player.state !== "walking") {
        player.state = "walking";
        player.frame = 0;
        animationElapsed = 0;
      }

      animationElapsed += time.delta;
      if (animationElapsed >= 100) {
        player.frame = (player.frame + 1) % 8;
        animationElapsed = 0;
      }
    } else {
      player.state = "idle";
      player.frame = 0;
      animationElapsed = 0;
    }

    const isWalking = isOnPlatform && Math.abs(horizontalVelocity) > 0.2;
    walkSoundElapsed = isWalking ? walkSoundElapsed + time.delta : 0;

    if (isWalking && walkSoundElapsed >= 350) {
      soundManager.play("walking", 0.12);
      walkSoundElapsed = 0;
    }

    platforms.forEach((platform) => {
      // Mantém a plataforma atravessável somente durante a subida. Usar o
      // centro do jogador evita desligar a colisão quando uma queda rápida
      // cruza a pequena margem usada pelo teste anterior.
      const isAbovePlatform = player.body.position.y <= platform.position.y;
      const isFalling = player.body.velocity.y >= 0;

      platform.collisionFilter.mask =
        isFalling && isAbovePlatform ? 0xffffffff : 0;
    });

    jumpWasPressed = jumpPressed;

    return entities;
  };
};
