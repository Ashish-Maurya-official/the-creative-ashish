import React from 'react';
import { 
  SiJavascript, SiFlutter, SiReact, SiSpringboot, 
  SiMysql, SiFirebase, SiGit, SiAndroidstudio, SiVisualstudiocode,
  SiHtml5, SiCss3, SiDart, SiC, SiCplusplus
} from 'react-icons/si';
import '../styles/Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Java", icon: <SiC />, level: 90 }, // Using SiC as placeholder since SiJava doesn't exist
        { name: "JavaScript", icon: <SiJavascript />, level: 85 },
        { name: "Dart", icon: <SiDart />, level: 88 },
        { name: "C/C++", icon: <SiCplusplus />, level: 75 }
      ]
    },
    {
      title: "Frameworks & Libraries",
      skills: [
        { name: "Spring Boot", icon: <SiSpringboot />, level: 85 },
        { name: "Flutter", icon: <SiFlutter />, level: 90 },
        { name: "React", icon: <SiReact />, level: 80 }
      ]
    },
    {
      title: "Web Technologies",
      skills: [
        { name: "HTML5", icon: <SiHtml5 />, level: 95 },
        { name: "CSS3", icon: <SiCss3 />, level: 85 }
      ]
    },
    {
      title: "Databases & Backend",
      skills: [
        { name: "MySQL", icon: <SiMysql />, level: 85 },
        { name: "Firebase", icon: <SiFirebase />, level: 80 }
      ]
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Git", icon: <SiGit />, level: 90 },
        { name: "VS Code", icon: <SiVisualstudiocode />, level: 95 },
        { name: "Android Studio", icon: <SiAndroidstudio />, level: 85 }
      ]
    }
  ];

  const additionalSkills = [
    "UI/UX Design",
    "Cross-Platform Development", 
    "Mobile Development",
    "Version Control",
    "Data Structures",
    "Algorithms",
    "REST API",
    "MVC Architecture",
    "Agile/SDLC"
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-subtitle">Technologies I work with and my proficiency levels</p>
        </div>

        <div className="skills-content">
          <div className="skills-grid">
            {skillCategories.map((category, index) => (
              <div key={index} className="skill-category">
                <h3 className="category-title">{category.title}</h3>
                <div className="skills-list">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="skill-item">
                      <div className="skill-header">
                        <div className="skill-info">
                          <span className="skill-icon">{skill.icon}</span>
                          <span className="skill-name">{skill.name}</span>
                        </div>
                        <span className="skill-percentage">{skill.level}%</span>
                      </div>
                      <div className="skill-bar">
                        <div 
                          className="skill-progress"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="additional-skills">
            <h3>Additional Skills & Expertise</h3>
            <div className="skills-tags">
              {additionalSkills.map((skill, index) => (
                <span key={index} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="skills-summary">
            <div className="summary-card">
              <h4>Experience Level</h4>
              <p>
                <strong>3+ years</strong> of hands-on experience in software development, 
                with a focus on mobile applications and full-stack web development.
              </p>
            </div>
            
            <div className="summary-card">
              <h4>Specialization</h4>
              <p>
                Expert in <strong>cross-platform mobile development</strong> using Flutter 
                and React Native, with strong backend development skills in Java Spring Boot.
              </p>
            </div>
            
            <div className="summary-card">
              <h4>Learning Philosophy</h4>
              <p>
                Continuously learning and adapting to new technologies. Currently exploring 
                <strong> advanced system programming</strong> and cloud technologies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;