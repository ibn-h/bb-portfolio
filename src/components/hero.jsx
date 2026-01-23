import React from "react";

export const Hero = () => {
  return (
    <section
      id="hero"
      className="bg-white py-20 px-6 sm:px-8 md:px-16 md:py-30"
    >
      <div className="mx-auto flex max-w-225 flex-col items-center justify-center text-center gap-8">
        {/* Heading */}
        <h1 className="text-text font-h-1 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
          Crafting Seamless Web Experiences from Antwerp
        </h1>

        {/* Paragraph */}
        <p className="text-paragraph text-lg max-w-200">
          My name is Badr Belarbi. I am a Web Developer with 2 years of
          experience building functional and aesthetic web applications.
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-4">
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
        </div>
      </div>
    </section>
  );
};

export default Hero;
