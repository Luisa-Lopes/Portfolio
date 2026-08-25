import type Matter from "matter-js";
import Door from "../../entities/Door";
import Platform from "../../entities/Platform";
import PlatformImage from "../../../../assets/game/plataforma.png";
import Component from "../../entities/Component";
import Saudacao from "../../../../assets/game/saudacao.png";

interface IProjects {
  windowWidth: number;
  windowHeight: number;
  offsetY: number;
  world: Matter.World;
}

const EndGame = ({ world, windowWidth, windowHeight, offsetY }: IProjects) => {
  return {
    door: Door({
      world,
      position: { x: windowWidth * 0.3, y: windowHeight * 0.51 + offsetY },
      size: { height: windowHeight * 0.35, width: windowWidth * 0.3 },
      label: "door",
      parallax: 0.4,
    }),
    platformEng: Platform({
      world,
      position: { x: windowWidth / 2, y: windowHeight * 0.7 + offsetY },
      size: { width: windowWidth * 0.95, height: windowHeight * 0.2 },
      label: "platformEng",
      image: PlatformImage,
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
