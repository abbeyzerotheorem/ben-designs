import './About.css';

export default function About() {
  return (
    <section id="about" className="about section-padding">
      <div className="container">
        <h2 className="section-title">⭐ About <span className="highlight">Me</span></h2>

        <div className="about-content glass-panel">
          <div className="about-grid">
            <div className="about-image-wrapper">
              {/* Note: This is a placeholder portrait. Replace the src with your actual photo path later! */}
              <img src="./ben.jpeg" alt="Ben Oyelewo" className="about-img" />
            </div>
            <div className="about-text">
              <p>
                Hi, I’m <strong>Ben Oyelewo</strong> — a young frontend developer, graphic/UI designer, and tech creator from Nigeria. I’m passionate about building clean, simple, and user-focused digital experiences.
              </p>
              <p>
                I’m currently improving my skills in HTML, CSS, JavaScript, UI/UX design, and Python. I love learning, creating, and growing with the tools I have, using my phone and external keyboard to develop real projects.
              </p>
              <p>
                My goals are to become a skilled frontend developer, master UI design, and build a strong online brand through consistent learning and creativity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
