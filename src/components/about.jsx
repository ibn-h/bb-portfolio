import webdevImage from "../assets/web-dev.jpg";

export const About = () => {
  return (
    <section
      id="about"
      className="grid items-center gap-4 bg-white px-6 py-16 sm:grid-cols-2 sm:gap-24 sm:px-8 md:px-16"
    >
      <div className="flex flex-col gap-4">
        <h2 className="w-full text-3xl leading-tight font-bold tracking-tight text-black sm:text-4xl">
          Bridging Logic and Design
        </h2>

        <p className="text-lg leading-relaxed font-normal text-black">
          I am a Computer Science student with a passion for building
          applications that work as good as they look. Programming isn't just my
          field of study, it's what I do for fun.
        </p>
      </div>

      <img
        className="h-auto w-full rounded-lg object-cover"
        alt="About Me Illustration"
        src={webdevImage}
      />
    </section>
  );
};

export default About;
