import { useState, useEffect, useRef } from "react";

function Menu() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navMenuRef = useRef(null);
  const navToggleRef = useRef(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Handle click outside to close menu
  useEffect(() => {
    const handleClickOutside = (e) => {
      const target = e.target;

      if (navMenuRef.current && !navMenuRef.current.contains(target)) {
        if (navToggleRef.current && navToggleRef.current.contains(target)) {
          return;
        } else {
          setIsMobileMenuOpen(false);
        }
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <div className="lg:hidden pr-4 flex justify-center w-full">
        <button
          ref={navToggleRef}
          onClick={toggleMobileMenu}
          className="flex cursor-pointer items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-gray-800 hover:border-gray-500 appearance-none focus:outline-none"
        >
          <p>Menu</p>
        </button>
      </div>

      <div
        ref={navMenuRef}
        className={`
            w-full flex-grow lg:flex lg:items-center lg:w-auto 
            mt-2 lg:mt-0 text-black p-4 lg:p-0 z-20 
            overflow-hidden transition-all duration-500 ease-in-out
            ${
              isMobileMenuOpen
                ? "max-h-[500px] opacity-100"
                : "max-h-0 opacity-0"
            } 
            lg:max-h-none lg:opacity-100
          `}
      >
        <ul className="list-reset flex flex-col lg:flex-row justify-end flex-1 items-center space-y-2 lg:space-y-0 lg:space-x-4">
          <li>
            <a
              className="inline-block py-2 px-4 text-black no-underline hover:text-gray-800"
              href="/#DevelopmentAndSoftware"
            >
              Development & Software
            </a>
          </li>

          <li>
            <a
              className="inline-block py-2 px-4 text-black no-underline hover:text-gray-800"
              href="/#MediaAndPublishing"
            >
              Media & Publishing
            </a>
          </li>

          <li>
            <a
              className="inline-block py-2 px-4 text-black no-underline hover:text-gray-800"
              href="/#AboutUs"
            >
              Who We Are
            </a>
          </li>

          <li>
            <a
              className="inline-block py-2 px-4 text-black no-underline hover:text-gray-800"
              href="mailto:yourcompany@yourdomain.co.uk"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
export default Menu;
