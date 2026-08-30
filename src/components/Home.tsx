import { useEffect, useState, type Dispatch, type SetStateAction } from "react";
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
  setShow: Dispatch<SetStateAction<boolean>>;
}

const Home = ({ show, setShow }: IHome) => {
  const texto = "Ana Luísa S. Lopes";
  const velocidade = 100;

  const [textoAtual, setTextoAtual] = useState("");
  const [index, setIndex] = useState(0);
  const [portalClosing, setPortalClosing] = useState(false);
  const [characterClosing, setCharacterClosing] = useState<boolean>(false);
  const [containerClosing, setContainerClosing] = useState<boolean>(false);
  const [showCharacterImage, setShowCharacterImage] = useState<boolean>(false);

  const [viewport] = useState(getViewport);
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

  useEffect(() => {
    if (show) {
      setShowCharacterImage(false);
      const timer = setTimeout(() => {
        // 10s: portal começa a desaparecer
        setPortalClosing(true);

        setTimeout(() => {
          // 10.8s: personagem começa a desaparecer
          setShowCharacterImage(true);
          setCharacterClosing(true);

          setTimeout(() => {
            // 11.6s: container começa a fechar
            setContainerClosing(true);

            setTimeout(() => {
              // 11.6s: container começa a fechar
              setShow(false);
            }, 1000);
          }, 800);
        }, 800);
      }, 9000);
      return () => clearTimeout(timer);
    } else {
      setShowCharacterImage(true);
    }
  }, [show]);

  return (
    <section className="hero-section flex flex-col" id="home">
      {show && (
        <div
          className={`flex w-full showContainer ${containerClosing ? "closing" : ""}`}
        >
          <div className="flex w-1/2 md:w-1/4 h-full relative ">
            <section
              className={`w-[13em] h-[30em]  portalHomeOpen ${portalClosing ? "portalClosing" : ""}`}
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
                <div className="portalHome">
                  <div className="portalHome-glow" />
                  <div className="portalHome-ring" />
                  <div className="portalHome-core" />
                </div>
              </div>
            </section>
            {/* Personagem */}
            <div
              className={`landing-character ${characterClosing ? "characterClosing" : ""}`}
            >
              <div
                className="landing-character-sprite "
                role="img"
                aria-label="Personagem caindo"
                style={{ backgroundImage: `url(${playerImage})` }}
              />
            </div>
          </div>
        </div>
      )}

      <section className="flex w-full flex-col md:flex-row">
        <div className="hero-copy md:w-1/2">
          <div className="flex items-center w-full">
            <section className="relative flex w-1/2 h-50 ">
              {showCharacterImage && (
                <div
                  className="absolute"
                  style={{
                    width: "135px",
                    height: "180px",
                    left: "63%",
                    bottom: "0",
                    transform: "translateX(-50%)",
                    backgroundPosition: "-405px -180px",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "540px 360px",
                    imageRendering: "pixelated",
                    backgroundImage: `url(${playerImage})`,
                  }}
                />
              )}
            </section>

            <h1 className="w-1/2">{textoAtual}</h1>
          </div>

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
        <aside className="hero-panel w-1/2" aria-label="Resumo de tecnologias">
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
