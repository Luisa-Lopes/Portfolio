import ProjectCard from "./ProjectCard";

const prototipoAutoescola = new URL("../assets/prototipo.png", import.meta.url)
  .href;

const topologiaRedes = new URL("../assets/topologiaPNet.png", import.meta.url)
  .href;

const gerenciadorProjetos = new URL(
  "../assets/gerenciadorProjetos.png",
  import.meta.url,
).href;

const gerenciadorApi = new URL("../assets/gerenciadorApi.png", import.meta.url)
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

    area: "Front-End",

    description:
      "Aplicação web para gerenciamento de projetos e tarefas, desenvolvida em React.js, permitindo organizar e acompanhar atividades por meio de um quadro Kanban.",

    challenge:
      "O principal desafio foi desenvolver uma interface completa e integrada a uma API REST, organizando o fluxo de autenticação, projetos e tarefas de forma intuitiva e responsiva.",

    built:
      "Desenvolvi o front-end da aplicação com autenticação, gerenciamento de projetos e tarefas, integração com API REST e interface Kanban para organização das atividades.",

    techs: ["React.js", "Vite", "TypeScript", "Tailwind CSS", "Git"],

    demo: "",

    github: "https://github.com/Luisa-Lopes/kanban",

    media: {
      type: "image",
      src: gerenciadorProjetos,
      poster: "/assets/gerenciadorProjetos.png",
      alt: "Gerenciador de Projetos",
      caption: "Página Inicial",
    },
  },

  {
    name: "Gerenciador de Projetos API - Projeto Pessoal",

    area: "Back-End",

    description:
      "API REST para um sistema de gerenciamento de projetos e tarefas, desenvolvida com .NET e PostgreSQL, responsável pelo processamento e persistência dos dados da aplicação.",

    challenge:
      "O principal desafio foi desenvolver uma API estruturada e compreender a integração entre .NET e PostgreSQL, incluindo a modelagem das entidades, relacionamentos, autenticação e persistência dos dados.",

    built:
      "Desenvolvi uma API REST com .NET, implementando autenticação, gerenciamento de projetos e tarefas, modelagem de entidades e persistência de dados em PostgreSQL.",

    techs: [".NET", "C#", "PostgreSQL", "JWT", "Swagger", "Git"],

    demo: "",

    github: "https://github.com/Luisa-Lopes/kanban-api",

    media: {
      type: "image",
      src: gerenciadorApi,
      poster: "/assets/gerenciadorProjetos.png",
      alt: "Gerenciador de Projetos API",
      caption: "Swagger",
    },
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
