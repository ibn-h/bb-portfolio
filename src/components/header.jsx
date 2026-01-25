import { Link } from "react-router-dom";

const Header = () => {
  const navigationItems = [
    { label: "Home", href: "/" },
    { label: "Projects", href: "#projects" },
    { label: "About", href: "#about" },
  ];

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
        {navigationItems.map((item) => (
          <Link key={item.href} to={item.href} className={linkStyles}>
            {item.label}
          </Link>
        ))}

        <Link
          to="#contact"
          className="btn sm:bg-accent sm:inline-block"
          aria-label="Contact Me"
        >
          Contact
        </Link>
      </nav>
    </header>
  );
};

export default Header;
