import "./Hero.css";
import ExperienceCounter from "./ExperienceCounter";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-header">
            <h1 className="hero-name">Erik Martín Garzón</h1>
            <p className="hero-role">Full Stack Developer</p>
          </div>

          <p className="hero-tagline">
            I build scalable web applications focused on product and user
            experience
          </p>

          <div className="hero-stack">
            <span className="stack-label">Specialized in:</span>
            <div className="tech-carousel">
              <div className="carousel-track">
                <div className="carousel-item">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg"
                    alt="Vue.js"
                    title="Vue.js"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                    alt="React"
                    title="React"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                    alt="Node.js"
                    title="Node.js"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg"
                    alt="PHP"
                    title="PHP"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
                    alt="PostgreSQL"
                    title="PostgreSQL"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                    alt="JavaScript"
                    title="JavaScript"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
                    alt="TypeScript"
                    title="TypeScript"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
                    alt="Bootstrap"
                    title="Bootstrap"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg"
                    alt="Vue.js"
                    title="Vue.js"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                    alt="React"
                    title="React"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                    alt="Node.js"
                    title="Node.js"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg"
                    alt="PHP"
                    title="PHP"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
                    alt="PostgreSQL"
                    title="PostgreSQL"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
                    alt="TypeScript"
                    title="TypeScript"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
                    alt="Bootstrap"
                    title="Bootstrap"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Location */}
          <p className="hero-location">
            📍 Barcelona, Spain • Available for remote work
          </p>

          {/* CTA Buttons */}
          <div className="hero-cta">
            <a
              href="#projects"
              className="btn btn-primary"
            >
              View Projects
            </a>
            <a
              href="https://www.linkedin.com/in/erikmartingarzon/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              Get in Touch
            </a>
          </div>
        </div>
        <ExperienceCounter />
      </div>
    </section>
  );
}
