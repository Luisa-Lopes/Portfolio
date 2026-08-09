import Matter from "matter-js";
import Platform from "../entities/Platform";

interface BodyEntity {
  body: Matter.Body;
}

interface GameEntities {
  floor: BodyEntity;
  physics: { engine: Matter.Engine; world: Matter.World };
  player: BodyEntity;
  viewport: { height: number; width: number };
  [key: string]: unknown;
}

const platformSize = { height: 30, width: 140 };
const minPlatformGap = 100;
const maxPlatformGap = 115;

export const createGameRules = (onGameOver: () => void) => {
  let isGameOver = false;
  let nextPlatformIndex = 4;

  return (entities: GameEntities) => {
    if (isGameOver) return entities;

    const { player, floor, viewport } = entities;
    const platforms = Object.entries(entities)
      .filter(([key]) => key.startsWith("platform"))
      .map(([key, entity]) => [key, entity as BodyEntity] as const);

    const playerHalfWidth =
      (player.body.bounds.max.x - player.body.bounds.min.x) / 2;
    const boundedX = Math.max(
      playerHalfWidth,
      Math.min(viewport.width - playerHalfWidth, player.body.position.x),
    );

    if (boundedX !== player.body.position.x) {
      Matter.Body.setPosition(player.body, {
        x: boundedX,
        y: player.body.position.y,
      });
      Matter.Body.setVelocity(player.body, { x: 0, y: player.body.velocity.y });
    }

    const touchedFloor =
      Matter.Query.collides(player.body, [floor.body]).length > 0;
    const leftScreen = player.body.position.y > viewport.height + 100;

    if (touchedFloor || leftScreen) {
      isGameOver = true;
      onGameOver();
      return entities;
    }

    const cameraLine = viewport.height * 0.35;
    if (player.body.position.y < cameraLine) {
      const offset = cameraLine - player.body.position.y;
      Matter.Body.translate(player.body, { x: 0, y: offset });
      Matter.Body.translate(floor.body, { x: 0, y: offset });
      platforms.forEach(([, platform]) => {
        Matter.Body.translate(platform.body, { x: 0, y: offset });
      });
    }

    let highestPlatformY = Math.min(
      ...platforms.map(([, platform]) => platform.body.position.y),
    );

    while (highestPlatformY > 0) {
      const minX = platformSize.width / 2;
      const maxX = viewport.width - minX;
      const highestPlatform = platforms.reduce((highest, platform) =>
        platform[1].body.position.y < highest[1].body.position.y
          ? platform
          : highest,
      );
      const maxHorizontalStep = Math.min(110, viewport.width * 0.24);
      const horizontalStep = (Math.random() * 2 - 1) * maxHorizontalStep;

      const x = Math.max(
        minX,
        Math.min(maxX, highestPlatform[1].body.position.x + horizontalStep),
      );

      const y =
        highestPlatformY -
        (minPlatformGap + Math.random() * (maxPlatformGap - minPlatformGap));
      const key = `platform${nextPlatformIndex}`;

      entities[key] = Platform({
        world: entities.physics.world,
        color: "",
        position: { x, y },
        size: platformSize,
        label: key,
      });
      nextPlatformIndex += 1;
      highestPlatformY = y;
    }

    return entities;
  };
};
