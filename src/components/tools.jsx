import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "../utils/motion";
import StackIcon from "tech-stack-icons";

const tools = ["react", "js", "git", "nodejs", "framer", "figma"];

const Tools = () => {
  return (
    <motion.section
      id="tools"
      className="bg-secondary flex flex-col items-center justify-center gap-8 px-6 py-16 sm:px-8 md:px-16"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.h2
        variants={itemVariants}
        className="text-text text-left text-3xl font-bold tracking-tight sm:text-4xl"
      >
        Tools
      </motion.h2>

      <div className="grid w-full grid-cols-3 items-center justify-center gap-3 sm:grid-cols-6">
        {tools.map((toolName) => (
          <motion.div
            key={toolName}
            variants={itemVariants}
            className="flex w-full flex-col items-center justify-center gap-3 text-center"
          >
            <StackIcon name={toolName} className="h-16 w-16" />
            <h4 className="text-text text-lg capitalize lg:text-xl">
              {toolName === "js" ? "JavaScript" : toolName}
            </h4>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Tools;
