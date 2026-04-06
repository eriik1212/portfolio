import "./Projects.css";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description:
        "Full-stack e-commerce solution with product catalog, shopping cart, and payment integration",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
      link: "#",
      featured: true,
    },
    {
      id: 2,
      title: "Task Management App",
      description:
        "Collaborative task management tool with real-time updates and team collaboration features",
      technologies: ["Vue.js", "Firebase", "TypeScript"],
      link: "#",
      featured: true,
    },
    {
      id: 3,
      title: "Analytics Dashboard",
      description:
        "Interactive dashboard for data visualization and business metrics with real-time analytics",
      technologies: ["React", "D3.js", "Node.js", "PostgreSQL"],
      link: "#",
      featured: true,
    },
    {
      id: 4,
      title: "Mobile App API",
      description:
        "RESTful API backend for mobile applications with authentication and authorization",
      technologies: ["Node.js", "Express", "PostgreSQL", "JWT"],
      link: "#",
    },
    {
      id: 5,
      title: "Social Network",
      description:
        "Social platform with user profiles, messaging, and activity feeds",
      technologies: ["Vue.js", "Node.js", "Redis", "PostgreSQL"],
      link: "#",
    },
    {
      id: 6,
      title: "Content Management System",
      description:
        "Headless CMS with role-based access control and content scheduling",
      technologies: ["React", "GraphQL", "Node.js", "MongoDB"],
      link: "#",
    },
  ];

  return (
    <section
      id="projects"
      className="projects"
    >
      <div className="projects-container">
        <div className="projects-header">
          <h2 className="projects-title">Featured Projects</h2>
          <p className="projects-subtitle">
            Selected work showcasing my expertise in full-stack development
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <a
              key={project.id}
              href={project.link}
              className={`project-card ${project.featured ? "featured" : ""}`}
            >
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="tech-tag"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="project-arrow">→</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
