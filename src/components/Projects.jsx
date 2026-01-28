import { ArrowRight, ExternalLink, Github } from "lucide-react";

const webProjects = [
  {
    id: 1,
    title: "Blossom Dreams",
    description: "A calm, aesthetic website focused on refined UI and UX.",
    image: "/projects/blossom-dreams.png",
    tags: ["React", "Tailwind CSS", "UI/UX"],
    demoUrl: "https://blossom-dreams.vercel.app/",
    githubUrl: "https://github.com/Ayman-Kz25/Blossom_Dreams.git",
  },
  {
    id: 2,
    title: "Data Visualization System",
    description: "A system that transforms raw data into visual insights.",
    image: "/projects/data-viz.png",
    tags: ["React", "Data Visualization", "Charts"],
    demoUrl: "https://automated-data-visualization-system.vercel.app/",
    githubUrl:
      "https://github.com/Ayman-Kz25/Automated_Data_Visualization_System.git",
  },
  {
    id: 3,
    title: "Pato Restaurant",
    description:
      "A responsive restaurant website with clean layout and interactions.",
    image: "/projects/pato.png",
    tags: ["HTML/CSS", "JavaScript", "Bootstrap"],
    demoUrl: "https://pato-restaurant-website.vercel.app/",
    githubUrl: "https://github.com/Ayman-Kz25/Pato_Restaurant_Website.git",
  },
  {
    id: 4,
    title: "Secure Check",
    description: "A security tool for password strength, URL, and spam checks.",
    image: "/projects/secure-check.png",
    tags: ["React", "Cyber Security", "Validation"],
    demoUrl: "https://secure-check-zeta.vercel.app/",
    githubUrl: "https://github.com/Ayman-Kz25/SecureCheck.git",
  },
  {
    id: 5,
    title: "TaskFlow",
    description:
      "A task management interface built for practicing state handling.",
    image: "/projects/taskflow.png",
    tags: ["React", "Tailwind", "State Management"],
    demoUrl: "https://taskflow-mu-ten.vercel.app/",
    githubUrl: "https://github.com/Ayman-Kz25/taskflow.git",
  },
  {
    id: 6,
    title: "Country Navigator",
    description:
      "A country explorer displaying real-time data using REST APIs.",
    image: "/projects/country-navigator.png",
    tags: ["React", "API Integration", "REST API"],
    demoUrl: "https://country-navigator-rho.vercel.app/",
    githubUrl: "https://github.com/Ayman-Kz25/CountryNavigator.git",
  },
];

const appProjects = [
  {
    id: 1,
    title: "Friend Match",
    description:
      "A Flutter app analyzing friendship compatibility using deterministic logic.",
    image: "/projects/compatibility-checker.png",
    tags: ["Flutter", "Dart", "Logic"],
    demoUrl: "https://friendship-compatibility-checker.vercel.app/",
    githubUrl:
      "https://github.com/Ayman-Kz25/Friendship_Compatibility_Checker.git",
  },
  {
    id: 2,
    title: "Mini Shop App",
    description:
      "A Flutter mini shop UI practicing layouts and scrollable widgets.",
    image: "/projects/shop-app.png",
    tags: ["Flutter", "UI", "ListView"],
    demoUrl: "https://mini-shop-app-alpha.vercel.app/",
    githubUrl: "https://github.com/Ayman-Kz25/Mini_Shop_App.git",
  },
  {
    id: 3,
    title: "Student Portal",
    description:
      "A Flutter student portal UI displaying structured academic information.",
    image: "/projects/student-portal.png",
    tags: ["Flutter", "Navigation"],
    demoUrl: "https://mini-student-portal-liard.vercel.app/",
    githubUrl: "https://github.com/Ayman-Kz25/Mini_Student_Portal.git",
  },
  {
    id: 4,
    title: "Mini Chat App",
    description: "A Flutter chat UI built to practice navigation and lists.",
    image: "/projects/chat-app.png",
    tags: ["Flutter", "UI", "ListView"],
    demoUrl: "https://mini-chat-app-seven.vercel.app/",
    githubUrl: "https://github.com/Ayman-Kz25/Mini_Chat_App.git",
  },
];

function Projects() {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here's some of my major Projects built through continuous hands-on
          learning and experience.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {webProjects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4 justify-evenly">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground border text-center">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-center items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300 "
                    >
                      <Github size={20} />
                    </a>
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300 "
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
          {appProjects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground border text-center">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-center items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300 "
                    >
                      <Github size={20} />
                    </a>
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300 "
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12 ">
          <a
            href="https://github.com/Ayman-Kz25"
            target="_blank"
            className="g-btn cosmic-btn w-fit flex items-center mx-auto gap-2 hover:transition-transform"
          >
            Check My Github <ArrowRight size={16} className="arrow-hover" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
