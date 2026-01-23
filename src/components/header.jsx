import React from "react";

export const Header = () => {
  const navigationItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
  ];

  const linkStyles =
    "hover:opacity-70 transition-opacity font-normal text-base text-text";

  return (
    <header className="flex items-center justify-between px-16 py-4 bg-secondary">
      {/* Logo */}
      <div className="font-montserrat font-semibold text-black text-2xl">
        BB
      </div>

      {/* Navigatie */}
      <nav className="flex items-center gap-6" aria-label="Main navigation">
        {navigationItems.map((item) => (
          <a key={item.href} href={item.href} className={linkStyles}>
            {item.label}
          </a>
        ))}

        {/* Contact Button */}
        <a href="#contact" className="btn bg-accent">
          Contact
        </a>
      </nav>
    </header>
  );
};

export default Header;
