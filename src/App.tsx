import React, { useState, useEffect } from 'react';
import { MapPin, Phone, Mail, Github, Linkedin, Instagram, Download, ExternalLink, Calendar, Award, Code, Database, Cloud, Settings, Globe, ChevronDown, Send, User, Briefcase, GraduationCap, Trophy, FolderOpen, Languages, MessageSquare, AudioWaveform as Waveform, Filter, Shield, Film } from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'education', 'skills', 'projects', 'certifications', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
  };

  const skills = {
    'Languages & Frameworks': [
      'C#', 'ASP.NET Core', '.NET 5/6/7', 'Web API', 'Entity Framework Core',
      'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Bootstrap', 'jQuery'
    ],
    'Frontend Technologies': [
      'Angular 13+', 'React.js', 'Blazor', 'Bootstrap', 'Material UI'
    ],
    'Database Technologies': [
      'SQL Server', 'PostgreSQL', 'MySQL', 'ADO.NET', 'Dapper', 'LINQ'
    ],
    'DevOps & Cloud': [
      'Azure DevOps', 'Azure App Services', 'Azure SQL', 'GitHub Actions',
      'AWS (EC2, RDS)', 'Docker', 'Jenkins'
    ],
    'Tools & Practices': [
      'Visual Studio', 'Git', 'Postman', 'Swagger', 'SSRS', 'Agile (Scrum)',
      'Jira', 'Confluence', 'CI/CD Pipelines', 'RESTful API', 'JWT Authentication'
    ],
    'Testing & Security': [
      'xUnit', 'NUnit', 'Moq', 'Selenium', 'OWASP Top 10', 'Identity Server', 'OAuth 2.0'
    ]
  };

  const projects = [
    {
      title: "Nonlinear Chirp Mode Decomposition: A Variational Method",
      description: "Developed the variational nonlinear chirp mode decomposition (VNCMD) as an alternative method to analyze wideband nonlinear chirp signals (NCSs).",
      details: "Based on the observation that wideband NCSs can be transformed into narrow-band signals using demodulation techniques. Successfully demonstrated the effectiveness of VNCMD in analyzing NCSs with close or even crossed modes using simulated and real data examples.",
      icon: Waveform
    },
    {
      title: "Multivariate Fast Iterative Filtering for Nonstationary Signals",
      description: "Conducted comprehensive testing using artificial and real multivariate signals, demonstrating advanced signal processing capabilities.",
      details: "Successfully separated multivariate modulated oscillations, achieved frequency alignment across different channels, and demonstrated robustness to noise perturbations. Applied to real EEG recordings and geophysical data sets.",
      icon: Filter
    },
    {
      title: "Capstone Project – Cybersecurity TTX",
      description: "Designed decentralized network with segmentation, DMZ, and IDS/IPS to limit attack spread.",
      details: "Reduced RTO/WRT to 41.5 hrs; met 48-hr MTD after ransomware simulation, recovered 95% of data. Achieved strong ROI via antivirus and segmentation. Applied NIST CSF principles, HIPAA/GDPR compliance.",
      icon: Shield
    },
    {
      title: "Online Cinema E-Booking System",
      description: "Built a full-stack cinema ticketing system using Next.js, MongoDB, and Mongoose.",
      details: "Features seat selection, booking flow, secure payments, responsive UI with TailwindCSS, and admin dashboard. Optimized APIs and leveraged SWR for efficient state management, reducing load time by 80%.",
      icon: Film
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold text-gray-900">CR</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {[
                  { id: 'home', label: 'Home' },
                  { id: 'about', label: 'About' },
                  { id: 'experience', label: 'Experience' },
                  { id: 'education', label: 'Education' },
                  { id: 'skills', label: 'Skills' },
                  { id: 'projects', label: 'Projects' },
                  { id: 'certifications', label: 'Certifications' },
                  { id: 'contact', label: 'Contact' }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                      activeSection === item.id
                        ? 'text-blue-600 border-b-2 border-blue-600'
                        : 'text-gray-700 hover:text-blue-600'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-blue-600 p-2"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {[
                { id: 'home', label: 'Home' },
                { id: 'about', label: 'About' },
                { id: 'experience', label: 'Experience' },
                { id: 'education', label: 'Education' },
                { id: 'skills', label: 'Skills' },
                { id: 'projects', label: 'Projects' },
                { id: 'certifications', label: 'Certifications' },
                { id: 'contact', label: 'Contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block px-3 py-2 text-base font-medium w-full text-left transition-colors duration-200 ${
                    activeSection === item.id
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 min-h-screen flex items-center bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="mb-8">
              <div className="w-32 h-32 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full mx-auto mb-6 overflow-hidden">
                <img 
                  src="/Chetan Reddy Godumagadda Photo 2.jpg" 
                  alt="Chetan Reddy Godumagadda" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
                Chetan Reddy Godumagadda
              </h1>
              <p className="text-xl sm:text-2xl text-blue-600 mb-8">
                Full Stack .NET Developer
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-6 mb-12 text-gray-600">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-blue-600" />
                <span>Albany, NY</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-blue-600" />
                <span>+1 (518) 577-9687</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-blue-600" />
                <span>chetanreddy95@gmail.com</span>
              </div>
            </div>

            <div className="flex justify-center gap-4 mb-12">
              <a
                href="https://github.com/ChetanReddyG"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors duration-200"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/chetan-reddy-75150a230"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-200"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="https://instagram.com/chetan.rdy"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full hover:from-purple-600 hover:to-pink-600 transition-all duration-200"
              >
                <Instagram className="w-6 h-6" />
              </a>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
              >
                Get In Touch
              </button>
              <div className="flex flex-col items-center gap-2">
                <p className="text-sm text-gray-600 text-center">
                  To those HRs out there who need a more organized and minimal version of my information, you can download the trusted PDF version here:
                </p>
                <button className="px-8 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-colors duration-200 font-medium flex items-center justify-center gap-2">
                  <Download className="w-5 h-5" />
                  Download Resume
                </button>
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <button
              onClick={() => scrollToSection('about')}
              className="animate-bounce text-gray-400 hover:text-blue-600 transition-colors duration-200"
            >
              <ChevronDown className="w-8 h-8" />
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <User className="w-8 h-8 text-blue-600" />
              <h2 className="text-4xl font-bold text-gray-900">About Me</h2>
            </div>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Hey there!</h3>
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <p>
                I'm Chetan, and if you've made it this far, you're probably curious about who I am. Well, I'm a developer, problem solver, fitness enthusiast, and an unapologetic foodie. This website is my way of sharing what I do, what I love, and everything I plan to achieve. But hey, don't judge my writing skills based on this section—I promise I'm much better at coding than at writing catchy introductions!
              </p>
              <p>
                I got into software development because I've always been fascinated by how a few lines of code can transform into something powerful and useful. The idea that <code className="bg-gray-200 px-2 py-1 rounded text-sm">let x = 10;</code> could store a value in memory blew my mind when I first started. And watching code come to life in the form of apps, websites, and tools we use every day still feels like magic. That's what keeps me constantly learning and building.
              </p>
              <p>
                Fitness, on the other hand, is my way of balancing the countless hours spent in front of a screen. Whether it's hitting the gym, lifting weights, or pushing my limits, working out keeps me focused, disciplined, and energized. It's not just about physical strength—it's about mental resilience too.
              </p>
              <p>
                And then there's food—because what's life without good food? Whether I'm trying new cuisines, cooking up something delicious, or just enjoying a good meal after a workout, eating is definitely one of my favorite activities. Some say it's a necessity, I call it an experience!
              </p>
              <p>
                I built this website as a showcase of my work, my passions, and everything I strive to create. It's not just a portfolio—it's a reflection of who I am. If you find something here that resonates with you, head over to the contact section and reach out. Whether it's collaboration, opportunities, or just a good conversation, I'd love to connect!
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">About Me on the Web</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Resume on the Web has been an ongoing passion project of mine since early 2025. Rather than limiting my professional story to a static document viewed only by recruiters, I wanted to create a dynamic, accessible, and interactive platform for anyone to explore.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              I continually refine and enhance it to reflect my evolving skills and interests, because much like this website, I am always growing. It serves as both a personal showcase and a learning ground where I experiment with cutting-edge frameworks, innovative design concepts, and modern development tools.
            </p>
            <p className="text-gray-700 leading-relaxed">
              This iteration is powered by React, styled with Tailwind CSS, and demonstrates my commitment to creating exceptional user experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Briefcase className="w-8 h-8 text-blue-600" />
              <h2 className="text-4xl font-bold text-gray-900">Work Experience</h2>
            </div>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="space-y-12">
            {/* JPMorgan Chase */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-4">
                    <img 
                      src="/download.jpg" 
                      alt="JPMorgan Chase Logo" 
                      className="w-16 h-16 object-contain rounded-lg bg-gray-50 p-2"
                    />
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">Full Stack .Net Developer</h3>
                      <p className="text-xl text-blue-600 font-semibold mb-2">JPMorgan Chase & Co, USA</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Calendar className="w-5 h-5" />
                    <span>Oct 2024 - Current</span>
                  </div>
                </div>
              </div>
              
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Engineered and maintained real-time financial dashboards and APIs using ASP.NET Core Web API and Angular, enabling instant visibility into portfolio positions and risk exposure.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Developed RESTful microservices integrated with SQL Server and Entity Framework Core, achieving a 35% reduction in latency for high-frequency trading and reporting workflows.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Automated build and deployment processes across development and UAT environments using Azure DevOps pipelines, streamlining release cycles and improving delivery speed.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Strengthened application security by implementing IdentityServer4 with JWT-based authentication, ensuring compliance with internal audit and security policies.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Built interactive, modular Single Page Applications (SPAs) using Angular 14, leveraging reusable components, lazy loading, and reactive forms to enhance maintainability and performance.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Collaborated closely with Product Owners and Business Analysts in Agile/Scrum sprints to design and deliver investment solutions tailored for institutional clients.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Designed CI/CD workflows and containerized API deployments using Docker, significantly reducing manual deployment overhead and increasing release reliability.</span>
                </li>
              </ul>
            </div>

            {/* Hexaware Technologies */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-4">
                    <img 
                      src="/download.png" 
                      alt="Hexaware Technologies Logo" 
                      className="w-16 h-16 object-contain rounded-lg bg-gray-50 p-2"
                    />
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">.NET Developer</h3>
                      <p className="text-xl text-blue-600 font-semibold mb-2">Hexaware Technologies, India</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Calendar className="w-5 h-5" />
                    <span>Aug 2020 - July 2023</span>
                  </div>
                </div>
              </div>
              
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Designed and developed a patient portal and appointment scheduling system using ASP.NET MVC, SQL Server, and jQuery, enabling streamlined healthcare access for patients.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Migrated and refactored legacy services to .NET Core 3.1 Web API, resulting in a 40% performance boost and elimination of memory leaks in long-running processes.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Integrated Power BI embedded analytics into the portal with secure, token-based authentication, delivering real-time, interactive visualizations to end users.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Built and consumed RESTful APIs to enable seamless integration with external healthcare systems such as EHR platforms and lab information services.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Developed reusable and accessible UI components using Bootstrap and Razor Pages, ensuring a consistent user experience and improved front-end maintainability.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Implemented robust unit and integration testing frameworks using NUnit and Selenium, achieving 95% test coverage for backend systems.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Contributed to HIPAA compliance initiatives by enhancing user audit logging, secure session management, and data access controls.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <GraduationCap className="w-8 h-8 text-blue-600" />
              <h2 className="text-4xl font-bold text-gray-900">Education</h2>
            </div>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="space-y-8">
            {/* University at Albany */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                <div className="flex items-center gap-6 flex-1">
                  <img 
                    src="/minerva-mark.png" 
                    alt="University at Albany Logo" 
                    className="w-20 h-20 object-contain"
                  />
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">University at Albany</h3>
                    <p className="text-lg text-gray-700 mb-2">Master of Science - MS, Information Science</p>
                    <p className="text-gray-600 mb-2">Information Management & Technology</p>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <span>Aug 2023 - May 2025</span>
                      <span>•</span>
                      <span>Grade: 3.73</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CVR College of Engineering */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                <div className="flex items-center gap-6 flex-1">
                  <img 
                    src="/ufihdxiv.4xp.jpg" 
                    alt="CVR College of Engineering Logo" 
                    className="w-20 h-20 object-contain rounded-lg"
                  />
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">CVR College of Engineering, Hyderabad</h3>
                    <p className="text-lg text-gray-700 mb-2">Bachelor of Technology - BTech</p>
                    <p className="text-gray-600 mb-2">Electrical, Electronics and Communications Engineering</p>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <span>2019 - 2023</span>
                      <span>•</span>
                      <span>Grade: 8.26</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* VelocIITy Junior College */}
            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                <div className="flex items-center gap-6 flex-1">
                  <img 
                    src="/velociity-junior-college-dilsukhnagar-hyderabad-educational-institutes-y5docvo8dz.jpg" 
                    alt="VelocIITy Junior College Logo" 
                    className="w-20 h-20 object-contain rounded-lg"
                  />
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">VelocIITy Junior College</h3>
                    <p className="text-lg text-gray-700 mb-2">INTERMEDIATE, MPC</p>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <span>Jun 2017 - Apr 2019</span>
                      <span>•</span>
                      <span>Grade: 859</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Settings className="w-8 h-8 text-blue-600" />
              <h2 className="text-4xl font-bold text-gray-900">Skills</h2>
            </div>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, skillList], index) => (
              <div key={category} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-center gap-3 mb-4">
                  {index === 0 && <Code className="w-6 h-6 text-blue-600" />}
                  {index === 1 && <Globe className="w-6 h-6 text-green-600" />}
                  {index === 2 && <Database className="w-6 h-6 text-purple-600" />}
                  {index === 3 && <Cloud className="w-6 h-6 text-orange-600" />}
                  {index === 4 && <Settings className="w-6 h-6 text-red-600" />}
                  {index === 5 && <Award className="w-6 h-6 text-indigo-600" />}
                  <h3 className="text-lg font-bold text-gray-900">{category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skillList.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-blue-100 hover:text-blue-700 transition-colors duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <Languages className="w-6 h-6 text-blue-600" />
                <h3 className="text-lg font-bold text-gray-900">Languages</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {['English', 'Hindi', 'Telugu'].map((language) => (
                  <span
                    key={language}
                    className="px-4 py-2 bg-blue-100 text-blue-700 text-sm rounded-full font-medium"
                  >
                    {language}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <Globe className="w-6 h-6 text-green-600" />
                <h3 className="text-lg font-bold text-gray-900">Methodologies</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {['Agile (Scrum)', 'SDLC', 'CI/CD', 'Microservices'].map((method) => (
                  <span
                    key={method}
                    className="px-4 py-2 bg-green-100 text-green-700 text-sm rounded-full font-medium"
                  >
                    {method}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <FolderOpen className="w-8 h-8 text-blue-600" />
              <h2 className="text-4xl font-bold text-gray-900">Projects</h2>
            </div>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <project.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                </div>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{project.details}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Trophy className="w-8 h-8 text-blue-600" />
              <h2 className="text-4xl font-bold text-gray-900">Certifications</h2>
            </div>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Database className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Database Programming with SQL</h3>
                  <p className="text-blue-600 font-semibold mb-2">Oracle</p>
                  <p className="text-gray-600 text-sm mb-2">May 2022</p>
                  <p className="text-gray-700 text-sm">Award of Course Completion and Final Exam Completion. Solved modules of SQL statements as well as DDL and DCL, data modeling and normalization.</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Settings className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Embedded Systems and IoT</h3>
                  <p className="text-blue-600 font-semibold mb-2">AWCTNA-22</p>
                  <p className="text-gray-600 text-sm mb-2">March 2022</p>
                  <p className="text-gray-700 text-sm">Participated in webinar on "Embedded Systems and IoT", "Advancement in Wireless Communication Technologies, Networking and Applications".</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Code className="w-6 h-6 text-yellow-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Introduction to Python Programming</h3>
                  <p className="text-blue-600 font-semibold mb-2">IETE SF, CVR</p>
                  <p className="text-gray-600 text-sm mb-2">November 2021</p>
                  <p className="text-gray-700 text-sm">Participated in five day online workshop conducted by Technolites in collaboration with IETE SF.</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Introduction to Deep Learning</h3>
                  <p className="text-blue-600 font-semibold mb-2">IEEE Student Branch, CVR</p>
                  <p className="text-gray-600 text-sm mb-2">Sept 2021 - Oct 2021</p>
                  <p className="text-gray-700 text-sm">Six day online workshop on image processing algorithms, machine learning algorithms, neural networks, and PyTorch fundamentals.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <MessageSquare className="w-8 h-8 text-blue-600" />
              <h2 className="text-4xl font-bold text-gray-900">Get In Touch</h2>
            </div>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600">
              I'd love to hear from you. Send me a message and I'll respond as soon as possible.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <p className="text-xs text-gray-500 mb-2">The one where you tell me your name</p>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-200"
                  placeholder="John Doe"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <p className="text-xs text-gray-500 mb-2">The one where you tell me how I can contact you back</p>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-200"
                  placeholder="johndoe@google.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <p className="text-xs text-gray-500 mb-2">The one where you tell me what I can do to help you</p>
                <textarea
                  id="message"
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-200"
                  placeholder="Type your message here"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </form>
          </div>

          <div className="mt-12 text-center">
            <div className="flex justify-center gap-6 mb-6">
              <a
                href="https://github.com/ChetanReddyG"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors duration-200"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/chetan-reddy-75150a230"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-200"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="https://instagram.com/chetan.rdy"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full hover:from-purple-600 hover:to-pink-600 transition-all duration-200"
              >
                <Instagram className="w-6 h-6" />
              </a>
            </div>
            <p className="text-gray-600">
              Or reach me directly at{' '}
              <a href="mailto:chetanreddy95@gmail.com" className="text-blue-600 hover:underline">
                chetanreddy95@gmail.com
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-400">
              © 2025 Chetan Reddy Godumagadda. Crafted with passion and precision.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;