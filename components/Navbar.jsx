"use client"
import { useState } from "react";
import Link from 'next/link';
import { Transition } from "react-transition-group";
import { VscAccount } from "react-icons/vsc"
import Loading from "./Loading";

const Navbar = () => {

  // loading animation 

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const pages = [
    { name: "Home", url: "/" },
    { name: "About", url: "/about" },
    { name: "Blog", url: "/blog" },
    { name: "Contact", url: "/contact" },
  ];

  return (
    <nav className="bg-darkcolor shadow-md fixed top-0 left-0 z-10 w-screen h-auto z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center justify-between w-full">
            <div className="flex-shrink-0">
              <h1 className="tracking-widest text-white text-2xl logo">Manoj Bajgain</h1>
            </div>
            <div className="hidden md:block flex-grow">
              <div className="flex justify-center">
                {pages.map((page) => (
                  <Link
                    key={page.name}
                    href={page.url}
                    className="text-gray-400 hover:text-white px-3 py-2 hover:underline rounded-md text-sm font-medium"
                  >
                    {page.name}
                  </Link>
                ))}
              </div>
            </div>
          
            <div className="-mr-2 flex md:hidden items-center">
              <button
                type="button"
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white focus:outline-none focus:text-white transition duration-150 ease-in-out"
                aria-label="Menu"
                aria-expanded={isMenuOpen}
              >
                <svg
                  className={`h-8 w-8 ${isMenuOpen ? "hidden" : ""}`}
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
                <svg
                  className={`h-8 w-8 ${isMenuOpen ? "" : "hidden"}`}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center">
              <Link
                href="/contact"
                className="inline-flex items-center tracking-wider justify-center px-4 py-2 border border-transparent text-sm font-medium text-lightcolor border-white rounded-sm bg-darkcolor text-white hover:text-darkcolor hover:bg-white hover:border-darkcolor"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <Transition in={isMenuOpen} timeout={300} unmountOnExit>
        {(state) => (
          <div
            className={`fixed px-2 pt-4 bg-white top-0 left-0 h-screen w-4/5 bg-lightcolor z-50 ${
              state === "entering" || state === "entered"
                ? "transform translate-x-0 transition-transform duration-300"
                : "transform -translate-x-full transition-transform duration-300"
            }`}
          >
            <div className=" pt-2 pb-3 sm:px-3">
              {pages.map((page) => (
                <Link
                  key={page.name}
                  href={page.url}
                  onClick={closeMenu} // Close the menu when a link is clicked
                  className="block px-3 py-2 text-base font-medium bg-white text-darkcolor border-b border-darkcolor"
                >
                  {page.name}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={closeMenu} // Close the menu when the "Contact Us" link is clicked
                className="mt-4 block px-4 py-2 border text-base font-medium text-white bg-darkcolor hover:text-white hover:bg-white border-darkcolor"
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </Transition>
    </nav>
  );
};

export default Navbar;
