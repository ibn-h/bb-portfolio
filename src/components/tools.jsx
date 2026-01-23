import StackIcon from "tech-stack-icons";

const tools = ["react", "js", "git", "nodejs", "framer", "figma"];

function Tools() {
  return (
    <section
      id="tools"
      className="bg-secondary px-6 sm:px-8 md:px-16 py-16 flex items-center justify-center flex-col gap-8"
    >
      <h2 className="text-text font-bold text-4xl tracking-tight">Tools</h2>
      <div className="grid grid-cols-3 sm:grid-cols-6 items-center justify-center w-full gap-3">
        {tools.map((toolName, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center text-center gap-3 w-full"
          >
            <StackIcon name={toolName} className="w-16 h-16" />
            <h4 className="text-text lg:text-xl text-lg">{toolName}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Tools;
