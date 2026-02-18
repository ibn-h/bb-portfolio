import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "../utils/motion";
import emailjs from "@emailjs/browser";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault();

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, event.target, {
        publicKey: PUBLIC_KEY,
      })
      .then(
        () => {
          console.log("Success!");
          event.target.reset();
        },
        (error) => {
          console.log("Failed...", error.text);
        },
      );
  };

  return (
    <motion.section
      id="contact"
      className="grid items-center gap-10 bg-white px-6 py-16 sm:grid-cols-2 sm:gap-24 sm:px-8 md:px-16"
      // Apply the container trigger
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="flex flex-col gap-4">
        <motion.h2
          variants={itemVariants}
          className="text-3xl leading-tight font-bold tracking-tight text-black sm:text-4xl"
        >
          Let’s Work Together
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="text-lg leading-relaxed font-normal text-black"
        >
          Are you looking for a dedicated Web Developer or Designer for your
          next project? I am currently available for freelance opportunities. I
          am highly responsive and can adapt to your timeline to ensure a smooth
          collaboration.
        </motion.p>
      </div>

      <motion.form
        variants={itemVariants} // The whole form slides in as one unit after the text
        className="flex flex-col items-start justify-center gap-6"
        onSubmit={handleSubmit}
      >
        <div className="flex w-full flex-col">
          <label htmlFor="email-field" className="font-medium">
            E-mail
          </label>
          <input
            type="email"
            id="email-field"
            placeholder="john.doe@gmail.com"
            className="focus:ring-accent mt-2 rounded-2xl bg-gray-200 p-4 outline-none focus:ring-2"
            required
            name="email"
          />

          <label htmlFor="name-field" className="mt-4 font-medium">
            Name
          </label>
          <input
            type="text"
            id="name-field"
            placeholder="John Doe"
            className="focus:ring-accent mt-2 rounded-2xl bg-gray-200 p-4 outline-none focus:ring-2"
            required
            name="user_name"
          />

          <label htmlFor="message-field" className="mt-4 font-medium">
            Message
          </label>
          <textarea
            id="message-field"
            className="focus:ring-accent mt-2 max-h-50 min-h-25 rounded-2xl bg-gray-200 p-4 outline-none focus:ring-2"
            placeholder="Type your message here..."
            required
            name="message"
          ></textarea>
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="btn btn-padding bg-accent text-base"
        >
          Send
        </motion.button>
      </motion.form>
    </motion.section>
  );
};

export default Contact;
