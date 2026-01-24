import React from "react";

const PrivacyRules = () => {
  const sections = [
    {
      title: "1. Data Collection",
      content: (
        <>
          I only collect personal data that you voluntarily provide through the
          contact form on this website. This typically includes:
          <ul className="mt-2 list-inside list-disc">
            <li>Name: To know who I am communicating with.</li>
            <li>
              Email Address: To respond to your inquiries or project requests.
            </li>
            <li>
              Message Content: Any details you provide regarding your project or
              request.
            </li>
          </ul>
        </>
      ),
    },
    {
      title: "2. Purpose of Data Processing",
      content: (
        <>
          I use the information collected solely for the following purposes:
          <ul className="mt-2 list-inside list-disc">
            <li>To respond to your questions or freelance inquiries.</li>
            <li>
              To discuss potential collaborations and project specifications.
            </li>
          </ul>
          <p className="mt-2">
            I do not use your data for marketing newsletters, and I never sell
            your information to third parties.
          </p>
        </>
      ),
    },
    {
      title: "3. Data Storage and Security",
      content:
        "Your data is handled with care. Messages sent through the contact form are processed and stored securely to ensure that your information remains confidential. I implement standard security measures to prevent unauthorized access or disclosure of your data.",
    },
    {
      title: "4. Third-Party Services",
      content:
        "This website is built using Tailwind CSS and Vite. Depending on the hosting provider (e.g., Vercel, Netlify) or form-handling service used, some technical data (like IP addresses) may be logged for security and analytical purposes by these providers. I encourage you to check their respective privacy policies.",
    },
    {
      title: "5. Your Rights",
      content: (
        <>
          Under the GDPR, you have the right to:
          <ul className="mt-2 list-inside list-disc">
            <li>Access the personal data I hold about you.</li>
            <li>Request the correction or deletion of your data.</li>
            <li>Object to the processing of your data.</li>
          </ul>
          <p className="mt-4 italic">
            If you wish to exercise any of these rights, please contact me
            directly through the contact form on this website.
          </p>
        </>
      ),
    },
  ];

  return (
    <section className="flex flex-col items-center gap-12 px-8 pt-8 pb-16 md:px-16">
      <div className="w-full max-w-4xl space-y-12">
        {sections.map((section, index) => (
          <div key={index} className="flex flex-col gap-4">
            <h2 className="font-montserrat text-3xl leading-[0.9] font-medium text-black md:text-4xl">
              {section.title}
            </h2>
            <div className="font-montserrat text-paragraph text-base leading-relaxed sm:text-lg">
              {section.content}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PrivacyRules;
