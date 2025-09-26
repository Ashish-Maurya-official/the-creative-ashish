import React from 'react';
import { FiGithub, FiLinkedin, FiMail, FiHeart } from 'react-icons/fi';
import '../styles/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      icon: <FiGithub />,
      url: 'https://github.com/yourusername',
      color: '#333'
    },
    {
      name: 'LinkedIn',
      icon: <FiLinkedin />,
      url: 'https://linkedin.com/in/yourprofile',
      color: '#0077b5'
    },
    {
      name: 'Email',
      icon: <FiMail />,
      url: 'mailto:Ashish53245@gmail.com',
      color: '#ea4335'
    }
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="container">
          <div className="footer-main">
            <div className="footer-section footer-brand">
              <h3 className="footer-logo">Ashish</h3>
              <p className="footer-tagline">
                Full Stack Developer passionate about creating innovative solutions 
                and beautiful user experiences.
              </p>
              <div className="footer-social">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    style={{ '--hover-color': social.color }}
                    aria-label={`Visit ${social.name} profile`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            <div className="footer-section">
              <h4 className="footer-title">Quick Links</h4>
              <ul className="footer-links">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <button
                      className="footer-link"
                      onClick={() =>{scrollToSection(link.href);
                        console.log('hallow')
                      } }
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-section">
              <h4 className="footer-title">Technologies</h4>
              <ul className="footer-links">
                <li><span className="footer-text">React & React Native</span></li>
                <li><span className="footer-text">Flutter & Dart</span></li>
                <li><span className="footer-text">Java & Spring Boot</span></li>
                <li><span className="footer-text">Mobile Development</span></li>
              </ul>
            </div>

            <div className="footer-section">
              <h4 className="footer-title">Contact Info</h4>
              <ul className="footer-links">
                <li>
                  <a href="mailto:Ashish53245@gmail.com" className="footer-link">
                    Ashish53245@gmail.com
                  </a>
                </li>
                <li>
                  <a href="tel:+918887798423" className="footer-link">
                    +91 8887798423
                  </a>
                </li>
                <li>
                  <span className="footer-text">Chandauli, UP, India</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <div className="footer-copyright">
              <p>
                © {currentYear} Ashish. Built with <FiHeart className="heart-icon" /> using React.
              </p>
            </div>
            
            <button 
              className="back-to-top"
              onClick={scrollToTop}
              aria-label="Back to top"
            >
              ↑
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;