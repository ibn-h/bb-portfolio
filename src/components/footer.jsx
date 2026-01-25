import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-secondary flex w-full flex-col items-start gap-2 px-6 py-6 text-left sm:flex-row sm:items-center sm:justify-between sm:px-8 md:px-16">
      <p className="w-fit text-base">
        © 2025 Badr Belarbi. All Rights Reserved.
      </p>

      <Link
        state={{ fromInternal: true }}
        to="/privacy-policy"
        className="text-text text-base hover:underline focus:ring-2 focus:ring-black focus:ring-offset-2 focus:outline-none"
        aria-label="Privacy Policy"
      >
        Privacy Policy
      </Link>
    </footer>
  );
};

export default Footer;
