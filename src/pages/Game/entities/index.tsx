import Matter from "matter-js";
import Player from "./Player";
import Floor from "./Floor";
import Platform from "./Platform";
import Camera from "./Camera";
import Background from "./Background";
import BackEndBackground from "../ParallaxBackgrounds/BackEnd";
import FrontEndBackground from "../ParallaxBackgrounds/FrontEnd";
import Score from "./Score";
import Projects from "../ParallaxBackgrounds/Projects";
import EndGame from "../ParallaxBackgrounds/EndGame";

interface IEntities {
  viewport: { width: number; height: number };
}

const Entities = ({ viewport }: IEntities) => {
  const windowWidth = viewport.width;
  const windowHeight = viewport.height;
  const engine = Matter.Engine.create({ enableSleeping: false });
  const world = engine.world;

  engine.gravity.y = 0.5;

  return {
    physics: { engine, world },
    viewport: { width: windowWidth, height: windowHeight },
    player: Player({
      world,
      color: "",
      position: { x: windowWidth * 0.25, y: windowHeight - 150 },
      size: { height: 62, width: 44 },
      state: "jumping",
      direction: "left",
      frame: 0,
    }),
    floor: Floor({
      world,
      color: "",
      position: { x: windowWidth / 2, y: windowHeight - 22 },
      size: { height: 44, width: windowWidth },
    }),
    platform0: Platform({
      world,
      position: { x: windowWidth * 0.25, y: windowHeight - 95 },
      size: { height: 30, width: 140 },
      label: "platform0",
    }),
    platform1: Platform({
      world,
      position: { x: windowWidth * 0.43, y: windowHeight - 205 },
      size: { height: 30, width: 140 },
      label: "platform1",
    }),
    platform2: Platform({
      world,
      position: { x: windowWidth * 0.28, y: windowHeight - 315 },
      size: { height: 30, width: 140 },
      label: "platform2",
    }),
    platform3: Platform({
      world,
      position: { x: windowWidth * 0.48, y: windowHeight - 425 },
      size: { height: 30, width: 140 },
      label: "platform3",
    }),
    camera: Camera({
      position: { x: windowWidth / 2, y: windowHeight / 2 },
      size: { height: windowHeight, width: windowWidth },
    }),
    background: Background({
      position: {
        x: windowWidth / 2,
        y: windowHeight / 2,
      },
      size: {
        width: windowWidth,
        height: windowHeight,
      },
      label: "background-front",
      parallax: 0,
      zIndex: 0,
    }),
    score: Score({
      world,
      label: "score",
      score: 0,
      position: { x: windowWidth, y: 0 },
      size: { height: 300, width: 300 },
    }),

    // O jogador avança para valores de Y negativos. Cada cenário ocupa uma
    // altura de tela e começa onde o anterior termina.
    ...FrontEndBackground({ windowWidth, windowHeight, offsetY: 0 }),
    ...Projects({ windowWidth, windowHeight, offsetY: -windowHeight }),
    ...BackEndBackground({
      windowWidth,
      windowHeight,
      offsetY: -2 * windowHeight,
    }),
    ...EndGame({
      world,
      windowWidth,
      windowHeight,
      offsetY: -3 * windowHeight,
    }),
  };
};

export default Entities;
