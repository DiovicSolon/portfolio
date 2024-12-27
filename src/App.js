import React from 'react';
import './App.css';
import VTImage from './VT.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode, faSyncAlt, faUserFriends, faBrain, faCode, faDatabase, faMobileAlt , faRoad, faBasketballBall } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';  // or from '@fortawesome/free-regular-svg-icons' if you want the regular style

const navItems = ['Home', 'Education', 'Projects', 'Certificates', 'Skills', 'Contact'];

const projects = [
  { 
    title: 'ExpenseTracker', 
    desc: 'Base code for ExpenseTracker application', 
    tags: ['ASP.NET Core', 'SQL'],
    link: 'https://github.com/DiovicSolon/-ExpenseTracker-ASI.Basecode',
    icon: faLaptopCode
  },
  { 
    title: 'Debt Monitoring', 
    desc: 'Debt Monitoring application', 
    tags: ['Android', 'Java'],
    link: 'https://github.com/DiovicSolon/Debt-Monitoring',
    downloadLink: 'https://drive.google.com/drive/mobile/folders/12FrpTl4JQGCU485VrbzRF-3MKbVBU4G2?usp=sharing',
    icon: faSyncAlt
  },
  { 
    title: 'Student System Monitoring', 
    desc: 'System for monitoring student activities', 
    tags: ['C#', 'SQL'],
    link: 'https://github.com/DiovicSolon/Student-System-Monitoring',
    icon: faUserFriends
  },
  { 
    title: 'SportsStore', 
    desc: 'E-commerce platform for sports products', 
    tags: ['ASP.NET', 'SQL'],
    link: 'https://github.com/DiovicSolon/SPORTSSTORE-SOLON-04671',
   icon: faBasketballBall
  },
  { 
    title: 'Skilltest', 
    desc: 'Application for skill assessment tests', 
    tags: ['JavaScript', 'Node.js'],
    link: 'https://github.com/DiovicSolon/Skilltest',
    icon: faDatabase
  },
  { 
    title: 'Roadguard Admin', 
    desc: 'Admin dashboard for Roadguard', 
    tags: ['React', 'Vercel'],
    link: 'https://github.com/DiovicSolon/roadguard_admin',
    viewLink: 'https://roadguard-admin.vercel.app/',
    icon: faRoad
  }
];



const certificates = [
  { title: 'Web Development', issuer: 'Platform Name', year: '2023' },
  { title: 'Database Management', issuer: 'Platform Name', year: '2023' }
];

const skills = [
  {
    category: 'Technical Skills',
    items: [
      { name: 'Programming Languages', description: 'Python, PHP, C#', icon: faCode },
      { name: 'Database Management', description: 'SQL, Firebase', icon: faDatabase },
      { name: 'Front-End Development', description: 'HTML, CSS', icon: faLaptopCode },
      { name: 'Mobile Development', description: 'React Native', icon: faMobileAlt },
      { name: 'Version Control Systems', description: 'Git, GitHub', icon: faGithub }
    ]
  },
  {
    category: 'Non-Technical Skills',
    items: [
      { name: 'Time Management', description: '', icon: faSyncAlt },
      { name: 'Adaptability', description: '', icon: faUserFriends },
      { name: 'Emotional Intelligence (EQ)', description: '', icon: faBrain },
      { name: 'Continuous Learning', description: '', icon: faLaptopCode }
    ]
  }
];

