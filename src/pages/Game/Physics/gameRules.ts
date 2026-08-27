import Matter from "matter-js";
import Platform from "../entities/Platform";
import Coin from "../entities/Coin";

interface BodyEntity {
  body: Matter.Body;
}

interface BackgroundEntity extends BodyEntity {
  parallax: number;
  isBackground: true;
}

interface CoinEntity extends BodyEntity {
  platformKey?: string;
  isBackground?: false;
}

interface GameEntities {
  floor: BodyEntity;
  physics: { engine: Matter.Engine; world: Matter.World };
  player: BodyEntity;
  viewport: { height: number; width: number };
  [key: string]: unknown;
  camera: BodyEntity;
  score: { score: number; body: BodyEntity };
  platformEng: BodyEntity;
  door: BodyEntity;
}

const platformSize = { height: 30, width: 140 };
const coinSize = { height: 30, width: 30 };
const minPlatformGap = 110;
const maxPlatformGap = 115;
const endGameParallax = 0.4;
const maxPlatformsPerUpdate = 3;

interface GameRuleHandlers {
  onDoorReached: () => void;
  onGameOver: (score: number) => void;
}

export const createGameRules = ({
  onDoorReached,
  onGameOver,
}: GameRuleHandlers) => {
  let isGameOver = false;
  let nextPlatformIndex = 4;
  let nextCoinIndex = 0;

  return (entities: GameEntities) => {
    if (isGameOver) return entities;

    const { player, floor, viewport, camera, score, platformEng, door } =
      entities;

    const platforms = Object.entries(entities)
      .filter(([key]) => key.startsWith("platform") && key !== "platformEng")
      .map(([key, entity]) => [key, entity as BodyEntity] as const);

    const backgrounds = Object.values(entities).filter(
      (entity): entity is BackgroundEntity =>
        typeof entity === "object" &&
        entity !== null &&
        "isBackground" in entity &&
        entity.isBackground === true &&
        "body" in entity &&
        "parallax" in entity,
    );

    Object.entries(entities).forEach(([coinKey, entity]) => {
      if (!coinKey.startsWith("coin")) return;

      const coin = entity as CoinEntity;
      if (!coin?.body) return;

      if (Matter.Query.collides(player.body, [coin.body]).length > 0) {
        Matter.World.remove(entities.physics.world, coin.body);

        score.score += 10;
        delete entities[coinKey];
      }
    });

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
      onGameOver(score.score);
      return entities;
    }

    // A porta é um sensor: o jogador pode atravessá-la e conclui a jornada
    // ao alcançá-la no cenário final.
    if (Matter.Query.collides(player.body, [door.body]).length > 0) {
      isGameOver = true;
      onDoorReached();
      return entities;
    }

    const cameraLine = viewport.height * 0.35;
    if (player.body.position.y < cameraLine) {
      const offset = cameraLine - player.body.position.y;

      Matter.Body.translate(player.body, { x: 0, y: offset });
      Matter.Body.translate(camera.body, { x: 0, y: offset });
      Matter.Body.translate(floor.body, { x: 0, y: offset });
      // These physical entities must use the same parallax as the final art.
      Matter.Body.translate(platformEng.body, {
        x: 0,
        y: offset * endGameParallax,
      });
      Matter.Body.translate(door.body, {
        x: 0,
        y: offset * endGameParallax,
      });

      backgrounds.forEach((background) => {
        Matter.Body.translate(background.body, {
          x: 0,
          y: offset * background.parallax,
        });
      });
      platforms.forEach(([platformKey, platform]) => {
        Matter.Body.translate(platform.body, { x: 0, y: offset });

        Object.entries(entities).forEach(([coinKey, entity]) => {
          if (!coinKey.startsWith("coin")) return;

          const coin = entity as CoinEntity;
          if (coin.platformKey === platformKey && coin.body) {
            Matter.Body.translate(coin.body, { x: 0, y: offset });
          }
        });
      });
    }

    let highestPlatformY = Math.min(
      ...platforms.map(([, platform]) => platform.body.position.y),
    );

    let generatedPlatforms = 0;

    while (
      highestPlatformY > platformEng?.body?.position.y &&
      generatedPlatforms < maxPlatformsPerUpdate
    ) {
      const minX = platformSize.width / 2;
      const maxX = viewport.width - minX;

      const highestPlatform = platforms.reduce((highest, platform) =>
        platform[1].body.position.y < highest[1].body.position.y
          ? platform
          : highest,
      );

      const maxHorizontalStep = Math.min(110, viewport.width * 0.3);
      const horizontalStep = (Math.random() * 2 - 1) * maxHorizontalStep;

      const x = Math.max(
        minX,
        Math.min(maxX, highestPlatform[1].body.position.x + horizontalStep),
      );

      const y =
        highestPlatformY -
        (minPlatformGap + Math.random() * (maxPlatformGap - minPlatformGap));

      // Para quando a próxima plataforma alcançar a plataforma final.
      if (y <= platformEng.body.position.y) {
        break;
      }

      const key = `platform${nextPlatformIndex}`;

      entities[key] = Platform({
        world: entities.physics.world,
        position: { x, y },
        size: platformSize,
        label: key,
      });

      nextCoinIndex = generateCoins(nextCoinIndex, entities, x, y, key);

      nextPlatformIndex++;
      highestPlatformY = y;
      generatedPlatforms++;
    }

    return entities;
  };
};

const generateCoins = (
  nextCoinIndex: number,
  entities: GameEntities,
  x: number,
  y: number,
  platformKey: string,
) => {
  const randomNum = Math.floor(Math.random() * 5);
  let coinX = x - 27 * Math.floor(randomNum / 2);

  for (let index = 0; index < randomNum; index += 1) {
    const coinKey = `coin${nextCoinIndex}`;

    const coinEntity = Coin({
      world: entities.physics.world,
      color: "",
      position: { x: coinX, y: y - 30 },
      size: coinSize,
      coinType: Math.floor(Math.random() * 12) + 1,
      parallax: 0.2,
    }) as CoinEntity;

    coinEntity.platformKey = platformKey;
    entities[coinKey] = coinEntity;

    coinX += 30;
    nextCoinIndex += 1;
  }

  return nextCoinIndex;
};
