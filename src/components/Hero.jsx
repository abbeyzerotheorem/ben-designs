import './Hero.css';

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero-content">
        <div className="hero-text animate-fade-in">
          <p className="greeting">Hi there, I'm</p>
          <h1 className="name">Benedict Oyelewo</h1>
          <h2 className="roles">
            <span className="role-cyan">Frontend Developer</span> <span className="dot">•</span> <span className="role-purple">Designer</span> <span className="dot">•</span> <span className="role-white">Video Editor</span>
          </h2>
          <p className="hero-description">
            I craft visually stunning, interactive web experiences and digital designs. Currently expanding my horizons with Python and Machine Learning.
          </p>
          <div className="hero-cta">
            <a href="#projects" className="btn btn-primary">View My Work</a>
            <a href="#contact" className="btn btn-outline">Let's Talk</a>
          </div>
        </div>
        
        <div className="hero-visual animate-fade-in" style={{ animationDelay: '0.2s' }}>
          {/* Abstract geometric element serving as a premium visual replacement for a photo until provided */}
          <div className="abstract-shape">
            <div className="glass-panel floating-card card-1">
              <span className="icon">💻</span> Web Dev
            </div>
            <div className="glass-panel floating-card card-2">
              <span className="icon">🎨</span> UI/UX
            </div>
            <div className="glass-panel floating-card card-3">
              <span className="icon">🎬</span> Video Edit
            </div>
            <div className="glow-orb orb-1"></div>
            <div className="glow-orb orb-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
