import { useState } from "react";

export const Contact = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [request, setRequest] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(
      `Form submitted with following information: ${email}, ${name}, ${request}`
    );
  };

  return (
    <section
      id="contact"
      className="grid grid-cols-2 gap-24 p-16 items-center bg-white"
    >
      <div className="flex flex-col gap-4">
        <h2 className="text-4xl font-bold text-black tracking-tight leading-tight">
          Let’s Work Together
        </h2>

        <p className="text-lg text-black leading-relaxed font-normal">
          Are you looking for a dedicated Web Developer or Designer for your
          next project? I am currently available for freelance opportunities. I
          am based in Antwerp UTC+2. I am highly responsive and can adapt to
          your timeline to ensure a smooth collaboration.
        </p>
      </div>

      <form className="flex items-start justify-center gap-6 flex-col">
        <div className="flex flex-col w-full">
          <label htmlFor="email-field" className="font-medium">
            E-mail
          </label>
          <input
            type="email"
            id="email-field"
            placeholder="john.doe@gmail.com"
            className="bg-gray-200 p-4 mt-2 rounded-[20px]"
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="name-field" className="font-medium mt-4">
            Name
          </label>
          <input
            type="text"
            id="name-field"
            placeholder="John Doe"
            className="bg-gray-200 p-4 mt-2 rounded-[20px]"
            onChange={(e) => setName(e.target.value)}
            required
          />

          <label htmlFor="request-field" className="font-medium mt-4">
            Request
          </label>
          <textarea
            id="Type here..."
            className="bg-gray-200 p-4 max-h-50 min-h-25 mt-2 rounded-[20px]"
            placeholder="Website with 3 pages's and database integration"
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
