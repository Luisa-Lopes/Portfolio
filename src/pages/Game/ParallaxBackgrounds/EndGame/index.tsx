import Component from "../../entities/Component";
import Door from "../../../../assets/game/Door.png";
import Platform from "../../../../assets/game/plataforma.png";
import Text from "../../entities/Text";

interface IProjects {
  windowWidth: number;
  windowHeight: number;
  offsetY: number;
}

interface ComponentConfig {
  x: number;
  y: number;
  size: "small" | "medium" | "large";
  label: string;
  parallax: number;
  zIndex: number;
  image: string;
}

const EndGame = ({ windowWidth, windowHeight, offsetY }: IProjects) => {
  const createComponent = (config: ComponentConfig) =>
    Component({
      position: { x: config.x, y: config.y + offsetY },
      size: config.size,
      windowHeight: windowHeight,
      windowWidth: windowWidth,
      label: config.label,
      parallax: config.parallax,
      zIndex: config.zIndex,
      image: config.image,
    });

  const createText = (config: PanelsConfig) =>
    Text({
      position: { x: config.x, y: config.y + offsetY },
      size: config.size,
      label: config.label,
      parallax: config.parallax,
    });

  const backgroundComponents: ComponentConfig[] = [
    // ===== NUVENS DISTANTES (parallax 0.1) =====
    // Lado esquerdo
    {
      x: windowWidth * 0.25,
      y: windowHeight * 0.56,
      size: "large",
      label: "door",
      parallax: 0.4,
      zIndex: 10,
      image: Door,
    },
    {
      x: windowWidth * 0.5,
      y: windowHeight * 0.75,
      size: "large",
      label: "platformDoor",
      parallax: 0.4,
      zIndex: 2,
      image: Platform,
    },
  ];

  return [
    ...backgroundComponents.map((config, index) => ({
      key: config.label + index,
      ...createComponent(config),
    })),
  ];
};

export default EndGame;
