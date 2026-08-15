import { useEffect, useState } from "react";
import { Link } from "react-router";

interface IStart {
  onClickStart: () => void;
}

const Start = ({ onClickStart }: IStart) => {
  const texto = "Ana Luísa S. Lopes";
  const velocidade = 100;

  const [textoAtual, setTextoAtual] = useState("");
  const [index, setIndex] = useState(0);

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
    <section className="flex  flex-col items-center justify-center gap-10 h-full w-full bg-black/70 text-white absolute inset-0 z-10 font-honk">
      <div className="flex flex-col items-center">
        <h1
          className="bg-linear-to-r from-blue-300 to-violet-500 bg-clip-text font-extrabold text-transparent p-0 m-0"
          style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}
        >
          Portifólio Game
        </h1>
        <span style={{ fontSize: "clamp(1rem, 5vw, 1.5rem)" }}>
          {textoAtual}
        </span>
      </div>

      <div className="w-1/2  text-center">
        Esse game foi criado com o objetivo de mostrar as minhas habilidade de
        programação, utilizando React, TypeScript, Matter.js e React Game
        Engine. O objetivo do jogo é controlar o personagem por meio do teclado,
        e chegar até o topo da tela, evitando cair das plataformas.
      </div>
      <button
        className="bg-blue-400 p-4 rounded-xl text-black hover:bg-blue-300 transition-colors"
        type="button"
        onClick={() => onClickStart()}
      >
        Começar jogo
      </button>
      <Link to={"/"}>Ir para landing page</Link>
    </section>
  );
};

export default Start;
