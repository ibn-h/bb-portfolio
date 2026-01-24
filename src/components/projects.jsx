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
      "This project served as a playground for my web design skills. I prioritized responsive architecture, ensuring that the 'Bronze Planet' concept provides a seamless experience across all devices.",
  },
  {
    id: 3,
    link: "https://entire-words-752427.framer.app/",
    image: podiaImg,
    title: "Podia (Frontend Practice)",
    Description:
      "Using Framer, I focused on high-fidelity details. This project features unique hover effects and custom states, resulting in a fully responsive design that maintains its integrity across all screen sizes.",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="bg-secondary px-6 py-16 sm:px-8 md:px-16">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 sm:gap-10">
        <h2 className="text-text text-left text-3xl font-bold sm:text-4xl">
          Projects
        </h2>

        <div className="flex flex-wrap justify-start gap-8 lg:justify-between">
          {projectsData.map(({ id, link, image, title, Description }) => (
            <article key={id} className="flex w-full flex-col gap-8 sm:w-87.5">
              <a href={link} target="_blank">
                <img
                  className="h-85 w-full rounded-lg object-cover shadow-sm"
                  alt={title}
                  src={image}
                />
              </a>
              <div className="flex flex-col gap-3">
                <h3 className="text-2xl font-medium text-black">{title}</h3>
                <p>{Description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
