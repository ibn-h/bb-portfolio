import bronzePlanetImg from "../assets/bronze-planet.png";
import snakeGameImg from "../assets/snake-game.png";
import podiaImg from "../assets/podia.png";

const projectsData = [
  {
    id: 1,
    link: "https://snake-game-ygmm.onrender.com/",
    image: snakeGameImg,
    title: "Snake Game",
    challenge: "Build a classic game with a modern backend twist.",
    solution:
      "A mini-project completed in just 3 days. I integrated Supabase for real-time database management.",
  },
  {
    id: 2,
    link: "https://violet-goal-407157.framer.app/",
    image: bronzePlanetImg,
    title: "Bronze Planet",
    challenge:
      "Design a conceptual website focused on aesthetics and accessibility.",
    solution:
      "This project served as a playground for my web design skills. I prioritized accessibility and responsive architecture, ensuring that the 'Bronze Planet' concept is inclusive for every type of user.",
  },
  {
    id: 3,
    link: "https://entire-words-752427.framer.app/",
    image: podiaImg,
    title: "Podia (Frontend Practice)",
    challenge: "Replicate a complex UI to master advanced layout techniques.",
    solution:
      "Using Framer, I focused on high-fidelity details. This project features unique hover effects and custom states, resulting in a fully responsive design that maintains its integrity across all screen sizes.",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="bg-secondary p-16">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        <h2 className="text-text font-bold text-4xl tracking-tight">
          Projects
        </h2>

        <div className="flex flex-wrap justify-center md:justify-between gap-8">
          {projectsData.map(
            ({ id, link, image, title, challenge, solution }) => (
              <article
                key={id}
                className="flex flex-col w-full sm:w-87.5 gap-8"
              >
                <a href={link} target="_blank">
                  <img
                    className="w-full h-85 object-cover rounded-lg shadow-sm"
                    alt={title}
                    src={image}
                  />
                </a>
                <div className="flex flex-col gap-4">
                  <h3 className="font-medium text-black text-2xl">{title}</h3>
                  <div className="flex flex-col gap-3 text-base leading-6 text-gray-800">
                    <p>
                      <span className="font-bold">The Challenge:</span>{" "}
                      {challenge}
                    </p>
                    <p>
                      <span className="font-bold">The Solution:</span>{" "}
                      {solution}
                    </p>
                  </div>
                </div>
              </article>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
