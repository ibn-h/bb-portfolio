import { motion } from "framer-motion";
import { itemVariants } from "../utils/motion";

import bronzePlanetImg from "../assets/bronze-planet-fireshot.png";
import podiaImg from "../assets/podia-fireshot.png";
import shortlyPreview from "../assets/previewShortly.jpg";

const projectsData = [
  {
    link: "https://ibn-h.github.io/url-shortening-api-master/",
    image: shortlyPreview,
    title: "Shortly",
    Description:
      "Built with a mobile-first workflow, this responsive landing page features a fully functional URL-shortening API integration. The project leverages React for a dynamic user interface and TailwindCSS for streamlined, modern styling, while Git was utilized throughout the development process for efficient version control.",
  },
  {
    link: "https://violet-goal-407157.framer.app/",
    image: bronzePlanetImg,
    title: "Bronze Planet",
    Description:
      "As part of my ongoing journey to sharpen my web design skills, I created a fully responsive conceptual website using Framer. This self-initiated project allowed me to explore the entire design-to-development pipeline from start to finish.",
  },
  {
    link: "https://entire-words-752427.framer.app/",
    image: podiaImg,
    title: "Podia",
    Description:
      "A landing page made using Framer. I focused on implementing every single detail from the typography to the hover effects. In addition, every section is made responsive ensuring it's accessible for each screen size.",
  },
];

const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="projects" className="bg-secondary px-8 py-16 sm:px-16">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="mx-auto flex max-w-7xl flex-col gap-6 sm:gap-10"
      >
        <motion.h2
          variants={itemVariants}
          className="text-text text-left text-3xl font-bold sm:text-4xl"
        >
          Projects
        </motion.h2>

        <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 md:gap-10 lg:grid-cols-3">
          {projectsData.map(({ link, image, title, Description }, key) => (
            <motion.article
              key={key}
              variants={cardVariants}
              className="flex flex-col gap-4 sm:gap-6"
            >
              <a href={link} target="_blank" rel="noopener noreferrer">
                <img
                  className="aspect-video w-full rounded-lg object-cover shadow-sm transition-transform duration-300 hover:scale-105"
                  alt={title}
                  src={image}
                />
              </a>
              <div className="flex flex-col gap-2 sm:gap-3">
                <h3 className="text-xl font-medium text-black sm:text-2xl">
                  {title}
                </h3>
                <p>{Description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
