import { useEffect, useState } from "react";
import doorImage from "../assets/game/Door.png";
import playerImage from "../assets/game/falling.png";
import { getViewport } from "../pages/Game/Game";
import "./Home.css";

const highlights = [
  "Engenharia de Redes - UnB",
  "Front-end com React e TypeScript",
  "Redes",
];

interface IHome {
  show: boolean;
}

const Home = ({ show }: IHome) => {
  const texto = "Ana Luísa S. Lopes";
  const velocidade = 100;

  const [textoAtual, setTextoAtual] = useState("");
  const [index, setIndex] = useState(0);

  const [viewport, setViewport] = useState(getViewport);
  const windowWidth = viewport.width;
  const windowHeight = viewport.height;

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
    <section className="hero-section flex flex-col" id="home">
      {show && (
        <div className="flex w-full relative showContainer">
          <section
            style={{
              position: "absolute",
              left: "10%",
              top: "0",
              width: windowWidth * 0.32,
              height: windowHeight * 0.4,
            }}
            className="portalOpen"
          >
            <div className="relative w-full h-full">
              {/* Moldura do portal */}
              <div
                style={{
                  position: "absolute",
                  display: "flex",
                  backgroundImage: `url(${doorImage})`,
                  backgroundPosition: "center 64%",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "100% auto",
                  imageRendering: "pixelated",
                  overflow: "hidden",
                  inset: 0,
                  zIndex: 110,
                }}
              />

              {/* Efeito do portal */}
              <div className="portal">
                <div className="portal-glow" />
                <div className="portal-ring" />
                <div className="portal-core" />
              </div>
            </div>
          </section>

          {/* Personagem */}
          <div className="landing-character">
            <img
              src={playerImage}
              alt="Personagem"
              className="landing-character-image"
            />
          </div>
        </div>
      )}

      <section className="flex flex-col md:flex-row">
        <div className="hero-copy ">
          <h1>{textoAtual}</h1>
          <p className="eyebrow">
            Engenharia de Redes de Comunicação | Front-End
          </p>
          <p className="hero-text">
            Sou estudante de Engenharia de Redes de Comunicação na UnB, com
            experiência em projetos de tecnologia, React JS, .NET, Tailwind,
            Bootstrap e desenvolvimento de aplicações com propósito social e
            técnico.
          </p>
          <div className="hero-actions">
            <a className="primary-action" href="#projetos">
              Ver projetos
            </a>
            <a href="#contato">Entrar em contato</a>
          </div>
          <div className="quick-links" aria-label="Links importantes">
            <a
              href="https://www.linkedin.com/in/ana-luisa-lopes/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/Luisa-Lopes"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a href="mailto:aninhaslopess@gmail.com">Email</a>
          </div>
        </div>
        <aside className="hero-panel" aria-label="Resumo de tecnologias">
          <div className="status-card">
            <span>Stack principal</span>
            <strong>React JS + TypeScript</strong>
            <p>Interfaces responsivas, componentes e integração com dados.</p>
          </div>
          <div className="signal-card">
            {highlights.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </aside>
      </section>
    </section>
  );
};

export default Home;
