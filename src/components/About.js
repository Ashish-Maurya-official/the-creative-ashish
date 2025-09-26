import React from 'react';
import { FiUser, FiCode, FiHeart } from 'react-icons/fi';
import '../styles/About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">Get to know more about who I am and what I do</p>
        </div>

        <div className="about-content">
          <div className="about-text">
            <div className="about-intro">
              <h3>Hello! I'm Ashish</h3>
              <p>
                I'm a passionate Computer Science student and developer with hands-on experience 
                in full-stack development, mobile applications, and cross-platform solutions. 
                Currently pursuing my Bachelor of Computer Applications at Microtek College of 
                Management & Technology (VBSPU).
              </p>
            </div>

            <div className="about-details">
              <div className="detail-card">
                <div className="detail-icon">
                  <FiCode />
                </div>
                <div className="detail-content">
                  <h4>Technical Expertise</h4>
                  <p>
                    Proficient in Java, Flutter, Spring Boot, and React Native with a keen eye 
                    for UI/UX design and scalable architecture. Strong foundation in data structures, 
                    algorithms, and software development methodologies.
                  </p>
                </div>
              </div>

              <div className="detail-card">
                <div className="detail-icon">
                  <FiUser />
                </div>
                <div className="detail-content">
                  <h4>Experience</h4>
                  <p>
                    Built multiple full-stack applications including student management systems, 
                    real-time chat applications, file recovery software, and mobile apps with 
                    integrated APIs and databases.
                  </p>
                </div>
              </div>

              <div className="detail-card">
                <div className="detail-icon">
                  <FiHeart />
                </div>
                <div className="detail-content">
                  <h4>Passion</h4>
                  <p>
                    I love creating innovative solutions that solve real-world problems. 
                    Always eager to learn new technologies and contribute to meaningful projects 
                    that make a positive impact.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="about-stats">
            <div className="stat-item">
              <span className="stat-number">4+</span>
              <span className="stat-label">Major Projects</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">10+</span>
              <span className="stat-label">Technologies</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">3+</span>
              <span className="stat-label">Years Learning</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">100%</span>
              <span className="stat-label">Dedication</span>
            </div>
          </div>
        </div>

        <div className="about-education">
          <h3>Education</h3>
          <div className="education-item">
            <div className="education-content">
              <h4>Bachelor of Computer Applications</h4>
              <p className="education-institution">Microtek College of Management & Technology (VBSPU)</p>
              <p className="education-duration">Aug 2022 - Jun 2025</p>
              <p className="education-location">Chandauli, Uttar Pradesh, India</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;