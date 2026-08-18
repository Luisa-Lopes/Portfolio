import blueCloud from "../../../../assets/game/background/nuvemAzul.png";
import purpleBlueCloud from "../../../../assets/game/background/nuvemAzulRoxo.png";
import darkPurpleCloud from "../../../../assets/game/background/roxoEscuro.png";
import server from "../../../../assets/game/background/servidor.png";
import mural from "../../../../assets/game/background/mural3.png";
import conection from "../../../../assets/game/background/conexao.png";
import Component from "../../entities/Component";

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

interface IBackEndBackground {
  windowWidth: number;
  windowHeight: number;
}

const BackEndBackground = ({
  windowWidth,
  windowHeight,
}: IBackEndBackground) => {
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
      x: windowWidth * 0.15,
      y: windowHeight * 0.15,
      width: 200,
      height: 200,
      label: "cloudBlue",
      parallax: 0.2,
      zIndex: 10,
      image: darkPurpleCloud,
    },
    {
      x: windowWidth * 0.4,
      y: windowHeight * 0.1,
      width: 200,
      height: 200,
      label: "cloudBlue",
      parallax: 0.2,
      zIndex: 0,
      image: darkPurpleCloud,
    },
    {
      x: windowWidth * 0.2,
      y: windowHeight * 0.3,
      width: 250,
      height: 250,
      label: "cloudBlue",
      parallax: 0.2,
      zIndex: 0,
      image: purpleBlueCloud,
    },
    {
      x: windowWidth * 0.05,
      y: windowHeight * 0.5,
      width: 200,
      height: 200,
      label: "cloudBlue",
      parallax: 0.2,
      zIndex: 10,
      image: purpleBlueCloud,
    },
    {
      x: windowWidth * 0.45,
      y: windowHeight * 0.4,
      width: 160,
      height: 160,
      label: "cloudBlue",
      parallax: 0.2,
      zIndex: 0,
      image: blueCloud,
    },
    {
      x: windowWidth * 0.3,
      y: windowHeight * 0.55,
      width: 140,
      height: 140,
      label: "cloudBlue",
      parallax: 0.2,
      zIndex: 0,
      image: blueCloud,
    },
    {
      x: windowWidth * 0.5,
      y: windowHeight * 0.6,
      width: 140,
      height: 140,
      label: "cloudBlue",
      parallax: 0.2,
      zIndex: 10,
      image: purpleBlueCloud,
    },
    {
      x: windowWidth * 0.23,
      y: windowHeight * 0.7,
      width: 160,
      height: 160,
      label: "cloudBlue",
      parallax: 0.2,
      zIndex: 0,
      image: blueCloud,
    },

    //Lado Direito
    {
      x: windowWidth * 0.95,
      y: windowHeight * 0.1,
      width: 200,
      height: 200,
      label: "cloudBlue",
      parallax: 0.2,
      zIndex: 0,
      image: darkPurpleCloud,
    },
    {
      x: windowWidth * 0.82,
      y: windowHeight * 0.17,
      width: 110,
      height: 110,
      label: "cloudBlue",
      parallax: 0.2,
      zIndex: 10,
      image: darkPurpleCloud,
    },
    {
      x: windowWidth * 0.8,
      y: windowHeight * 0.3,
      width: 160,
      height: 160,
      label: "cloudBlue",
      parallax: 0.2,
      zIndex: 10,
      image: purpleBlueCloud,
    },
    {
      x: windowWidth * 0.75,
      y: windowHeight * 0.5,
      width: 200,
      height: 200,
      label: "cloudBlue",
      parallax: 0.2,
      zIndex: 10,
      image: purpleBlueCloud,
    },
    {
      x: windowWidth * 0.56,
      y: windowHeight * 0.2,
      width: 250,
      height: 250,
      label: "cloudBlue",
      parallax: 0.2,
      zIndex: 0,
      image: darkPurpleCloud,
    },
    {
      x: windowWidth * 0.7,
      y: windowHeight * 0.1,
      width: 200,
      height: 200,
      label: "cloudBlue",
      parallax: 0.2,
      zIndex: 0,
      image: darkPurpleCloud,
    },
    {
      x: windowWidth * 0.65,
      y: windowHeight * 0.7,
      width: 250,
      height: 250,
      label: "cloudBlue",
      parallax: 0.2,
      zIndex: 0,
      image: blueCloud,
    },
    {
      x: windowWidth * 0.9,
      y: windowHeight * 0.6,
      width: 100,
      height: 100,
      label: "cloudBlue",
      parallax: 0.2,
      zIndex: 0,
      image: blueCloud,
    },
    {
      x: windowWidth * 0.8,
      y: windowHeight * 0.63,
      width: 140,
      height: 140,
      label: "cloudBlue",
      parallax: 0.2,
      zIndex: 0,
      image: blueCloud,
    },

    ///Servidores

    ///Lado esquerdo

    {
      x: windowWidth * 0.15,
      y: windowHeight * 0.15,
      width: 70,
      height: 70,
      label: "server",
      parallax: 0.2,
      zIndex: 10,
      image: server,
    },
    {
      x: windowWidth * 0.5,
      y: windowHeight * 0.57,
      width: 70,
      height: 70,
      label: "server",
      parallax: 0.2,
      zIndex: 0,
      image: server,
    },
    {
      x: windowWidth * 0.23,
      y: windowHeight * 0.7,
      width: 70,
      height: 70,
      label: "server",
      parallax: 0.2,
      zIndex: 0,
      image: server,
    },

    ///Mural
    {
      x: windowWidth * 0.75,
      y: windowHeight * 0.4,
      width: 150,
      height: 200,
      label: "cloudBlue",
      parallax: 0.2,
      zIndex: 10,
      image: mural,
    },

    {
      x: windowWidth * 0.3,
      y: windowHeight * 0.3,
      width: 150,
      height: 200,
      label: "cloudBlue",
      parallax: 0.2,
      zIndex: 10,
      image: mural,
    },

    {
      x: windowWidth * 0.85,
      y: windowHeight * 0.1,
      width: 120,
      height: 150,
      label: "cloudBlue",
      parallax: 0.2,
      zIndex: 0,
      image: conection,
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
