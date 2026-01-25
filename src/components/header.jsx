import useHashScroll from "../hooks/useHashScroll";
import scrollToTop from "../hooks/scrollToTop";
import { div } from "motion/react-client";

const navigationItems = [
  { label: "Home", href: "#/" },
  { label: "Projects", href: "#/#projects" },
  { label: "About", href: "#/#about" },
];

const Header = () => {
  useHashScroll();
  scrollToTop();

  const linkStyles =
    "hover:opacity-70 transition-opacity font-normal text-sm sm:text-base text-text";

  return (
    <header className="bg-secondary flex items-center justify-between px-6 py-4 sm:px-8 md:px-16">
      <div className="font-montserrat text-xl font-semibold text-black sm:text-2xl">
        BB
      </div>

      <nav
        className="flex items-center gap-3 sm:gap-6"
        aria-label="Main navigation"
      >
        {navigationItems.map((item) =>
          item.href.startsWith("#/") ? (
            <a key={item.href} href={item.href} className={linkStyles}>
              {item.label}
            </a>
          ) : (
            <Link to={item.href} key={item.href} className={linkStyles}>
              {item.label}
            </Link>
          ),
        )}

        <a
          href="#/#contact"
          className="btn sm:bg-accent sm:inline-block"
          aria-label="Contact Me"
        >
          Contact
        </a>
      </nav>
    </header>
  );
};

export default Header;
