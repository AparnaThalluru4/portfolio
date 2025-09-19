import React, { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gray-900/80 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-4 sm:px-6 py-4">
        <h1 className="text-lg sm:text-xl font-bold text-white">Thalluru Aparna</h1>
        <nav className="hidden md:flex space-x-6">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-blue-300 transition text-sm sm:text-base text-white"
            >
              {link.name}
            </a>
          ))}
        </nav>
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden focus:outline-none text-white"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav className="md:hidden bg-gray-900/90 backdrop-blur-sm px-4 py-3 space-y-3">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block hover:text-blue-300 transition text-base text-white"
            >
              {link.name}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;