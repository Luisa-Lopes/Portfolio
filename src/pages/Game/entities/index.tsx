import Matter from "matter-js";
import Player from "./Player";
import Floor from "./Floor";
import Platform from "./Platform";

const Entities = () => {
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;
  const engine = Matter.Engine.create({ enableSleeping: false });
  const world = engine.world;

  engine.gravity.y = 0.45;

  return {
    physics: { engine, world },
    viewport: { width: windowWidth, height: windowHeight },
    player: Player({
      world,
      color: "",
      position: { x: windowWidth * 0.25, y: windowHeight - 150 },
      size: { height: 62, width: 44 },
      state: "idle",
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
      color: "",
      position: { x: windowWidth * 0.25, y: windowHeight - 95 },
      size: { height: 30, width: 140 },
      label: "platform0",
    }),
    platform1: Platform({
      world,
      color: "",
      position: { x: windowWidth * 0.43, y: windowHeight - 205 },
      size: { height: 30, width: 140 },
      label: "platform1",
    }),
    platform2: Platform({
      world,
      color: "",
      position: { x: windowWidth * 0.28, y: windowHeight - 315 },
      size: { height: 30, width: 140 },
      label: "platform2",
    }),
    platform3: Platform({
      world,
      color: "",
      position: { x: windowWidth * 0.48, y: windowHeight - 425 },
      size: { height: 30, width: 140 },
      label: "platform3",
    }),
  };
};

export default Entities;