const Section = ({ id, title, children }) => (
  <section id={id} className="min-h-screen py-20">
    <div className="max-w-6xl mx-auto px-4">
      {title && <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
        {title}
      </h2>}
      {children}
    </div>
  </section>
);

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-100">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gray-900/80 backdrop-blur-sm border-b border-gray-700 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <span className="text-2xl font-bold gradient-text">My Portfolio</span>
            <div className="flex space-x-8">
              {navItems.map(item => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="nav-link text-gray-300 hover:text-blue-500 transition-colors duration-300"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Home Section */}
      <Section id="home">
        <div className="min-h-screen flex items-center justify-center pt-16">
          {/* Container with two columns */}
          <div className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 md:space-x-8 w-full max-w-5xl px-6">
            
            {/* Left Column: Profile Image */}
            <div className="flex justify-center md:justify-start w-full md:w-1/2">
              <img 
                src={VTImage} // Use the imported image
                alt="My Profile" 
                className="w-100 h-100 object-cover shadow-lg border-4 border-black-500"
              />
            </div>

            {/* Right Column: About Me and Buttons */}
            <div className="text-center md:text-left w-full md:w-1/2 space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold gradient-text">Welcome to My Portfolio</h1>
              <p className="text-lg text-gray-300 leading-relaxed">
                I am an aspiring IT professional with a strong passion for technology and continuous learning. 
                I am dedicated to enhancing my knowledge of IT skills, including programming, system development, 
                and emerging technologies. My goal is to contribute to innovative projects while growing both 
                personally and professionally in the ever-evolving tech industry.
              </p>
              <div className="flex justify-center md:justify-start space-x-4">
                <button 
                  className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg hover:opacity-90 transition-opacity"
                  onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
                >
                  View Projects
                </button>

                <button className="px-6 py-3 border border-blue-500 rounded-lg hover:bg-blue-500/10 transition-colors">
                  Contact Me
                </button>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Education Section */}
      <Section id="education" title="Education">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-gray-800/50 p-8 rounded-2xl backdrop-blur-sm border border-gray-700 hover:border-blue-500/50 transition-colors">
            <h3 className="text-xl font-bold mb-4">
              BSIT <span className="text-sm font-normal"> (Bachelor of Science in Information Technology)</span>
            </h3>
            <p className="text-gray-400">University of Cebu-Main</p>
            <p className="text-blue-500">2021 - PRESENT</p>
          </div>
          <div className="bg-gray-800/50 p-8 rounded-2xl backdrop-blur-sm border border-gray-700 hover:border-blue-500/50 transition-colors">
            <h3 className="text-2xl font-bold mb-4">Tertiary</h3>
            <p className="text-gray-400">University of Cebu-PRI</p>
            <p className="text-blue-500">2019 - 2021</p>
          </div>
          <div className="bg-gray-800/50 p-8 rounded-2xl backdrop-blur-sm border border-gray-700 hover:border-blue-500/50 transition-colors">
            <h3 className="text-2xl font-bold mb-4">Secondary</h3>
            <p className="text-gray-400">OPPRA National High School</p>
            <p className="text-blue-500">2015 - 2019</p>
          </div>
          <div className="bg-gray-800/50 p-8 rounded-2xl backdrop-blur-sm border border-gray-700 hover:border-blue-500/50 transition-colors">
            <h3 className="text-2xl font-bold mb-4">Primary</h3>
            <p className="text-gray-400">OPPRA Elementary School</p>
            <p className="text-blue-500">2009 - 2015</p>
          </div>
        </div>
      </Section>
{/* Projects Section */}
<Section id="projects" title="Projects">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    {projects.map((project, idx) => (
      <div key={idx} className="project-card bg-gray-800/50 p-8 rounded-2xl backdrop-blur-sm border border-gray-700 hover:border-blue-500/50 transition-all duration-300">
        <FontAwesomeIcon icon={project.icon} size="3x" className="text-blue-500 mb-4" />
        <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
        <p className="text-gray-400 mb-4">{project.desc}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, i) => (
            <span key={i} className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm">
              {tag}
            </span>
          ))}
        </div>
        <div className="flex flex-col space-y-2">
          <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
            View on GitHub
          </a>
          {project.downloadLink && (
            <a href={project.downloadLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
              Download App
            </a>
          )}
          {project.viewLink && (
            <a href={project.viewLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
              View Project
            </a>
          )}
        </div>
      </div>
    ))}
  </div>
</Section>


      {/* Certificates Section */}
      <Section id="certificates" title="Certificates">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certificates.map((cert, idx) => (
            <div key={idx} className="certificate-card bg-gray-800/50 p-8 rounded-2xl backdrop-blur-sm border border-gray-700 hover:border-blue-500/50 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-4">{cert.title}</h3>
              <p className="text-gray-400">{cert.issuer}</p>
              <p className="text-blue-500">{cert.year}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Skills Section */}
      <Section id="skills" title="Skills">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skillCategory, idx) => (
            <div key={idx} className="bg-gray-800/50 p-8 rounded-2xl backdrop-blur-sm border border-gray-700 hover:border-blue-500/50 transition-colors">
              <h3 className="text-2xl font-bold mb-4">{skillCategory.category}</h3>
              <div className="space-y-4">
                {skillCategory.items.map((skill, i) => (
                  <div key={i} className="flex items-center space-x-4">
                    <FontAwesomeIcon icon={skill.icon} className="text-blue-500 text-2xl" />
                    <div>
                      <h4 className="text-lg font-semibold">{skill.name}</h4>
                      {skill.description && <p className="text-gray-400">{skill.description}</p>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>
{/* Contact Section */}
<Section id="contact" title="Contact">
  <div className="text-center">
    <h3 className="text-3xl font-bold mb-6">Get in Touch</h3>
    <p className="text-lg text-gray-300 mb-4">Feel free to reach out to me via email or on Facebook!</p>
    <div className="flex justify-center space-x-8 mb-8">
      <div className="flex items-center space-x-2">
        <FontAwesomeIcon icon={faEnvelope} size="lg" className="text-blue-500" />
        <a href="mailto:Diovicsolon@gmail.com" className="text-blue-500 hover:underline text-xl">Diovicsolon@gmail.com</a>
      </div>
      <div className="flex items-center space-x-2">
        <FontAwesomeIcon icon={faFacebook} size="lg" className="text-blue-500" />
        <a href="https://www.facebook.com/solondiovic" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline text-xl">Facebook Profile</a>
      </div>
   
    </div>
  </div>
</Section>


      {/* Footer */}
      <footer className="bg-gray-900/80 backdrop-blur-sm border-t border-gray-700 py-4 text-center text-gray-400">
        <p>&copy; 2024 My Portfolio. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
