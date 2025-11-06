import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar({ active, onNavigate }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen((s) => !s);
  const navRef = useRef(null);
  const [menuTop, setMenuTop] = useState(0);

  const items = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  // prevent background scroll & close on ESC
  useEffect(() => {
    const prevBodyOverflow = document.body.style.overflow;
    const scrollContainer = document.getElementById("main-scroll");
    const prevContainerOverflow = scrollContainer
      ? scrollContainer.style.overflow
      : null;

    const handleKey = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      if (scrollContainer) scrollContainer.style.overflow = "hidden";
      window.addEventListener("keydown", handleKey);
    }

    return () => {
      document.body.style.overflow = prevBodyOverflow || "";
      if (scrollContainer)
        scrollContainer.style.overflow = prevContainerOverflow || "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [isOpen]);

  // measure navbar bottom to place the menu below it when opened
  useEffect(() => {
    if (!isOpen) return;
    const measure = () => {
      const navEl = navRef.current;
      if (navEl && typeof navEl.getBoundingClientRect === "function") {
        const rect = navEl.getBoundingClientRect();
        setMenuTop(Math.max(0, Math.ceil(rect.bottom)));
      } else {
        setMenuTop(64); // fallback
      }
    };

    measure();
    window.addEventListener("resize", measure);
    window.addEventListener("scroll", measure, true);
    return () => {
      window.removeEventListener("resize", measure);
      window.removeEventListener("scroll", measure, true);
    };
  }, [isOpen]);

  return (
    <nav
      ref={navRef}
      className="sticky top-4 z-50 mx-auto w-[90%] md:w-[70%] backdrop-blur-md bg-white/10 border border-white/20 rounded-3xl shadow-lg px-6 py-3 flex justify-between items-center transition-all duration-300"
    >
      <h1 className="text-xl font-semibold text-white cursor-pointer">
        Kyla<span className="text-[#ffde59]">B</span>
      </h1>

      {/* Desktop links */}
      <ul className="hidden md:flex gap-8 text-white/90 text-sm">
        {items.map((item) => (
          <li key={item.id}>
            <button
              type="button"
              onClick={() => onNavigate && onNavigate(item.id)}
              aria-current={active === item.id ? "page" : undefined}
              className={`cursor-pointer px-2 py-1 transition-all duration-200 ${
                active === item.id
                  ? "text-[#ffde59] font-semibold"
                  : "text-white/80 hover:text-[#ffde59]"
              }`}
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Button */}
      <div
        className="md:hidden text-white text-2xl cursor-pointer"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        {isOpen ? <FiX /> : <FiMenu />}
      </div>

      {/* Mobile Fullscreen Overlay Menu rendered into document.body via portal */}
      {typeof document !== "undefined" &&
        createPortal(
          isOpen ? (
            <div
              className="fixed left-0 right-0 md:hidden bg-black z-40 transition-all duration-300"
              role="menu"
              aria-label="Mobile menu"
              style={{ top: menuTop + "px", bottom: 0, overflow: "auto" }}
            >
              <div className="relative w-full max-h-full">
                <div className="pt-8 pb-12 flex flex-col items-center justify-start space-y-6">
                  {items.map((it) => (
                    <button
                      key={it.id}
                      type="button"
                      onClick={() => {
                        setIsOpen(false);
                        onNavigate && onNavigate(it.id);
                      }}
                      className={`text-md tracking-wide transition-colors duration-200 ${
                        active === it.id
                          ? "text-[#ffde59] font-semibold"
                          : "text-white hover:text-[#ffde59]"
                      }`}
                      role="menuitem"
                    >
                      {it.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ) : null,
          document.body
        )}
    </nav>
  );
}
