import React from 'react';
import { FiGithub, FiExternalLink, FiCode, FiDatabase, FiSmartphone } from 'react-icons/fi';
import '../styles/Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Student Management System",
      description: "A full-stack web application with modern UI built using HTML and Spring Boot for efficient student record management.",
      longDescription: "Engineered the backend with Java, Spring Boot, Hibernate, and JPA, handling data storage for over 100 student records. Leveraged SQL (MySQL) for database management with optimized indexing. Features include adding, updating, and deleting student records through a user-friendly multi-page interface.",
      technologies: ["Java", "Spring Boot", "HTML", "MySQL", "Hibernate", "JPA"],
      github: "#",
      demo: "#",
      image: "/api/placeholder/400/250",
      category: "Full Stack",
      icon: <FiCode />
    },
    {
      id: 2,
      title: "Real-Time Chat App",
      description: "A Flutter-based real-time chat application with message synchronization under 200ms between users.",
      longDescription: "Integrated Firebase Authentication for account creation and login, supporting up to 50 test users. Incorporated image sharing with compression to maintain performance. Features responsive UI, fast scrolling, and smooth page transitions.",
      technologies: ["Flutter", "Firebase", "Dart", "Authentication"],
      github: "#",
      demo: "#",
      image: "/api/placeholder/400/250",
      category: "Mobile",
      icon: <FiSmartphone />
    },
    {
      id: 3,
      title: "File Recovery Software",
      description: "Windows desktop application with Flutter frontend integrated with C++ for disk insights and file recovery.",
      longDescription: "Developed native C++ integration via FFI to fetch disk insights like size, available space, and used space with millisecond response times. Application optimized for consistent performance under varying system loads. Planning future iterations to support selective file recovery for NTFS and FAT partitions.",
      technologies: ["Flutter", "C++", "FFI", "Windows API"],
      github: "#",
      demo: "#",
      image: "/api/placeholder/400/250",
      category: "Desktop",
      icon: <FiDatabase />
    },
    {
      id: 4,
      title: "Movie Search Android App",
      description: "Android app providing access to OMDB API data for over 500,000 movies with comprehensive information display.",
      longDescription: "Displays comprehensive information such as description, cast, release date, upcoming releases, and IMDb ratings. Achieved app startup time under 2 seconds with optimized API handling. Implemented search filters and pagination to improve data accessibility.",
      technologies: ["Flutter", "OMDB API", "Android", "REST API"],
      github: "#",
      demo: "#",
      image: "/api/placeholder/400/250",
      category: "Mobile",
      icon: <FiSmartphone />
    }
  ];

  const [filter, setFilter] = React.useState('All');
  const [selectedProject, setSelectedProject] = React.useState(null);

  const categories = ['All', 'Full Stack', 'Mobile', 'Desktop'];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">My Projects</h2>
          <p className="section-subtitle">A showcase of my work and technical abilities</p>
        </div>

        <div className="project-filters">
          {categories.map(category => (
            <button
              key={category}
              className={`filter-btn ${filter === category ? 'active' : ''}`}
              onClick={() => setFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map(project => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <div className="project-placeholder">
                  {project.icon}
                </div>
                <div className="project-overlay">
                  <div className="project-links">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      aria-label="View GitHub repository"
                    >
                      <FiGithub />
                    </a>
                    <a 
                      href={project.demo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      aria-label="View live demo"
                    >
                      <FiExternalLink />
                    </a>
                  </div>
                </div>
              </div>

              <div className="project-content">
                <div className="project-category">
                  {project.category}
                </div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-technologies">
                  {project.technologies.map(tech => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                </div>

                <button 
                  className="project-details-btn"
                  onClick={() => setSelectedProject(project)}
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {selectedProject && (
          <div className="project-modal-overlay" onClick={() => setSelectedProject(null)}>
            <div className="project-modal" onClick={(e) => e.stopPropagation()}>
              <button 
                className="modal-close"
                onClick={() => setSelectedProject(null)}
              >
                ×
              </button>
              
              <div className="modal-content">
                <div className="modal-header">
                  <h3>{selectedProject.title}</h3>
                  <span className="modal-category">{selectedProject.category}</span>
                </div>
                
                <p className="modal-description">{selectedProject.longDescription}</p>
                
                <div className="modal-technologies">
                  <h4>Technologies Used:</h4>
                  <div className="tech-list">
                    {selectedProject.technologies.map(tech => (
                      <span key={tech} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
                
                <div className="modal-links">
                  <a 
                    href={selectedProject.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    <FiGithub /> View Code
                  </a>
                  <a 
                    href={selectedProject.demo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn btn-secondary"
                  >
                    <FiExternalLink /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;