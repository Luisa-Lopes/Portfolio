import { useEffect, useState } from "react";
import { Link } from "react-router";
import player from "../../../../../assets/game/idleLeft.png";

interface IStart {
  clouds: { src: string; className: string }[];
  transition: string;
  loadInformation: () => void;
}

const Start = ({ clouds, transition, loadInformation }: IStart) => {
  const texto = "Ana Luísa S. Lopes";
  const velocidade = 100;

  const [index, setIndex] = useState(0);
  const [textoAtual, setTextoAtual] = useState("");

  useEffect(() => {
    if (index < texto.length) {
      const timer = setTimeout(() => {
        setTextoAtual((prev) => prev + texto.charAt(index));
        setIndex((prev) => prev + 1);
      }, velocidade);

      return () => clearTimeout(timer);
    }
  }, [index, texto, velocidade]);

  return (
    <section
      className={`game-start-shell game-start-transition ${transition} w-full h-full flex  items-center p-5`}
    >
      <div className="game-start-glow" />

      {clouds.map((cloud, index) => (
        <div key={`${cloud.className}-${index}`} className={cloud.className}>
          <img src={cloud.src} alt="Nuvem" />
        </div>
      ))}

      <div className="flex flex-col lg:flex-row z-30 gap-3">
        <div className="flex flex-col z-50 gap-3 ">
          <h1 className="font-honk bg-linear-to-r from-purple-600 to-blue-700 bg-clip-text text-5xl font-extrabold text-transparent p-0 m-0  z-50">
            Portifólio Game
          </h1>
          <div className="typing-line game-copy__typing">
            {textoAtual}
            <span className="typing-cursor" />
          </div>

          <p className="game-description game-copy__description flex flex-col z-50 ">
            <div className="font-bold z-30">
              Uma aventura pelo meu portfólio.
            </div>
            <div className="z-10">
              Supere obstáculos, explore minhas habilidades e desbloqueie cada
              etapa da minha trajetória como desenvolvedora.
            </div>
          </p>

          <div
            className="game-badges game-copy__badges flex"
            aria-label="Tecnologias do projeto"
          >
            <span>React</span>
            <span>TypeScript</span>
            <span>Matter.js</span>
            <span>Game Engine</span>
          </div>

          <div className="game-actions game-copy__actions flex">
            <button className="p-3" type="button" onClick={loadInformation}>
              Começar jogo
            </button>
            <Link to="/" className="secondary-button p-3">
              Ir para landing page
            </Link>
          </div>
        </div>

        <div className="game-info-card game-panel__card flex items-center justify-center p-4">
          <div className="flex flex-col w-1/2">
            <span className="card-label">Objetivo</span>
            <strong className="text-2xl">Chegar ao topo</strong>
            <p>
              Pule, equilibre e domine cada plataforma para conquistar a
              vitória.
            </p>
          </div>

          <div className="player-stage game-panel__player ">
            <img src={player} alt="Personagem do jogo" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Start;
