import Component from "../../entities/Component";
import CloudImage from "@/assets/game/background/nuvem.png";
import monitorImage from "@/assets/game/background/monitor.png";
import htmlImage from "@/assets/game/background/arquivoHtml.png";
import cssImage from "@/assets/game/background/arquivoCss.png";
import muralImage from "@/assets/game/background/mural.png";
import mural2Image from "@/assets/game/background/mural2.png";

interface ComponentConfig {
  x: number;
  y: number;
  size: "small" | "medium" | "large";
  label: string;
  parallax: number;
  zIndex: number;
  image: string;
}

interface IFrontEndBackground {
  windowWidth: number;
  windowHeight: number;
  offsetY: number;
}

const FrontEndBackground = ({
  windowWidth,
  windowHeight,
  offsetY,
}: IFrontEndBackground) => {
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

    ///Lado esquerdo
    {
      x: windowWidth * 0.05,
      y: windowHeight * 0.15,
      size: "small",
      label: "cloud",
      parallax: 0.4,
      zIndex: 10,
      image: CloudImage,
    },
    {
      x: windowWidth * 0.1,
      y: windowHeight * 0.05,
      size: "small",
      label: "cloud",
      parallax: 0.4,
      zIndex: 0,
      image: CloudImage,
    },
    {
      x: windowWidth * 0.2,
      y: windowHeight * 0.1,
      size: "medium",
      label: "cloud",
      parallax: 0.4,
      zIndex: 10,
      image: CloudImage,
    },
    {
      x: windowWidth * 0.35,
      y: windowHeight * 0,
      size: "large",
      label: "cloud",
      parallax: 0.4,
      zIndex: 10,
      image: CloudImage,
    },
    {
      x: windowWidth * 0.13,
      y: windowHeight * 0.05,
      size: "small",
      label: "cloud",
      parallax: 0.4,
      zIndex: 0,
      image: CloudImage,
    },
    {
      x: windowWidth * 0.2,
      y: windowHeight * 0.45,
      size: "small",
      label: "cloud",
      parallax: 0.4,
      zIndex: 0,
      image: CloudImage,
    },
    {
      x: windowWidth * 0.4,
      y: windowHeight * 0.35,
      size: "small",
      label: "cloud",
      parallax: 0.4,
      zIndex: 0,
      image: CloudImage,
    },
    {
      x: windowWidth * 0.1,
      y: windowHeight * 0.3,
      size: "large",
      label: "cloud",
      parallax: 0.4,
      zIndex: 0,
      image: CloudImage,
    },
    {
      x: windowWidth * 0.2,
      y: windowHeight * 0.6,
      size: "large",
      label: "cloud",
      parallax: 0.4,
      zIndex: 0,
      image: CloudImage,
    },
    ///Lado direito
    {
      x: windowWidth * 0.8,
      y: windowHeight * 0.5,
      size: "medium",
      label: "cloud",
      parallax: 0.4,
      zIndex: 10,
      image: CloudImage,
    },
    {
      x: windowWidth * 0.6,
      y: windowHeight * 0.45,
      size: "small",
      label: "cloud",
      parallax: 0.4,
      zIndex: 0,
      image: CloudImage,
    },
    {
      x: windowWidth * 0.75,
      y: windowHeight * 0.3,
      size: "large",
      label: "cloud",
      parallax: 0.4,
      zIndex: 10,
      image: CloudImage,
    },
    {
      x: windowWidth * 0.9,
      y: windowHeight * 0.4,
      size: "small",
      label: "cloud",
      parallax: 0.4,
      zIndex: 0,
      image: CloudImage,
    },
    {
      x: windowWidth * 0.95,
      y: windowHeight * 0.15,
      size: "small",
      label: "cloud",
      parallax: 0.4,
      zIndex: 10,
      image: CloudImage,
    },
    {
      x: windowWidth * 0.9,
      y: windowHeight * 0.1,
      size: "small",
      label: "cloud",
      parallax: 0.4,
      zIndex: 0,
      image: CloudImage,
    },
    {
      x: windowWidth * 0.8,
      y: windowHeight * 0.1,
      size: "medium",
      label: "cloud",
      parallax: 0.4,
      zIndex: 10,
      image: CloudImage,
    },
    {
      x: windowWidth * 0.65,
      y: windowHeight * 0.65,
      size: "small",
      label: "cloud",
      parallax: 0.4,
      zIndex: 0,
      image: CloudImage,
    },
    {
      x: windowWidth * 0.97,
      y: windowHeight * 0.25,
      size: "small",
      label: "cloud",
      parallax: 0.4,
      zIndex: 0,
      image: CloudImage,
    },
    {
      x: windowWidth * 0.75,
      y: windowHeight * 0,
      size: "medium",
      label: "cloud",
      parallax: 0.4,
      zIndex: 0,
      image: CloudImage,
    },
    // ===== Monitor DISTANTES (parallax 0.1) =====

    ///Lado esquerdo

    {
      x: windowWidth * 0.13,
      y: windowHeight * 0.05,
      size: "small",
      label: "monitor",
      parallax: 0.4,
      zIndex: 0,
      image: monitorImage,
    },

    ///Lado direito

    {
      x: windowWidth * 0.85,
      y: windowHeight * 0.1,
      size: "large",
      label: "monitor",
      parallax: 0.4,
      zIndex: 0,
      image: monitorImage,
    },
    {
      x: windowWidth * 0.65,
      y: windowHeight * 0.5,
      size: "medium",
      label: "monitor",
      parallax: 0.4,
      zIndex: 0,
      image: monitorImage,
    },
    {
      x: windowWidth * 0.97,
      y: windowHeight * 0.22,
      size: "small",
      label: "monitor",
      parallax: 0.4,
      zIndex: 0,
      image: monitorImage,
    },
    // ===== HTML File DISTANTES (parallax 0.1) =====

    ///Lado esquerdo
    {
      x: windowWidth * 0.07,
      y: windowHeight * 0.1,
      size: "small",
      label: "html",
      parallax: 0.4,
      zIndex: 0,
      image: htmlImage,
    },

    {
      x: windowWidth * 0.4,
      y: windowHeight * 0,
      size: "small",
      label: "html",
      parallax: 0.4,
      zIndex: 10,
      image: htmlImage,
    },

    {
      x: windowWidth * 0.15,
      y: windowHeight * 0.3,
      size: "small",
      label: "html",
      parallax: 0.4,
      zIndex: 0,
      image: htmlImage,
    },
    ///Lado direito
    {
      x: windowWidth * 0.98,
      y: windowHeight * 0.1,
      size: "small",
      label: "html",
      parallax: 0.4,
      zIndex: 0,
      image: htmlImage,
    },
    /////// Mural

    {
      x: windowWidth * 0.75,
      y: windowHeight * 0.25,
      size: "small",
      label: "mural",
      parallax: 0.4,
      zIndex: 10,
      image: muralImage,
    },
    {
      x: windowWidth * 0.21,
      y: windowHeight * 0.55,
      size: "small",
      label: "mural",
      parallax: 0.4,
      zIndex: 0,
      image: mural2Image,
    },
    /// Arquivo css
    {
      x: windowWidth * 0.85,
      y: windowHeight * 0.44,
      size: "small",
      label: "css",
      parallax: 0.4,
      zIndex: 0,
      image: cssImage,
    },

    {
      x: windowWidth * 0.4,
      y: windowHeight * 0.32,
      size: "small",
      label: "css",
      parallax: 0.4,
      zIndex: 0,
      image: cssImage,
    },
  ];

  return backgroundComponents.reduce(
    (acc, config, index) => ({
      ...acc,
      [config.label + index]: createComponent(config),
    }),
    {},
  );
};

export default FrontEndBackground;
