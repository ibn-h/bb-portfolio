import { motion } from "motion/react";
import { containerVariants, itemVariants } from "../utils/motion";

const Hero = () => {
  return (
    <section
      id="hero"
      className="flex min-h-screen items-center justify-center bg-white px-6 py-20 sm:px-8 md:px-16 md:py-30"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView={"visible"} // Trigger animation when in view
        viewport={{ once: true, amount: 0.2 }} // Only animate once when 20% is visible
        className="mx-auto flex max-w-225 flex-col items-center justify-center gap-8 text-center"
      >
        <motion.h1
          variants={itemVariants}
          className="text-text font-h-1 text-4xl font-bold tracking-tight md:text-5xl"
        >
          Crafting Seamless Web Experiences from Antwerp
        </motion.h1>
        <motion.p
          variants={itemVariants}
          className="text-paragraph max-w-200 text-lg"
        >
          My name is Badr Belarbi. I am a Web Developer with 2 years of
          experience building functional and aesthetic web applications.
        </motion.p>
        <motion.div
          variants={itemVariants}
          className="flex justify-center gap-4"
        >
          <a
            href="#projects"
            className="btn bg-secondary"
            aria-label="View Projects"
          >
            View Projects
          </a>

          <a href="#contact" className="btn bg-accent" aria-label="Contact Me">
            Contact Me
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
