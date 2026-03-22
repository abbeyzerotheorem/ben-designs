import './Header.css';

export default function Header() {
  return (
    <header className="header glass-panel">
      <div className="container header-content">
        <div className="logo">
          <span className="logo-text">Ben<span className="highlight">Designs</span></span>
        </div>
        <nav className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Work</a>
          <a href="#contact" className="btn btn-primary" style={{ padding: '8px 16px', marginLeft: '1rem' }}>Hire Me</a>
        </nav>
      </div>
    </header>
  );
}
