export const Footer = () => {
  return (
    <footer className="bg-secondary flex w-full flex-col items-center justify-between gap-2 px-6 py-6 text-left sm:flex-row sm:px-8 md:px-16">
      <p className="w-fit text-base">
        © 2025 Badr Belarbi. All Rights Reserved.
      </p>

      <a
        href="/privacy-policy"
        className="text-base hover:underline focus:ring-2 focus:ring-black focus:ring-offset-2 focus:outline-none"
        aria-label="Privacy Policy"
      >
        Privacy Policy
      </a>
    </footer>
  );
};

export default Footer;
