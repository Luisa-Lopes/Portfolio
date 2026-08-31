import { useEffect, useState } from "react";

const highlights = [
  "Engenharia de Redes - UnB",
  "Front-end com React e TypeScript",
  "Redes",
];

const Home = () => {
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
    <section className="hero-section" id="home">
      <div className="hero-copy">
        <p className="eyebrow">
          Engenharia de Redes de Comunicação | Front-End
        </p>
        <h1>{textoAtual}</h1>
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
  );
};

export default Home;
