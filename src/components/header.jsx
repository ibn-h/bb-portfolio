export const Header = () => {
  const navigationItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
  ];

  const linkStyles =
    "hover:opacity-70 transition-opacity font-normal text-sm sm:text-base text-text";

  return (
    <header className="bg-secondary flex items-center justify-between px-6 py-4 sm:px-8 md:px-16">
      <div className="font-montserrat text-xl font-semibold text-black sm:text-2xl">
        BB
      </div>

      <nav className="flex items-center gap-6" aria-label="Main navigation">
        {navigationItems.map((item) => (
          <a key={item.href} href={item.href} className={linkStyles}>
            {item.label}
          </a>
        ))}

        <a href="#contact" className="btn bg-accent hidden sm:inline-block">
          Contact
        </a>
      </nav>
    </header>
  );
};

export default Header;
