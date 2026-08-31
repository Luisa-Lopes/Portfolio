import Panels from "../../entities/Panels";
import prototipo from "@/assets/prototipoCut.png";
import braco from "@/assets/braco.png";
import Component from "../../entities/Component";
import CloudImage from "@/assets/game/background/nuvem.png";

interface IProjects {
  windowWidth: number;
  windowHeight: number;
  offsetY: number;
}

interface PanelsConfig {
  x: number;
  y: number;
  size: {
    width: number;
    height: number;
  };
  label: string;
  parallax: number;
  image: string;
  text: string;
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

const Projects = ({ windowWidth, windowHeight, offsetY }: IProjects) => {
  const createPanels = (config: PanelsConfig) =>
    Panels({
      position: { x: config.x, y: config.y + offsetY },
      size: config.size,
      label: config.label,
      parallax: config.parallax,
      text: config.text,
      image: config.image,
    });

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

  const backgroundComponents: ComponentConfig[] = [
    // ===== NUVENS DISTANTES (parallax 0.1) =====

    // Lado esquerdo
    {
      x: windowWidth * 0.05,
      y: windowHeight * 0.2,
      size: "small",
      label: "cloudProject",
      parallax: 0.4,
      zIndex: 10,
      image: CloudImage,
    },
    {
      x: windowWidth * 0.12,
      y: windowHeight * 0.3,
      size: "small",
      label: "cloudProject",
      parallax: 0.4,
      zIndex: 8,
      image: CloudImage,
    },
    {
      x: windowWidth * 0.22,
      y: windowHeight * 0.4,
      size: "medium",
      label: "cloudProject",
      parallax: 0.4,
      zIndex: 9,
      image: CloudImage,
    },
    {
      x: windowWidth * 0.3,
      y: windowHeight * 0.82,
      size: "small",
      label: "cloudProject",
      parallax: 0.4,
      zIndex: 10,
      image: CloudImage,
    },
    {
      x: windowWidth * 0.37,
      y: windowHeight * 0.58,
      size: "large",
      label: "cloudProject",
      parallax: 0.4,
      zIndex: 10,
      image: CloudImage,
    },
    {
      x: windowWidth * 0.3,
      y: windowHeight * 0,
      size: "small",
      label: "cloudProject",
      parallax: 0.4,
      zIndex: 10,
      image: CloudImage,
    },
    {
      x: windowWidth * 0.37,
      y: windowHeight * 0.1,
      size: "large",
      label: "cloudProject",
      parallax: 0.4,
      zIndex: 10,
      image: CloudImage,
    },

    // Centro
    {
      x: windowWidth * 0.45,
      y: windowHeight * 0.5,
      size: "small",
      label: "cloudProject",
      parallax: 0.4,
      zIndex: 8,
      image: CloudImage,
    },
    {
      x: windowWidth * 0.55,
      y: windowHeight * 0.45,
      size: "medium",
      label: "cloudProject",
      parallax: 0.4,
      zIndex: 9,
      image: CloudImage,
    },
    {
      x: windowWidth * 0.62,
      y: windowHeight * 0.3,
      size: "small",
      label: "cloudProject",
      parallax: 0.4,
      zIndex: 8,
      image: CloudImage,
    },
    {
      x: windowWidth * 0.7,
      y: windowHeight * 0.2,
      size: "small",
      label: "cloudProject",
      parallax: 0.4,
      zIndex: 8,
      image: CloudImage,
    },
    {
      x: windowWidth * 0.9,
      y: windowHeight * 0.1,
      size: "medium",
      label: "cloudProject",
      parallax: 0.4,
      zIndex: 9,
      image: CloudImage,
    },
    {
      x: windowWidth * 0.6,
      y: windowHeight * 0.2,
      size: "large",
      label: "cloudProject",
      parallax: 0.4,
      zIndex: 8,
      image: CloudImage,
    },

    // Lado direito
    {
      x: windowWidth * 0.72,
      y: windowHeight * 0.6,
      size: "large",
      label: "cloudProject",
      parallax: 0.4,
      zIndex: 10,
      image: CloudImage,
    },
    {
      x: windowWidth * 0.8,
      y: windowHeight * 0.75,
      size: "small",
      label: "cloudProject",
      parallax: 0.4,
      zIndex: 9,
      image: CloudImage,
    },
    {
      x: windowWidth * 0.9,
      y: windowHeight * 0.62,
      size: "medium",
      label: "cloudProject",
      parallax: 0.4,
      zIndex: 10,
      image: CloudImage,
    },
    {
      x: windowWidth * 0.95,
      y: windowHeight * 0.82,
      size: "small",
      label: "cloudProject",
      parallax: 0.4,
      zIndex: 8,
      image: CloudImage,
    },
  ];

  const panelsComponents: PanelsConfig[] = [
    // ===== Mural (parallax 0.1) =====
    {
      x: windowWidth * 0.2,
      y: windowHeight * 0.7,
      size: {
        width: 200,
        height: 300,
      },
      label: "mural",
      parallax: 0.4,
      image: prototipo,
      text: "Protótipo Autoescola",
    },
    {
      x: windowWidth * 0.8,
      y: windowHeight * 0.3,
      size: {
        width: 200,
        height: 300,
      },
      label: "mural",
      parallax: 0.4,
      image: braco,
      text: "Aplicativo Braço de Ferro",
    },
  ];
  return [
    ...panelsComponents.map((config, index) => ({
      key: config.label + index,
      ...createPanels(config),
    })),
    ...backgroundComponents.map((config, index) => ({
      key: config.label + index,
      ...createComponent(config),
    })),
  ];
};

export default Projects;
