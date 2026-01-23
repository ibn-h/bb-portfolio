export const Footer = () => {
  return (
    <footer className="flex flex-col sm:flex-row w-full items-center justify-between px-6 sm:px-8 md:px-16 py-6 text-left gap-2 bg-secondary">
      <p className="text-xs w-fit sm:text-base">© 2025 Badr Belarbi. All Rights Reserved.</p>

      <a
        href="/privacy-policy"
        className="text-xs sm:text-base hover:underline focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
        aria-label="Privacy Policy"
      >
        Privacy Policy
      </a>
    </footer>
  );
};

export default Footer;
