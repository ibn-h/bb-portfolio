import { useState } from "react";

export const Contact = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [request, setRequest] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(
      `Form submitted with following information: ${email}, ${name}, ${request}`,
    );
  };

  return (
    <section
      id="contact"
      className="grid items-center gap-10 bg-white px-6 py-16 sm:grid-cols-2 sm:gap-24 sm:px-8 md:px-16"
    >
      <div className="flex flex-col gap-4">
        <h2 className="text-3xl leading-tight font-bold tracking-tight text-black sm:text-4xl">
          Let’s Work Together
        </h2>

        <p className="text-lg leading-relaxed font-normal text-black">
          Are you looking for a dedicated Web Developer or Designer for your
          next project? I am currently available for freelance opportunities. I
          am based in Antwerp UTC+2. I am highly responsive and can adapt to
          your timeline to ensure a smooth collaboration.
        </p>
      </div>

      <form className="flex flex-col items-start justify-center gap-6">
        <div className="flex w-full flex-col">
          <label htmlFor="email-field" className="font-medium">
            E-mail
          </label>
          <input
            type="email"
            id="email-field"
            placeholder="john.doe@gmail.com"
            className="mt-2 rounded-xl bg-gray-100 p-4"
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="name-field" className="mt-4 font-medium">
            Name
          </label>
          <input
            type="text"
            id="name-field"
            placeholder="John Doe"
            className="mt-2 rounded-xl bg-gray-100 p-4"
            onChange={(e) => setName(e.target.value)}
            required
          />

          <label htmlFor="request-field" className="mt-4 font-medium">
            Request
          </label>
          <textarea
            id="request-field"
            className="mt-2 max-h-50 min-h-25 rounded-xl bg-gray-100 p-4"
            placeholder="Type here..."
            onChange={(e) => setRequest(e.target.value)}
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="btn bg-accent text-base"
          onSubmit={handleSubmit}
        >
          Send
        </button>
      </form>
    </section>
  );
};

export default Contact;
