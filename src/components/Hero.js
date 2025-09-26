import React, { useEffect, useState } from 'react';
import { FiGithub, FiLinkedin, FiMail, FiDownload } from 'react-icons/fi';
import '../styles/Hero.css';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const roles = [
    'Full Stack Developer',
    'Mobile App Developer',
    'React Native Expert',
    'Flutter Enthusiast'
  ];

  useEffect(() => {
    const currentRole = roles[currentIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText !== currentRole) {
          setDisplayText(currentRole.substring(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText !== '') {
          setDisplayText(currentRole.substring(0, displayText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentIndex((prevIndex) => (prevIndex + 1) % roles.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, currentIndex, isDeleting, roles]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="hero-particles"></div>
      </div>
      
      <div className="hero-container">
        <div className="hero-content">
          
          <div className="hero-text">
            <h1 className="hero-title">
              Hi, I'm <span className="hero-name">Ashish</span>
            </h1>
            <h2 className="hero-subtitle">
              I'm a <span className="hero-role">{displayText}</span>
              <span className="hero-cursor">|</span>
            </h2>
            <p className="hero-description">
              Passionate about creating innovative mobile applications and scalable web solutions. 
              I specialize in React Native, Flutter, and full-stack development with Java Spring Boot.
            </p>
            
            <div className="hero-buttons">
              <button 
                className="btn btn-primary"
                onClick={() => scrollToSection('projects')}
              >
                View My Work
              </button>
              <button 
                className="btn btn-secondary"
                onClick={() => scrollToSection('contact')}
              >
                <FiMail /> Get In Touch
              </button>
            </div>
          </div>

          <div className="hero-image">
            <div className="hero-avatar">
              <div className="avatar-circle">
                <span className="avatar-text">A</span>
              </div>
              <div className="avatar-glow"></div>
            </div>
          </div>
        </div>

      

        <div className="hero-scroll">
          <div className="scroll-indicator">
            <span>Scroll Down</span>
            <div className="scroll-arrow"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;