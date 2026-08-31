import { useEffect, useState } from "react";
import logo from "../assets/favicon.png";

const navItems = [
  ["Home", "#home"],
  ["Sobre", "#sobre"],
  ["Projetos", "#projetos"],
  ["Experiência", "#experiencia"],
  ["Skills", "#skills"],
  ["Contato", "#contato"],
];

const NavBar = () => {
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
    <header className="topbar" style={{ width: "100%", padding: 20 }}>
      <a className="brand gap-2" href="#home" aria-label="Ir para Home">
        <div className="flex rounded-md" style={{ width: 20, height: 20 }}>
          <img className="object-contain rounded-md" src={logo} alt="Logo" />
        </div>

        <span>Portfólio - {textoAtual}</span>
      </a>
      <nav aria-label="Navegação principal">
        {navItems.map(([label, href]) => (
          <a key={href} href={href}>
            {label}
          </a>
        ))}
      </nav>
    </header>
  );
};

export default NavBar;
