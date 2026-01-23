import webdevImage from "../assets/web-dev.jpg";

export const About = () => {
  return (
    <section
      id="about"
      className="grid sm:grid-cols-2 sm:gap-24 gap-4 px-6 sm:px-8 md:px-16 py-16 items-center bg-white"
    >
      <div className="flex flex-col gap-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-black tracking-tight leading-tight w-full">
          Bridging Logic and Design
        </h2>

        <p className="text-lg text-black leading-relaxed font-normal">
          I am a Computer Science student with a passion for building
          applications that work as good as they look. Programming isn't just my
          field of study, it's what I do for fun.
        </p>
      </div>

      <img
        className="w-full h-auto object-cover rounded-lg"
        alt="About Me Illustration"
        src={webdevImage}
      />
    </section>
  );
};

export default About;
