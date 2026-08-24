import { useEffect, useState } from "react";
import { Link } from "react-router";
import "./Start.css";
import "./loading.css";
import blueCloud from "../../../../assets/game/background/nuvemAzul.png";
import darkPurpleCloud from "../../../../assets/game/background/roxoEscuro.png";
import player from "../../../../assets/game/idleLeft.png";

import keyA from "../../../../assets/game/keyboard/a.png";
import keyW from "../../../../assets/game/keyboard/w.png";
import keyD from "../../../../assets/game/keyboard/D.png";
import keyS from "../../../../assets/game/keyboard/s.png";

import cCoin from "../../../../assets/game/coins/cCoin.png";
import gitCoin from "../../../../assets/game/coins/gitCoin.png";
import postgresCoin from "../../../../assets/game/coins/postgresCoin.png";
import tsCoin from "../../../../assets/game/coins/tsCoin.png";

interface IStart {
  onClickStart: () => void;
}

const clouds = [
  { src: blueCloud, className: "cloud cloud-one" },
  { src: darkPurpleCloud, className: "cloud cloud-two" },
  { src: blueCloud, className: "cloud cloud-three" },
  { src: darkPurpleCloud, className: "cloud cloud-four" },
  { src: blueCloud, className: "cloud cloud-five" },
  { src: darkPurpleCloud, className: "cloud cloud-six" },
];

const coins = [
  { src: cCoin, className: "coin cCoin" },
  { src: gitCoin, className: "coin gitCoin" },
  { src: postgresCoin, className: "coin postgresCoin" },
  { src: tsCoin, className: "coin  tsCoin" },
];

const Start = ({ onClickStart }: IStart) => {
  const texto = "Ana Luísa S. Lopes";
  const velocidade = 100;

  const [textoAtual, setTextoAtual] = useState("");
  const [index, setIndex] = useState(0);
  const [pageState, setPageState] = useState("start");
  const [transition, setTransition] = useState("fade-in");

  useEffect(() => {
    if (index < texto.length) {
      const timer = setTimeout(() => {
        setTextoAtual((prev) => prev + texto.charAt(index));
        setIndex((prev) => prev + 1);
      }, velocidade);

      return () => clearTimeout(timer);
    }
  }, [index, texto, velocidade]);

  const changePage = (nextPage: string) => {
    setTransition("fade-out");

    setTimeout(() => {
      setPageState(nextPage);
      setTransition("fade-in");
    }, 300);
  };

  const loadInformation = () => {
    changePage("loading");

    setTimeout(() => {
      changePage("loaded");

      setTimeout(() => {
        setTransition("fade-out");

        setTimeout(onClickStart, 500);
      }, 5000);
    }, 5000);
  };

  if (pageState === "start") {
    return (
      <section
        className={`game-start-shell game-start-transition ${transition}`}
      >
        <div className="game-start-glow" />

        {clouds.map((cloud, index) => (
          <div key={`${cloud.className}-${index}`} className={cloud.className}>
            <img src={cloud.src} alt="Nuvem" />
          </div>
        ))}

        <div className="game-start-content">
          <div className="game-copy">
            <h1
              className="font-honk bg-linear-to-r from-white to-purple-400 bg-clip-text text-3xl font-extrabold text-transparent p-0 m-0"
              style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}
            >
              Portifólio Game
            </h1>
            <div className="typing-line game-copy__typing">
              {textoAtual}
              <span className="typing-cursor" />
            </div>

            <p className="game-description game-copy__description">
              <div className="font-bold">Uma aventura pelo meu portfólio.</div>
              Supere obstáculos, explore minhas habilidades e desbloqueie cada
              etapa da minha trajetória como desenvolvedora.
            </p>

            <div
              className="game-badges game-copy__badges"
              aria-label="Tecnologias do projeto"
            >
              <span>React</span>
              <span>TypeScript</span>
              <span>Matter.js</span>
              <span>Game Engine</span>
            </div>

            <div className="game-actions game-copy__actions">
              <button type="button" onClick={loadInformation}>
                Começar jogo
              </button>
              <Link to="/" className="secondary-button">
                Ir para landing page
              </Link>
            </div>
          </div>

          <div className="game-visual-panel">
            <div className="game-info-card game-panel__card">
              <span className="card-label">Objetivo</span>
              <strong>Chegar ao topo</strong>
              <p>
                Pule, equilibre e domine cada plataforma para conquistar a
                vitória.
              </p>
            </div>

            <div className="player-stage game-panel__player">
              <img src={player} alt="Personagem do jogo" />
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (pageState === "loading")
    return (
      <section
        key="loading"
        className={`game-start-shell game-start-transition game-loading flex-col ${transition}`}
      >
        <div className="game-start-glow" />
        {clouds.map((cloud, index) => (
          <div key={`${cloud.className}-${index}`} className={cloud.className}>
            <img src={cloud.src} alt="Nuvem" />
          </div>
        ))}

        <h1 className="font-honk bg-linear-to-r from-white to-purple-400 bg-clip-text text-3xl font-extrabold text-transparent  ">
          Prepare-se
        </h1>

        <section className="flex flex-col items-center">
          <div key={`key key-w`} className={"key key-w"}>
            <img src={keyW} alt="key" />
          </div>
          <section className="flex">
            <div key={`key key-a`} className={"key key-a"}>
              <img src={keyA} alt="key" />
            </div>
            <div key={`key key-s`} className={"key key-s"}>
              <img src={keyS} alt="key" />
            </div>
            <div key={`key key-d`} className={"key key-d"}>
              <img src={keyD} alt="key" />
            </div>
          </section>
        </section>

        <h1 className="font-honk bg-linear-to-r from-white to-purple-400 bg-clip-text text-2xl text-transparent  ">
          Use
          <span className="font-bold"> WASD </span>
          para controlar o personagem
        </h1>
      </section>
    );

  if (pageState === "loaded")
    return (
      <section
        key="loaded"
        className={`game-start-shell game-start-transition game-loading flex-col ${transition}`}
      >
        <div className="game-start-glow" />
        <section className="grid grid-cols-4 gap-4">
          {coins.map((coin, index) => (
            <div key={`${coin.className}-${index}`} className={coin.className}>
              <img src={coin.src} alt="moedas" />
            </div>
          ))}
        </section>
        <h1 className="font-honk bg-linear-to-r from-white to-purple-400 bg-clip-text text-2xl text-transparent ">
          Colete Skills Coins e evolua seu personagem!
        </h1>
      </section>
    );
};

export default Start;
