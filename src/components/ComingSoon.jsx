import "./ComingSoon.css";

export default function ComingSoon() {
  return (
    <section id="projects" className="coming-soon">
      <div className="coming-soon-container">
        <div className="coming-soon-content">
          <h2 className="coming-soon-title">Coming Soon</h2>
          <p className="coming-soon-subtitle">
            I'm working on showcasing my best projects. Stay tuned for updates!
          </p>
          <div className="coming-soon-decoration">
            <div className="spinner"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
