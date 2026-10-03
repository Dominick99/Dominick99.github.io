const experience = [
  {
    organization: "Berkeley Lab",
    role: "Researcher",
    dates: "June 2022 - August 2024",
    location: "Berkeley, California",
    logo: "/logos/berkeley-lab-mark.png",
    crop: "mark-square mark-berkeley",
    summary: "Machine learning infrastructure and scientific ML surrogate models for climate science and computational immunology.",
    highlights: [
      "Implemented distributed neural-network training and inference workflows across CPU and GPU HPC environments.",
      "Developed surrogate modeling pipelines for atmospheric simulations using neural approximations of cloud microphysics.",
      "Built parallel simulation infrastructure for synthetic T-cell trajectories that reproduced experimental speed distributions within 1%.",
    ],
  },
  {
    organization: "Northern New Mexico College",
    role: "Machine Learning Engineer",
    dates: "August 2020 - December 2023",
    location: "Espanola, New Mexico",
    logo: "/logos/nnmc.svg",
    crop: "crop-nnmc",
    summary: "Machine learning, data analysis, and numerical simulation projects spanning biology, computer vision, and fluid dynamics.",
    highlights: [
      "Created a scalable data pipeline for large T-cell microscopy datasets used in quantitative modeling and peer-reviewed research.",
      "Fine-tuned Vision Transformer models with LoRA and quantization for an on-device plant identification application.",
      "Generated synthetic ML datasets with Navier-Stokes computational fluid dynamics simulations.",
    ],
    supporting: "Adult Education Instructor, January - August 2022 / Tutor, August 2021 - May 2022",
  },
];

const projects = [
  {
    title: "StoatSwarm",
    area: "Autonomous systems / Multi-agent reinforcement learning",
    description: "An AI training and simulation platform for teaching coordinated drone swarms to autonomously explore tunnels and indoor structures.",
    motivation: "Designed around tactical reconnaissance, defense, public-safety, and inspection scenarios where autonomous drones can map and assess complex spaces before people enter.",
    tools: ["Python", "PyTorch", "PyBullet", "MuJoCo", "ROS 2", "PX4", "Docker"],
    href: "https://github.com/Dominick99/stoatswarm",
    image: "/projects/stoatswarm/logo.png",
    imageAlt: "StoatSwarm logo featuring a stoat and autonomous drones",
    className: "project-stoatswarm",
  },
  {
    title: "Belskap",
    area: "Generative AI / Creator operations",
    description: "A web and mobile platform for creating, developing, and managing AI-powered virtual creators across social and subscription platforms.",
    motivation: "Combines persistent character identity, agent-driven workflows, content generation, and publishing operations within one production system.",
    tools: ["Next.js", "React", "FastAPI", "Python", "LangGraph", "PostgreSQL", "MCP", "AI agents"],
    href: "https://github.com/Dominick99/belskap",
    image: "/projects/belskap/brand.png",
    imageAlt: "Belskap wordmark and gold app icon",
    className: "project-belskap",
  },
];

const education = [
  { school: "The University of Texas at Austin", degree: "Master of Science in Artificial Intelligence", dates: "August 2024 - May 2026", logo: "/logos/ut-austin-seal-transparent.png", crop: "mark-square mark-seal", note: "Graduate degree" },
  { school: "Northern New Mexico College", degree: "Bachelor of Science in Mathematics", dates: "August 2020 - December 2023", logo: "/logos/nnmc.svg", crop: "crop-nnmc", note: "Summa Cum Laude" },
  { school: "The University of New Mexico", degree: "Non-degree Student", dates: "August 2022 - May 2023", logo: "/logos/unm.png", crop: "crop-unm", note: "Coursework" },
];

const certifications = [
  { title: "Academy Accreditation - AI Agent Fundamentals", issuer: "Databricks", logo: "/logos/databricks.svg" },
  { title: "Fundamentals of MCP", issuer: "Hugging Face", logo: "/logos/huggingface.svg" },
  { title: "Deep Learning", issuer: "The University of Texas at Austin", logo: "/logos/ut-austin-seal-transparent.png" },
  { title: "Natural Language Processing", issuer: "The University of Texas at Austin", logo: "/logos/ut-austin-seal-transparent.png" },
  { title: "AI in Healthcare", issuer: "The University of Texas at Austin", logo: "/logos/ut-austin-seal-transparent.png" },
];

const stack = [
  { name: "Python", category: "Language", logo: "/logos/python.svg" },
  { name: "PyTorch", category: "Machine learning", logo: "/logos/pytorch.svg" },
  { name: "FastAPI", category: "Backend", logo: "/logos/fastapi.svg" },
  { name: "Next.js", category: "Web", logo: "/logos/nextdotjs.svg" },
  { name: "React", category: "Interface", logo: "/logos/react.svg" },
  { name: "PostgreSQL", category: "Data", logo: "/logos/postgresql.svg" },
  { name: "Docker", category: "Infrastructure", logo: "/logos/docker.svg" },
  { name: "Hugging Face", category: "AI ecosystem", logo: "/logos/huggingface.svg" },
  { name: "Databricks", category: "Data + AI", logo: "/logos/databricks.svg" },
  { name: "ROS 2", category: "Robotics", logo: "/logos/ros.svg" },
  { name: "Git", category: "Development", logo: "/logos/git.svg" },
  { name: "Linux", category: "Systems", logo: "/logos/linux.svg" },
];

const toolLogos: Record<string, string> = {
  Python: "/logos/python.svg",
  PyTorch: "/logos/pytorch.svg",
  "ROS 2": "/logos/ros.svg",
  Docker: "/logos/docker.svg",
  "Next.js": "/logos/nextdotjs.svg",
  React: "/logos/react.svg",
  FastAPI: "/logos/fastapi.svg",
  PostgreSQL: "/logos/postgresql.svg",
};

