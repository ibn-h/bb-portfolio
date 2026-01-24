import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "../utils/motion";
import webdevImage from "../assets/web-dev.jpg";

const About = () => {
  return (
    <motion.section
      id="about"
      className="grid items-center gap-4 bg-white px-6 py-16 sm:grid-cols-2 sm:gap-24 sm:px-8 md:px-16"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="flex flex-col gap-4">
        <motion.h2
          variants={itemVariants}
          className="w-full text-3xl leading-tight font-bold tracking-tight text-black sm:text-4xl"
        >
          Bridging Logic and Design
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="max-w-187.5 text-lg leading-relaxed font-normal text-black"
        >
          I am a Computer Science student with a passion for building
          applications that work as good as they look. Programming isn't just my
          field of study, it's what I do for fun.
        </motion.p>
      </div>

      <motion.img
        variants={itemVariants}
        className="h-auto w-full rounded-lg object-cover"
        alt="About Me Illustration"
        src={webdevImage}
      />
    </motion.section>
  );
};

export default About;
