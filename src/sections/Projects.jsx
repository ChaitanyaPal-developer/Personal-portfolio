
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Async Weather Tracking Website",
    description:
      "A responsive weather tracking website that provides real-time weather updates, temperature details, and forecasts using a weather API.",
    image: "/projects/project1.png",
    tags: ["React", "API", "Tailwind CSS"],
    link: "https://react-weather-12ab8b.netlify.app",
    github:
      "https://github.com/ChaitanyaPal-developer/react-weather-tracking",
  },
  {
    title: "E-Commerce Website",
    description:
      "A modern E-Commerce website offering stylish products, a seamless shopping experience, and an elegant, user-friendly design.",
    image: "/projects/project2.png",
    tags: ["React", "CSS"],
    link: "https://urverse.netlify.app/",
    github:
      "https://github.com/ChaitanyaPal-developer/YourVerse-e-commerce-website",
  },
  {
    title: "Calculator",
    description:
      "A responsive calculator web application that performs basic arithmetic operations with an intuitive user interface and efficient input handling.",
    image: "/projects/project3.png",
    tags: ["React", "Python"],
    link: "https://calculator-upgraded.netlify.app",
    github:
      "https://github.com/ChaitanyaPal-developer/Calculator-React-",
  },
  {
    title: "Smart Utility Toolkit",
    description:
      "Built using Node.js core modules such as process, http, fs, and crypto to create useful command-line utilities.",
    image: "/projects/project4.png",
    tags: ["Node.js", "Python"],
    link:
      "https://github.com/ChaitanyaPal-developer/smart-utility-toolkit",
    github:
      "https://github.com/ChaitanyaPal-developer/smart-utility-toolkit",
  },

  {
    title: "Amazon Website Clone",
    description: "An Amazon-inspired website featuring a responsive layout, interactive search functionality, product collections, and modern navigation. Built using HTML, CSS, and JavaScript with a focus on clean UI and user experience.",
    image: "/projects/project5.png",
    tags: ["HTML", "CSS", "JAVASCRIPT"],
    link: "https://amazon-ins-clone.netlify.app/",
    github: "https://github.com/ChaitanyaPal-developer/Amazon-inspired-website",
  },

  // ADD YOUR NEW PROJECTS BELOW THIS LINE

  // Example:
  // {
  //   title: "Your New Project",
  //   description: "Write your project description here.",
  //   image: "/projects/project5.png",
  //   tags: ["React", "JavaScript"],
  //   link: "https://your-live-project-link.com",
  //   github: "https://github.com/your-username/your-repository",
  // },
];

export const Projects = () => {
  const [showAll, setShowAll] = useState(false);

  const visibleProjects = showAll
    ? projects
    : projects.slice(0, 4);
 

  return (
    <section
      id="projects"
      className="py-32 relative overflow-hidden"
    >
      {/* Background Glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">

        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Projects that
            <span className="font-serif italic font-normal text-white">
              {" "}make an impact.
            </span>
          </h2>

          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A selection of my recent work, from complex web applications to
            innovative tools that solve real-world problems.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {visibleProjects.map((project, idx) => (
            <div
              key={project.title}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
              style={{
                animationDelay: `${(idx + 1) * 100}ms`,
              }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden aspect-video bg-black/20">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-contain transition-transform duration-500"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60" />

                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">

                  {/* Live Project */}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title}`}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>

                  {/* GitHub */}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title} source code`}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <span className="text-xs font-bold">GH</span>
                  </a>

                </div>
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-4">

                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </div>

                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>

                {/* Technology Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* View All / Show Less Button */}
        
        <div className="text-center mt-12">
  <button
    onClick={() => setShowAll(!showAll)}
    className="px-8 py-3 rounded-full border border-primary text-white hover:bg-primary transition-all duration-300"
  >
    {showAll ? "Show Less" : "View All Projects"}

    <ArrowUpRight className="inline-block ml-2 w-5 h-5" />
  </button>
</div>

      </div>
    </section>
  );
};
