import StackIcon from "tech-stack-icons";

const tools = ["react", "js", "git", "nodejs", "framer", "figma"];

function Tools() {
  return (
    <section
      id="tools"
      className="bg-secondary flex flex-col items-center justify-center gap-8 px-6 py-16 sm:px-8 md:px-16"
    >
      <h2 className="text-text text-left text-3xl font-bold tracking-tight sm:text-4xl">
        Tools
      </h2>
      <div className="grid w-full grid-cols-3 items-center justify-center gap-3 sm:grid-cols-6">
        {tools.map((toolName, index) => (
          <div
            key={index}
            className="flex w-full flex-col items-center justify-center gap-3 text-center"
          >
            <StackIcon name={toolName} className="h-16 w-16" />
            <h4 className="text-text text-lg lg:text-xl">{toolName}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Tools;
