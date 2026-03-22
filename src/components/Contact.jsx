import React from 'react';
import './Contact.css';

export default function Contact() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "d1385ec8-16e9-4a27-98aa-175a6b78c17b");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <section id="contact" className="contact section-padding">
      <div className="container">
        <div className="contact-wrapper glass-panel">
          <div className="contact-info">
            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '1rem' }}>
              Let's <span className="highlight">Connect</span>
            </h2>
            <p className="contact-desc">
              Whether you need a new website, dynamic UI/UX designs, or professional video editing—I am ready to help bring your ideas to life. Let's discuss your next project!
            </p>
            
            <div className="social-links">
              <a href="tel:+2349011874681" className="social-btn phone-btn">
                <span className="icon" style={{ display: 'flex', alignItems: 'center' }}>
                  <img src="https://img.icons8.com/3d-fluency/94/phone.png" alt="Phone Icon" style={{ width: '28px', height: '28px' }} />
                </span> +234 901 187 4681
              </a>
              <a href="https://wa.me/message/D4452KT54MEDF1" target="_blank" rel="noopener noreferrer" className="social-btn whatsapp-btn">
                <span className="icon" style={{ display: 'flex', alignItems: 'center' }}>
                  <img src="https://img.icons8.com/3d-fluency/94/whatsapp.png" alt="WhatsApp Icon" style={{ width: '28px', height: '28px' }} />
                </span> WhatsApp
              </a>
              <a href="https://youtube.com/@ben_designs1?si=VxHRxn_uIG9Docdn" target="_blank" rel="noopener noreferrer" className="social-btn youtube-btn">
                <span className="icon" style={{ display: 'flex', alignItems: 'center' }}>
                  <img src="https://img.icons8.com/3d-fluency/94/youtube-play.png" alt="YouTube Icon" style={{ width: '28px', height: '28px' }} />
                </span> YouTube
              </a>
              <a href="mailto:oyelewobenedict112@gmail.com" className="social-btn email-btn">
                <span className="icon" style={{ display: 'flex', alignItems: 'center' }}>
                  <img src="https://img.icons8.com/3d-fluency/94/mail.png" alt="Email Icon" style={{ width: '28px', height: '28px' }} />
                </span> Email Me
              </a>
            </div>
          </div>
          
          <div className="contact-visual">
            <div className="email-card glass-panel contact-form-card">
              <h3>Start a conversation</h3>
              <form onSubmit={onSubmit} className="web3-form">
                <input type="text" name="name" placeholder="Name" required className="form-input" />
                <input type="email" name="email" placeholder="Email" required className="form-input" />
                <textarea name="message" placeholder="Your Message" required className="form-textarea"></textarea>
                <button type="submit" className="btn btn-primary submit-btn">Submit Form</button>
              </form>
              <span className="form-result">{result}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
