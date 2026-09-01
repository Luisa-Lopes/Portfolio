import type Matter from "matter-js";
import Door from "../../entities/Door";
import Platform from "../../entities/Platform";
import PlatformImage from "@/assets/game/plataforma.png";
import Component from "../../entities/Component";
import Saudacao from "@/assets/game/saudacao.png";

interface IProjects {
  windowWidth: number;
  windowHeight: number;
  offsetY: number;
  world: Matter.World;
}

const EndGame = ({ world, windowWidth, windowHeight, offsetY }: IProjects) => {
  const platformY =
    (windowHeight < 500 ? windowHeight : windowHeight * 0.7) + offsetY;
  const platformHeight = 100;
  const doorHeight = 250;

  return {
    door: Door({
      world,
      position: {
        x: windowWidth * 0.3,
        y: platformY - platformHeight / 2 - doorHeight / 2 + 20,
      },
      size: { height: doorHeight, width: 200 },
      label: "door",
      parallax: 0.4,
      zIndex: 110,
    }),
    platformEng: Platform({
      world,
      position: {
        x: windowWidth / 2,
        y: platformY,
      },
      size: { width: windowWidth * 0.95, height: platformHeight },
      label: "platformEng",
      image: PlatformImage,
      zIndex: 100,
    }),
    text: Component({
      position: { x: windowWidth * 0.7, y: windowHeight * 0.4 + offsetY },
      size: "large",
      label: "saudacao",
      // Mantém o mesmo parallax dos cenários que o antecedem.
      parallax: 0.4,
      zIndex: 20,
      image: Saudacao,
      windowHeight,
      windowWidth,
    }),
  };
};

export default EndGame;
