export const Footer = () => {
  return (
    <footer className="flex w-full items-center justify-between px-16 py-8 bg-secondary">
      <p className="text-base">© 2025 Badr Belarbi. All Rights Reserved.</p>

      <a
        href="/privacy-policy"
        className="text-base  hover:underline focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
        aria-label="Privacy Policy"
      >
        Privacy Policy
      </a>
    </footer>
  );
};

export default Footer;
