import './Skills.css';

export default function Skills() {
  const categories = [
    {
      title: "Web Development",
      icon: <img src="https://img.icons8.com/3d-fluency/94/laptop-coding.png" alt="Web Dev Icon" style={{ width: '48px', height: '48px' }} />,
      skills: ["HTML5", "CSS3", "JavaScript", "React", "Responsive Design"]
    },
    {
      title: "Design",
      icon: <img src="https://img.icons8.com/3d-fluency/94/design.png" alt="Design Icon" style={{ width: '48px', height: '48px' }} />,
      skills: ["UI/UX", "Graphic Design", "Figma", "Creative Suite"]
    },
    {
      title: "Video Editing",
      icon: <img src="https://img.icons8.com/3d-fluency/94/video-editing.png" alt="Video Editing Icon" style={{ width: '48px', height: '48px' }} />,
      skills: ["Premiere Pro", "After Effects", "Color Grading"]
    },
    {
      title: "Data & Learning",
      icon: <img src="https://img.icons8.com/3d-fluency/94/brain-3--v1.png" alt="Data & Learning Icon" style={{ width: '48px', height: '48px' }} />,
      skills: ["Python", "Data Analysis", "Machine Learning (Basic)"]
    }
  ];

  return (
    <section id="skills" className="skills section-padding">
      <div className="container">
        <h2 className="section-title">My <span className="highlight">Skills</span></h2>
        
        <div className="skills-grid">
          {categories.map((cat, index) => (
            <div key={index} className="skill-card glass-panel">
              <div className="skill-icon">{cat.icon}</div>
              <h3>{cat.title}</h3>
              <ul className="skill-list">
                {cat.skills.map((skill, i) => (
                  <li key={i}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
