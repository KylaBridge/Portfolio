import { useRef, useState, useEffect } from "react";
import Background from "../components/Background";
import Navbar from "../components/Navbar";

export default function Home() {
  const scrollRef = useRef(null);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const sections = Array.from(container.querySelectorAll("section[id]"));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { root: container, threshold: 0.6 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const handleNavigate = (id) => {
    const container = scrollRef.current;
    if (!container) return;
    const target = container.querySelector(`#${id}`);
    if (target) container.scrollTo({ top: target.offsetTop, behavior: "smooth" });
  };

  return (
    <>
      <Background />

      <div
        ref={scrollRef}
        className="relative z-10 h-screen overflow-auto"
        id="main-scroll"
      >
        <header className="sticky top-4 z-30">
          <Navbar active={active} onNavigate={handleNavigate} />
        </header>

        {/* Sections */}
        <section
          id="home"
          className="min-h-screen flex items-center justify-center relative"
        >
          <div className="max-w-3xl text-center px-6 text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Hello, I’m <span className="text-[#ffde59]">Kyla Rosaldo</span>
            </h1>
            <p className="text-sm md:text-base text-white/80 leading-relaxed">
              A Front-End Developer student from National University Manila,
              continuously learning and exploring the world of modern web
              design.
            </p>

            <div className="mt-8 flex justify-center">
              <button
                onClick={() => {
                  const section = document.getElementById("projects");
                  section?.scrollIntoView({ behavior: "smooth" });
                }}
                className="px-6 py-2 bg-[#ffde59] text-black font-md rounded-full shadow-[0_0_10px_#ffde59] hover:shadow-[0_0_20px_#ffde59] hover:scale-105 transition-all duration-300"
              >
                View Projects
              </button>
            </div>
          </div>

          {/* Scroll label */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center text-white/60 text-sm animate-bounce">
            <span>Scroll</span>
            <span className="text-[#ffde59] mt-1">↓</span>
          </div>
        </section>

        <section
          id="about"
          className="min-h-screen flex items-center justify-center"
        >
          <div className="max-w-3xl px-6 text-white">
            About content goes here.
          </div>
        </section>

        <section
          id="skills"
          className="min-h-screen flex items-center justify-center"
        >
          <div className="max-w-3xl px-6 text-white">
            Skills content goes here.
          </div>
        </section>

        <section
          id="projects"
          className="min-h-screen flex items-center justify-center"
        >
          <div className="max-w-3xl px-6 text-white">
            Projects content goes here.
          </div>
        </section>

        <section
          id="contact"
          className="min-h-screen flex items-center justify-center"
        >
          <div className="max-w-3xl px-6 text-white">
            Contact content goes here.
          </div>
        </section>
      </div>
    </>
  );
}
