import { useState } from 'react';
import './Projects.css';

export default function Projects() {
  const [selectedImage, setSelectedImage] = useState(null);

  const projects = [
    { title: "Cupcake Design", image: "./baked.jpeg" },
    { title: "Classic Chops Design", image: "./chops.jpeg" },
    { title: "Student Doctor Design", image: "./doctor.jpeg" },
    { title: "Music Poster Design", image: "./erhun.jpeg" },
    { title: "Lee's Klodin Design", image: "./klodin.jpeg" },
    { title: "Motel Design", image: "./Motel.jpeg" },
    { title: "Aaron Mufasa Design", image: "./mufasa.jpeg" },
    { title: "Nana B Pastries Design", image: "./nana.jpeg" },
    { title: "The Overflow Design", image: "./overflow.jpeg" },
    { title: "Church Design", image: "./Stripes.jpeg" }
  ];

  return (
    <section id="projects" className="projects section-padding">
      <div className="container">
        <h2 className="section-title">My <span className="highlight">Design Work</span></h2>
        <p className="projects-subtitle">A collection of 10 selected graphic & UI designs.</p>
        
        <div className="projects-grid">
          {projects.map((item, i) => (
            <div key={i} className="project-card" onClick={() => setSelectedImage(item.image)}>
              <img src={item.image} alt={item.title} className="project-img" />
              <div className="project-overlay">
                <h3 className="project-title">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="modal-overlay" onClick={() => setSelectedImage(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-btn" onClick={() => setSelectedImage(null)}>&times;</span>
            <img src={selectedImage} alt="Full screen preview" className="modal-img" />
          </div>
        </div>
      )}
    </section>
  );
}
