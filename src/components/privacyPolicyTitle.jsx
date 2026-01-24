const PrivacyPolicyTitle = () => {
  return (
    <header className="flex flex-col items-start justify-start gap-4 px-8 pt-16 pb-8 text-left md:items-center md:justify-center md:px-16 md:text-center">
      <h1 className="text-4xl leading-none font-semibold text-black md:text-5xl">
        Privacy Policy
      </h1>

      <div className="flex w-full flex-col items-start gap-2 md:items-center">
        <span className="test-base text-paragraph leading-relaxed font-semibold sm:text-lg">
          Last updated: January 12, 2026
        </span>

        <p className="text-paragraph max-w-4xl text-base leading-relaxed font-normal sm:text-lg">
          This Privacy Policy describes how I, Badr Belarbi, collect, use, and
          handle your personal information when you visit my portfolio website.
          As a developer, I value data integrity and transparency.
        </p>
      </div>
    </header>
  );
};

export default PrivacyPolicyTitle;
