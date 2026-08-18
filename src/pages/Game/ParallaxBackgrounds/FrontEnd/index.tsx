import Component from "../../entities/Component";
import CloudImage from "../../../../assets/game/background/nuvem.png";
import monitorImage from "../../../../assets/game/background/monitor.png";
import htmlImage from "../../../../assets/game/background/arquivoHtml.png";
import cssImage from "../../../../assets/game/background/arquivoCss.png";
import muralImage from "../../../../assets/game/background/mural.png";
import mural2Image from "../../../../assets/game/background/mural2.png";

interface ComponentConfig {
  x: number;
  y: number;
  width: number;
  height: number;
  label: string;
  parallax: number;
  zIndex: number;
  image: string;
}

interface IFrontEndBackground {
  windowWidth: number;
  windowHeight: number;
}

const FrontEndBackground = ({
  windowWidth,
  windowHeight,
}: IFrontEndBackground) => {
  const createComponent = (config: ComponentConfig) =>
    Component({
      position: { x: config.x, y: config.y },
      size: { width: config.width, height: config.height },
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
      width: 160,
      height: 160,
      label: "cloud",
      parallax: 0.2,
      zIndex: 10,
      image: CloudImage,
    },
    {
      x: windowWidth * 0.1,
      y: windowHeight * 0.05,
      width: 150,
      height: 150,
      label: "cloud",
      parallax: 0.2,
      zIndex: 0,
      image: CloudImage,
    },
    {
      x: windowWidth * 0.2,
      y: windowHeight * 0.1,
      width: 200,
      height: 200,
      label: "cloud",
      parallax: 0.2,
      zIndex: 10,
      image: CloudImage,
    },
    {
      x: windowWidth * 0.35,
      y: windowHeight * 0,
      width: 300,
      height: 300,
      label: "cloud",
      parallax: 0.2,
      zIndex: 10,
      image: CloudImage,
    },
    {
      x: windowWidth * 0.13,
      y: -windowHeight * 0.05,
      width: 150,
      height: 150,
      label: "cloud",
      parallax: 0.2,
      zIndex: 0,
      image: CloudImage,
    },
    {
      x: windowWidth * 0.5,
      y: -windowHeight * 0.45,
      width: 170,
      height: 170,
      label: "cloud",
      parallax: 0.2,
      zIndex: 0,
      image: CloudImage,
    },
    {
      x: windowWidth * 0.4,
      y: -windowHeight * 0.35,
      width: 130,
      height: 130,
      label: "cloud",
      parallax: 0.2,
      zIndex: 0,
      image: CloudImage,
    },
    {
      x: windowWidth * 0.15,
      y: -windowHeight * 0.3,
      width: 270,
      height: 270,
      label: "cloud",
      parallax: 0.2,
      zIndex: 0,
      image: CloudImage,
    },
    {
      x: windowWidth * 0.3,
      y: -windowHeight * 0.5,
      width: 300,
      height: 300,
      label: "cloud",
      parallax: 0.2,
      zIndex: 10,
      image: CloudImage,
    },
    ///Lado direito
    {
      x: windowWidth * 0.8,
      y: windowHeight * 0.5,
      width: 220,
      height: 220,
      label: "cloud",
      parallax: 0.2,
      zIndex: 10,
      image: CloudImage,
    },
    {
      x: windowWidth * 0.6,
      y: windowHeight * 0.45,
      width: 150,
      height: 150,
      label: "cloud",
      parallax: 0.2,
      zIndex: 0,
      image: CloudImage,
    },
    {
      x: windowWidth * 0.75,
      y: windowHeight * 0.3,
      width: 300,
      height: 300,
      label: "cloud",
      parallax: 0.2,
      zIndex: 10,
      image: CloudImage,
    },
    {
      x: windowWidth * 0.9,
      y: windowHeight * 0.4,
      width: 150,
      height: 150,
      label: "cloud",
      parallax: 0.2,
      zIndex: 0,
      image: CloudImage,
    },
    {
      x: windowWidth * 0.95,
      y: windowHeight * 0.15,
      width: 160,
      height: 160,
      label: "cloud",
      parallax: 0.2,
      zIndex: 10,
      image: CloudImage,
    },
    {
      x: windowWidth * 0.9,
      y: windowHeight * 0.05,
      width: 150,
      height: 150,
      label: "cloud",
      parallax: 0.2,
      zIndex: 0,
      image: CloudImage,
    },
    {
      x: windowWidth * 0.8,
      y: -windowHeight * 0.1,
      width: 200,
      height: 200,
      label: "cloud",
      parallax: 0.2,
      zIndex: 10,
      image: CloudImage,
    },
    {
      x: windowWidth * 0.65,
      y: -windowHeight * 0.3,
      width: 300,
      height: 300,
      label: "cloud",
      parallax: 0.2,
      zIndex: 0,
      image: CloudImage,
    },
    {
      x: windowWidth * 0.97,
      y: -windowHeight * 0.25,
      width: 150,
      height: 150,
      label: "cloud",
      parallax: 0.2,
      zIndex: 0,
      image: CloudImage,
    },
    // ===== Monitor DISTANTES (parallax 0.1) =====

    ///Lado esquerdo

    {
      x: windowWidth * 0.13,
      y: windowHeight * 0.05,
      width: 150,
      height: 150,
      label: "monitor",
      parallax: 0.2,
      zIndex: 0,
      image: monitorImage,
    },

    ///Lado direito

    {
      x: windowWidth * 0.9,
      y: -windowHeight * 0.1,
      width: 150,
      height: 150,
      label: "monitor",
      parallax: 0.2,
      zIndex: 0,
      image: monitorImage,
    },
    {
      x: windowWidth * 0.65,
      y: -windowHeight * 0.3,
      width: 130,
      height: 130,
      label: "monitor",
      parallax: 0.2,
      zIndex: 0,
      image: monitorImage,
    },
    {
      x: windowWidth * 0.97,
      y: -windowHeight * 0.25,
      width: 150,
      height: 150,
      label: "monitor",
      parallax: 0.2,
      zIndex: 0,
      image: monitorImage,
    },
    // ===== HTML File DISTANTES (parallax 0.1) =====

    ///Lado esquerdo
    {
      x: windowWidth * 0.07,
      y: windowHeight * 0.1,
      width: 70,
      height: 90,
      label: "html",
      parallax: 0.2,
      zIndex: 0,
      image: htmlImage,
    },

    {
      x: windowWidth * 0.25,
      y: -windowHeight * 0.05,
      width: 70,
      height: 90,
      label: "html",
      parallax: 0.2,
      zIndex: 0,
      image: htmlImage,
    },

    {
      x: windowWidth * 0.15,
      y: -windowHeight * 0.3,
      width: 70,
      height: 90,
      label: "html",
      parallax: 0.2,
      zIndex: 0,
      image: htmlImage,
    },
    ///Lado direito
    {
      x: windowWidth * 0.98,
      y: windowHeight * 0.1,
      width: 60,
      height: 80,
      label: "html",
      parallax: 0.2,
      zIndex: 0,
      image: htmlImage,
    },
    /////// Mural

    {
      x: windowWidth * 0.75,
      y: windowHeight * 0.25,
      width: 200,
      height: 300,
      label: "mural",
      parallax: 0.2,
      zIndex: 10,
      image: muralImage,
    },
    {
      x: windowWidth * 0.3,
      y: -windowHeight * 0.58,
      width: 150,
      height: 150,
      label: "mural",
      parallax: 0.2,
      zIndex: 0,
      image: mural2Image,
    },
    /// Arquivo css
    {
      x: windowWidth * 0.85,
      y: windowHeight * 0.44,
      width: 60,
      height: 80,
      label: "css",
      parallax: 0.2,
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
