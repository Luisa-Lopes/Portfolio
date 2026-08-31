import ProjectCard from "./ProjectCard";

const prototipoAutoescola = new URL("../assets/prototipo.png", import.meta.url)
  .href;

const topologiaRedes = new URL("../assets/topologiaPNet.png", import.meta.url)
  .href;

const bracoDeFerro = new URL("../assets/bracoDeFerro.mp4", import.meta.url)
  .href;

export type ProjectMedia = {
  type: "image" | "video";
  src: string;
  alt: string;
  poster?: string;
  caption?: string;
};

export type Project = {
  name: string;
  area: string;
  description: string;
  challenge: string;
  built: string;
  techs: string[];
  demo: string;
  github: string;
  media?: ProjectMedia;
};

const projects: Project[] = [
  {
    name: "App da Prótese Bluetooth",
    area: "Front-End",
    description:
      "Aplicativo para integração de prótese Bluetooth com dois jogos, para que usuários de prótese de braço possam fortalecer a musculatura e restaurar a independência.",
    challenge:
      "Meu principal desafio foi a adaptação ao React Native, por ser meu primeiro projeto mobile. Embora compartilhe conceitos com React.js, a forma de estilização e o desenvolvimento de interfaces para dispositivos móveis exigiram uma curva de aprendizado inicial.",
    built:
      "Desenvolvi telas para o fortalecimento da musculatura dos usuários com prótese e construí a física, colisões, pontuações, interfaces de menu e configurações dos dois jogos.",
    techs: ["React Native", "TypeScript", "CSS", "Bootstrap"],
    demo: "",
    github: "",
    media: {
      type: "video",
      src: bracoDeFerro,
      alt: "Aplicativo Braço de Ferro",
      caption: "Aplicativo Braço de Ferro",
    },
  },
  {
    name: "Consultoria Autoescola",
    area: "Gestão de Projetos",
    description:
      "Consultoria com reuniões semanais com o cliente, com o objetivo de criar escopo, protótipo de alta e baixa fidelidade e relatórios de viabilidade técnica, funcional e de usabilidade.",
    challenge:
      "Meu principal desafio foi coordenar a equipe e garantir uma boa comunicação entre todos.",
    built:
      "Gerenciei o levantamento de requisitos para um sistema de autoescolas, definindo escopo e funcionalidades.",
    techs: ["Figma"],
    demo: "https://www.figma.com/proto/RwWi8QOQnBhfY2mocUFEhX/autoescola?node-id=1-2&t=nCZYD87plN0ciCmM-1",
    github: "",
    media: {
      type: "image",
      src: prototipoAutoescola,
      alt: "Protótipo Autoescola",
      caption: "Protótipo de alta fidelidade",
    },
  },
  {
    name: "Gerenciador de Projetos - Projeto Pessoal",
    area: "Front-End e Back-End",
    description:
      "Sistema de gerenciamento de projetos desenvolvido com React.js + Vite, .NET e PostgreSQL, permitindo o cadastro, organização e acompanhamento de tarefas em um quadro Kanban.",
    challenge:
      "Por ser meu primeiro projeto full-stack com .NET e PostgreSQL, o principal desafio foi compreender a integração entre front-end, API e banco de dados, além de modelar corretamente as entidades e relacionamentos para garantir a consistência das informações.",
    built:
      "Desenvolvi uma aplicação full-stack com autenticação, gerenciamento de projetos e tarefas, integração com API REST e persistência de dados em PostgreSQL.",
    techs: [
      "React.js",
      "Vite",
      "TypeScript",
      ".NET",
      "PostgreSQL",
      "Bootstrap",
      "Git",
    ],
    demo: "",
    github: "https://github.com/Luisa-Lopes/kanban",
  },
  {
    name: "Projetos de Redes",
    area: "Acadêmicos",
    description:
      "Atividades e estudos envolvendo protocolos, infraestrutura, endereçamento, serviços e análise de redes.",
    challenge:
      "Conectar fundamentos teóricos com diagnósticos e configurações aplicáveis em cenários reais.",
    built:
      "Configurei ambientes, analisei tráfego, documentei topologias e explorei serviços de rede.",
    techs: ["Linux", "Redes TCP/IP", "Git", "Shell"],
    demo: "#",
    github: "#",
    media: {
      type: "image",
      src: topologiaRedes,
      poster: "/assets/hero.png",
      alt: "Demonstração do projeto",
      caption: "Topologia",
    },
  },
];

const Project = () => {
  return (
    <section className="section" id="projetos">
      <div className="section-heading">
        <p className="eyebrow">Projetos</p>
        <h2>
          Trabalhos que conectam front-end, IoT, redes e aprendizado acadêmico.
        </h2>
      </div>
      <div className="category-row">
        {["Front-End", "IoT", "Redes", "Acadêmicos"].map((category) => (
          <span key={category}>{category}</span>
        ))}
      </div>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard key={project.name} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Project;
