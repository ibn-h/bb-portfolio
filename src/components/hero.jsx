import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { containerVariants, itemVariants } from "../utils/motion";

const badgePulse = {
  scale: [1, 1.4, 1],
  opacity: [0.5, 0.15, 0.5],
  duration: 2,
};

const textFlicker = {
  opacity: [1, 0.8, 1, 0.5, 1],
  times: [0, 0.1, 0.2, 0.5, 1],
  duration: 3,
};

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
        <motion.div
          variants={itemVariants}
          className="text-paragraph flex items-center justify-center gap-2 text-sm font-medium"
        >
          <motion.div
            className="bg-secondary flex h-4 w-4 items-center justify-center rounded-full p-0.75"
            animate={{
              scale: badgePulse.scale,
              opacity: badgePulse.opacity,
            }}
            transition={{
              duration: badgePulse.duration,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="bg-primary h-full w-full rounded-full"></div>
          </motion.div>
          Available For Work
        </motion.div>

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
          <Link
            to="#projects"
            className="btn btn-padding bg-secondary"
            aria-label="View Projects"
          >
            View Projects
          </Link>

          <Link
            to="#contact"
            className="btn btn-padding bg-accent"
            aria-label="Contact Me"
          >
            Contact Me
          </Link>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="text-primary flex items-center justify-center gap-3"
        >
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/badr-b-40b1b6351/?locale=en_US"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
            >
              <path
                fill="currentColor"
                d="M26.111,3H5.889c-1.595,0-2.889,1.293-2.889,2.889V26.111c0,1.595,1.293,2.889,2.889,2.889H26.111c1.595,0,2.889-1.293,2.889-2.889V5.889c0-1.595-1.293-2.889-2.889-2.889ZM10.861,25.389h-3.877V12.87h3.877v12.519Zm-1.957-14.158c-1.267,0-2.293-1.034-2.293-2.31s1.026-2.31,2.293-2.31,2.292,1.034,2.292,2.31-1.026,2.31-2.292,2.31Zm16.485,14.158h-3.858v-6.571c0-1.802-.685-2.809-2.111-2.809-1.551,0-2.362,1.048-2.362,2.809v6.571h-3.718V12.87h3.718v1.686s1.118-2.069,3.775-2.069,4.556,1.621,4.556,4.975v7.926Z"
                fill-rule="evenodd"
              ></path>
            </svg>
          </a>

          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/ibn-h"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
            >
              <path
                fill="currentColor"
                d="M16,2.345c7.735,0,14,6.265,14,14-.002,6.015-3.839,11.359-9.537,13.282-.7,.14-.963-.298-.963-.665,0-.473,.018-1.978,.018-3.85,0-1.312-.437-2.152-.945-2.59,3.115-.35,6.388-1.54,6.388-6.912,0-1.54-.543-2.783-1.435-3.762,.14-.35,.63-1.785-.14-3.71,0,0-1.173-.385-3.85,1.435-1.12-.315-2.31-.472-3.5-.472s-2.38,.157-3.5,.472c-2.677-1.802-3.85-1.435-3.85-1.435-.77,1.925-.28,3.36-.14,3.71-.892,.98-1.435,2.24-1.435,3.762,0,5.355,3.255,6.563,6.37,6.913-.403,.35-.77,.963-.893,1.872-.805,.368-2.818,.963-4.077-1.155-.263-.42-1.05-1.452-2.152-1.435-1.173,.018-.472,.665,.017,.927,.595,.332,1.277,1.575,1.435,1.978,.28,.787,1.19,2.293,4.707,1.645,0,1.173,.018,2.275,.018,2.607,0,.368-.263,.787-.963,.665-5.719-1.904-9.576-7.255-9.573-13.283,0-7.735,6.265-14,14-14Z"
              ></path>
            </svg>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
