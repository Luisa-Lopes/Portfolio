type ExperienceLink = {
  label: string;
  href: string;
};

type ExperienceItem = {
  role: string;
  focus: string;
  description: string;
  impact: string;
  techs: string[];
  links?: ExperienceLink[];
};

const experiences: ExperienceItem[] = [
  {
    role: "Estágio",
    focus: "Desenvolvimento, organização de dados e apoio a rotinas técnicas.",
    description:
      "Atuação no desenvolvimento das plataformas Íris Facilities e Cortex, voltadas para o gerenciamento da infraestrutura predial com integração de sensores e contratos.",
    impact:
      "Criação de dashboards e relatórios para melhor análise em gestão de contratos.",
    techs: ["React", "TypeScript", "PostgreSQL", "Git", "Azure"],
  },
  {
    role: "EngNet Consultoria",
    focus:
      "Vivência em empresa júnior, projetos, liderança e colaboração multidisciplinar.",
    description:
      "Vivência empresarial por meio da participação ativa na EngNet Consultoria, empresa júnior de Engenharia. Durante o processo trainee, com foco em front-end, desenvolvi três entregas principais: uma landing page com HTML e CSS, a integração de uma API de CEP utilizando JavaScript e a construção de um quadro Kanban com React.js.",
    impact:
      'Fui reconhecida com o prêmio de "Melhor Entrega na Capacitação Front-End" e participei de projetos reais, como Braço de Ferro e consultoria autoescola.',
    techs: ["Gestão", "Marketing", "Tecnologia", "Comunicação"],
    links: [
      {
        label: "Sobre a EngNet",
        href: "https://engnetconsultoria.com.br/",
      },
    ],
  },
  {
    role: "Estágio",
    focus:
      "Prestei suporte para usuários, atendendo a incidentes e solicitações de TI.",
    description:
      "Resolvi problemas básicos de hardware e software, aplicando habilidades de resolução de problemas e diagnóstico.",
    impact: "",
    techs: ["Suporte TI", "Comunicação"],
  },
];

const Experience = () => {
  return (
    <section className="section" id="experiencia">
      <div className="section-heading">
        <p className="eyebrow">Experiência</p>
        <h2>
          Responsabilidades, impacto e repertório em tecnologia e liderança.
        </h2>
      </div>
      <div className="experience-grid">
        {experiences.map((experience) => (
          <article
            className="experience-card flex flex-col gap-5 p-3"
            key={`${experience.role}-${experience.description}`}
          >
            <h3>{experience.role}</h3>
            <p>{experience.focus}</p>
            <p className="experience-description">{experience.description}</p>
            {experience.impact ? <strong>{experience.impact}</strong> : null}
            <div className="tags">
              {experience.techs.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>
            {experience.links?.length ? (
              <div className="card-actions">
                {experience.links.map((link) => (
                  <a href={link.href} key={link.label}>
                    {link.label}
                  </a>
                ))}
              </div>
            ) : null}
          </article>
        ))}
      </div>
    </section>
  );
};

export default Experience;