function BrandMark({ src, crop, name }: { src: string; crop: string; name: string }) {
  return <span className={`brand-mark ${crop}`}><img src={src} alt={`${name} emblem`} /></span>;
}

export default function Home() {
  return (
    <main>
      <nav className="nav shell" aria-label="Primary navigation">
        <a className="wordmark" href="#top" aria-label="Dominick Martinez, home">DM<span>.</span></a>
        <div className="nav-links">
          <a href="#about">About</a><a href="#stack">Stack</a><a href="#experience">Experience</a><a href="#projects">Projects</a><a href="#education">Education</a><a href="#certifications">Certifications</a>
          <a className="nav-cta" href="mailto:dominick.n.martinez99@gmail.com">Contact <span aria-hidden="true">&#8599;</span></a>
        </div>
      </nav>

      <section className="hero shell" id="top">
        <p className="hero-kicker reveal reveal-1">AI / ML Engineer</p>
        <h1 className="reveal reveal-2">Dominick<br /><span>Martinez</span></h1>
        <div className="hero-footer reveal reveal-3">
          <p>Scientific machine learning<br />High-performance computing<br />Intelligent systems</p>
          <p>Albuquerque-Santa Fe<br />Metropolitan Area</p>
        </div>
      </section>

      <section className="section shell about-section" id="about">
        <header className="section-heading"><h2>About</h2></header>
        <div className="about-copy"><p>AI/ML engineer with experience in scientific machine learning, distributed computing, computer vision, and research software. My work has included atmospheric simulation, computational immunology, synthetic data generation, and deployable ML systems.</p>
          <div className="profile-links"><a href="https://github.com/Dominick99" target="_blank" rel="noreferrer">GitHub &#8599;</a><a href="https://huggingface.co/Dominick99" target="_blank" rel="noreferrer">Hugging Face &#8599;</a><a href="https://www.linkedin.com/in/dominick-martinez-09041822b" target="_blank" rel="noreferrer">LinkedIn &#8599;</a></div>
        </div>
      </section>

      <section className="section shell" id="stack">
        <header className="section-heading"><h2>Stack</h2></header>
        <div className="stack-grid">
          {stack.map((skill) => (
            <article className="stack-item" key={skill.name}>
              <span className="stack-logo"><img src={skill.logo} alt="" /></span>
              <div><h3>{skill.name}</h3><p>{skill.category}</p></div>
            </article>
          ))}
        </div>
      </section>

      <section className="section shell" id="experience">
        <header className="section-heading"><h2>Experience</h2></header>
        <div className="resume-list">
          {experience.map((item) => (
            <article className="resume-row" key={item.organization}>
              <BrandMark src={item.logo} crop={item.crop} name={item.organization} />
              <div className="resume-main">
                <p className="organization">{item.organization}</p><h3>{item.role}</h3><p className="resume-summary">{item.summary}</p>
                <ul>{item.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul>
                {item.supporting && <p className="supporting-role">{item.supporting}</p>}
              </div>
              <div className="resume-meta"><time>{item.dates}</time><span>{item.location}</span></div>
            </article>
          ))}
        </div>
      </section>

      <section className="section shell" id="projects">
        <header className="section-heading"><h2>Projects</h2></header>
        <div className="project-stack">
          {projects.map((project) => (
            <article className={`featured-project ${project.className}`} key={project.title}>
              <div className="project-gallery" aria-label={`${project.title} project media`}>
                <div className="project-slide"><img src={project.image} alt={project.imageAlt} /></div>
                <div className="gallery-footer"><span>Project identity</span><span className="gallery-dot" aria-hidden="true" /></div>
              </div>
              <div className="project-content">
                <p className="project-area">{project.area}</p>
                <h3>{project.title}</h3>
                <p className="project-lead">{project.description}</p>
                <p className="project-motivation">{project.motivation}</p>
                {project.origin && <p className="project-origin">{project.origin}</p>}
                <div className="tags">{project.tools.map((tool) => (
                  <span key={tool}>
                    {toolLogos[tool] && <img src={toolLogos[tool]} alt="" aria-hidden="true" />}
                    {tool}
                  </span>
                ))}</div>
                <a className="project-link" href={project.href} target="_blank" rel="noreferrer">View repository <span aria-hidden="true">&#8599;</span></a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section shell" id="education">
        <header className="section-heading"><h2>Education</h2></header>
        <div className="resume-list compact-list">
          {education.map((item) => (
            <article className="resume-row education-row" key={item.school}>
              <BrandMark src={item.logo} crop={item.crop} name={item.school} />
              <div className="resume-main"><p className="organization">{item.school}</p><h3>{item.degree}</h3><p className="education-note">{item.note}</p></div>
              <div className="resume-meta"><time>{item.dates}</time></div>
            </article>
          ))}
        </div>
      </section>

      <section className="section shell" id="certifications">
        <header className="section-heading"><h2>Certifications</h2></header>
        <div className="certification-list">
          {certifications.map((certification) => (
            <article className="certification-row" key={certification.title}>
              <span className="cert-logo"><img src={certification.logo} alt={`${certification.issuer} emblem`} /></span>
              <div><h3>{certification.title}</h3><p>{certification.issuer}</p></div>
            </article>
          ))}
        </div>
      </section>

      <section className="contact shell"><p>Contact</p><a href="mailto:dominick.n.martinez99@gmail.com">dominick.n.martinez99@gmail.com <span aria-hidden="true">&#8599;</span></a></section>
      <footer className="footer shell"><p>&copy; 2026 Dominick Martinez</p><a href="#top">Back to top &#8593;</a></footer>
    </main>
  );
}
