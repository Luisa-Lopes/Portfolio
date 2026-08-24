import blueCloud from "../../../../assets/game/background/nuvemAzul.png";
import purpleBlueCloud from "../../../../assets/game/background/nuvemAzulRoxo.png";
import darkPurpleCloud from "../../../../assets/game/background/roxoEscuro.png";
import server from "../../../../assets/game/background/servidor.png";
import mural from "../../../../assets/game/background/mural3.png";
import connection from "../../../../assets/game/background/conexao.png";
import gear from "../../../../assets/game/background/engrenagem.png";
import Component from "../../entities/Component";
import plataforma1 from "../../../../assets/game/background/plataforma1.png";
import plataforma2 from "../../../../assets/game/background/plataforma2.png";

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
      label: "cloudBlue",
      parallax: 0.4,
      zIndex: 0,
      image: blueCloud,
    },

    {
      x: windowWidth * 0.1,
      y: windowHeight * 0.87,
      size: "small",
      label: "cloudBlue",
      parallax: 0.4,
      zIndex: 0,
      image: blueCloud,
    },

    {
      x: windowWidth * 0.25,
      y: windowHeight * 0.55,
      size: "small",
      label: "cloudBlue",
      parallax: 0.4,
      zIndex: 0,
      image: blueCloud,
    },

    //Lado Direito

    {
      x: windowWidth * 0.9,
      y: windowHeight * 0.63,
      size: "small",
      label: "cloudBlue",
      parallax: 0.4,
      zIndex: 0,
      image: blueCloud,
    },

    {
      x: windowWidth * 0.7,
      y: windowHeight * 0.85,
      size: "small",
      label: "cloudBlue",
      parallax: 0.4,
      zIndex: 0,
      image: blueCloud,
    },

    /// Nuvem Azul e  Roxa

    // Lado  esquerdo

    {
      x: windowWidth * 0.15,
      y: windowHeight * 0.25,
      size: "small",
      label: "cloudPurpleBlue",
      parallax: 0.4,
      zIndex: 0,
      image: purpleBlueCloud,
    },

    //Lado direito

    {
      x: windowWidth * 0.7,
      y: windowHeight * 0.5,
      size: "small",
      label: "cloudPurpleBlue",
      parallax: 0.4,
      zIndex: 0,
      image: purpleBlueCloud,
    },

    {
      x: windowWidth * 0.85,
      y: windowHeight * 0.27,
      size: "small",
      label: "cloudPurpleBlue",
      parallax: 0.4,
      zIndex: 0,
      image: purpleBlueCloud,
    },

    // Nuvem Roxa

    // Lado  esquerdo

    {
      x: windowWidth * 0.15,
      y: windowHeight * 0.05,
      size: "small",
      label: "cloudPurple",
      parallax: 0.4,
      zIndex: 0,
      image: darkPurpleCloud,
    },

    //Lado direito

    {
      x: windowWidth * 0.8,
      y: windowHeight * 0.13,
      size: "small",
      label: "cloudPurple",
      parallax: 0.4,
      zIndex: 0,
      image: darkPurpleCloud,
    },

    {
      x: windowWidth * 0.9,
      y: windowHeight * 0.1,
      size: "small",
      label: "cloudPurple",
      parallax: 0.4,
      zIndex: 0,
      image: darkPurpleCloud,
    },

    ///Servidores

    ///Lado esquerdo

    {
      x: windowWidth * 0.15,
      y: windowHeight * 0.15,
      size: "small",
      label: "server",
      parallax: 0.4,
      zIndex: 10,
      image: server,
    },

    ///Mural
    {
      x: windowWidth * 0.1,
      y: windowHeight * 0.6,
      size: "small",
      label: "muralWide",
      parallax: 0.4,
      zIndex: 10,
      image: mural,
    },

    {
      x: windowWidth * 0.3,
      y: windowHeight * 0.2,
      size: "small",
      label: "muralWide",
      parallax: 0.4,
      zIndex: 10,
      image: mural,
    },

    //

    {
      x: windowWidth * 0.85,
      y: windowHeight * 0.1,
      size: "small",
      label: "connection",
      parallax: 0.4,
      zIndex: 0,
      image: connection,
    },
    {
      x: windowWidth * 0.2,
      y: windowHeight * 0.7,
      size: "small",
      label: "connection",
      parallax: 0.4,
      zIndex: 0,
      image: connection,
    },

    //gear
    {
      x: windowWidth * 0.85,
      y: windowHeight * 0.6,
      size: "small",
      label: "gear",
      parallax: 0.4,
      zIndex: 0,
      image: gear,
    },

    //Plataforma1

    {
      x: windowWidth * 0.85,
      y: windowHeight * 0.4,
      size: "small",
      label: "platBack1",
      parallax: 0.4,
      zIndex: 0,
      image: plataforma1,
    },
    {
      x: windowWidth * 0.2,
      y: windowHeight * 0.4,
      size: "small",
      label: "platBack1",
      parallax: 0.4,
      zIndex: 0,
      image: plataforma1,
    },

    //Plataforma2

    {
      x: windowWidth * 0.8,
      y: windowHeight * 0.7,
      size: "small",
      label: "platBack2",
      parallax: 0.4,
      zIndex: 0,
      image: plataforma2,
    },
    {
      x: windowWidth * 0.4,
      y: windowHeight * 0.3,
      size: "small",
      label: "platBack2",
      parallax: 0.4,
      zIndex: 0,
      image: plataforma2,
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
