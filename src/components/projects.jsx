import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { itemVariants } from "../utils/motion";

import bronzePlanetImg from "../assets/bronze-planet.png";
import snakeGameImg from "../assets/snake-game.png";
import podiaImg from "../assets/podia.png";

const projectsData = [
  {
    id: 1,
    link: "https://snake-game-ygmm.onrender.com/",
    image: snakeGameImg,
    title: "Snake Game",
    Description:
      "A mini-project completed in just 3 days. I integrated Supabase for real-time database management.",
  },
  {
    id: 2,
    link: "https://violet-goal-407157.framer.app/",
    image: bronzePlanetImg,
    title: "Bronze Planet",
    Description:
      "This project served as a playground for my web design skills. I prioritized responsive architecture.",
  },
  {
    id: 3,
    link: "https://entire-words-752427.framer.app/",
    image: podiaImg,
    title: "Podia (Frontend Practice)",
    Description:
      "Using Framer, I focused on high-fidelity details. This project features unique hover effects.",
  },
];

const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Time between each project card appearing
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

        <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
          {projectsData.map(({ id, link, image, title, Description }) => (
            <motion.article
              key={id}
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
