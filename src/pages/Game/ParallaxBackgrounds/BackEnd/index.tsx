import blueCloud from "@/assets/game/background/nuvemAzul.png";
import Component from "../../entities/Component";
import api from "@/assets/game/background/api.png";
import jwt from "@/assets/game/background/jwt.png";
import mvc from "@/assets/game/background/mvc.png";
import placaBack from "@/assets/game/background/placaBack.png";

interface ComponentConfig {
  x: number;
  y: number;
  size: "small" | "medium" | "large";
  label: string;
  parallax: number;
  zIndex: number;
  image: string;
}

interface IBackEndBackground {
  windowWidth: number;
  windowHeight: number;
  offsetY: number;
}

const BackEndBackground = ({
  windowWidth,
  windowHeight,
  offsetY,
}: IBackEndBackground) => {
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
      x: windowWidth * 0.2,
      y: windowHeight * 0.75,
      size: "small",
      label: "blueCloud",
      parallax: 0.4,
      zIndex: 0,
      image: blueCloud,
    },
    {
      x: windowWidth * 0.1,
      y: windowHeight * 0.87,
      size: "medium",
      label: "blueCloud",
      parallax: 0.4,
      zIndex: 0,
      image: blueCloud,
    },

    {
      x: windowWidth * 0.25,
      y: windowHeight * 0.55,
      size: "large",
      label: "blueCloud",
      parallax: 0.4,
      zIndex: 0,
      image: blueCloud,
    },

    {
      x: windowWidth * 0.1,
      y: windowHeight * 0.3,
      size: "small",
      label: "blueCloud",
      parallax: 0.4,
      zIndex: 0,
      image: blueCloud,
    },

    //Lado Direito

    {
      x: windowWidth * 0.9,
      y: windowHeight * 0.63,
      size: "medium",
      label: "blueCloud",
      parallax: 0.4,
      zIndex: 0,
      image: blueCloud,
    },

    {
      x: windowWidth * 0.7,
      y: windowHeight * 0.85,
      size: "medium",
      label: "blueCloud",
      parallax: 0.4,
      zIndex: 0,
      image: blueCloud,
    },

    {
      x: windowWidth * 0.9,
      y: windowHeight,
      size: "large",
      label: "blueCloud",
      parallax: 0.4,
      zIndex: 0,
      image: blueCloud,
    },

    {
      x: windowWidth * 0.7,
      y: windowHeight * 0.9,
      size: "large",
      label: "blueCloud",
      parallax: 0.4,
      zIndex: 0,
      image: blueCloud,
    },

    /// Nuvem Azul e  Roxa

    // Lado  esquerdo

    {
      x: windowWidth * 0.15,
      y: windowHeight * 0.25,
      size: "large",
      label: "blueCloud",
      parallax: 0.4,
      zIndex: 0,
      image: blueCloud,
    },
    {
      x: windowWidth * 0.3,
      y: windowHeight * 0.1,
      size: "large",
      label: "blueCloud",
      parallax: 0.4,
      zIndex: 0,
      image: blueCloud,
    },

    //Lado direito

    {
      x: windowWidth * 0.7,
      y: windowHeight * 0.5,
      size: "medium",
      label: "blueCloud",
      parallax: 0.4,
      zIndex: 0,
      image: blueCloud,
    },

    {
      x: windowWidth * 0.85,
      y: windowHeight * 0.27,
      size: "small",
      label: "large",
      parallax: 0.4,
      zIndex: 0,
      image: blueCloud,
    },

    // Nuvem Roxa

    // Lado  esquerdo

    {
      x: windowWidth * 0.15,
      y: windowHeight * 0.05,
      size: "large",
      label: "blueCloud",
      parallax: 0.4,
      zIndex: 0,
      image: blueCloud,
    },

    //Lado direito

    {
      x: windowWidth * 0.7,
      y: windowHeight * 0.02,
      size: "small",
      label: "medium",
      parallax: 0.4,
      zIndex: 0,
      image: blueCloud,
    },

    {
      x: windowWidth * 0.9,
      y: windowHeight * 0.05,
      size: "small",
      label: "large",
      parallax: 0.4,
      zIndex: 0,
      image: blueCloud,
    },
    ///Lado esquerdo

    {
      x: windowWidth * 0.2,
      y: windowHeight * 0.3,
      size: "small",
      label: "jwt",
      parallax: 0.4,
      zIndex: 10,
      image: jwt,
    },

    ///Mural

    {
      x: windowWidth * 0.9,
      y: windowHeight * 0.5,
      size: "small",
      label: "mvc",
      parallax: 0.4,
      zIndex: 10,
      image: mvc,
    },

    //Placa Back

    {
      x: windowWidth * 0.2,
      y: windowHeight * 0.75,
      size: "medium",
      label: "placaBack",
      parallax: 0.4,
      zIndex: 10,
      image: placaBack,
    },

    //Api

    {
      x: windowWidth * 0.75,
      y: windowHeight * 0.8,
      size: "small",
      label: "api",
      parallax: 0.4,
      zIndex: 10,
      image: api,
    },

    {
      x: windowWidth * 0.8,
      y: windowHeight * 0.2,
      size: "small",
      label: "api",
      parallax: 0.4,
      zIndex: 10,
      image: api,
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

export default BackEndBackground;
