import React, { useEffect, useState, useRef } from "react";
import ProjectCard from "./ProjectCard";

export default function ProjectCarousel({ projects = [], autoPlayMs = 5000 }) {
  const [index, setIndex] = useState(0);
  const length = projects.length;
  const timerRef = useRef(null);

  useEffect(() => {
    if (length <= 1) return;
    startTimer();
    return () => stopTimer();
  }, [index, length]);

  const startTimer = () => {
    stopTimer();
    timerRef.current = setTimeout(() => {
      goNext();
    }, autoPlayMs);
  };

  const stopTimer = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  };

  const goPrev = () => setIndex((i) => (i - 1 + length) % length);
  const goNext = () => setIndex((i) => (i + 1) % length);

  if (length === 0) {
    return <div className="text-center text-gray-400">No projects found.</div>;
  }

  return (
    <div className="relative">
      {/* center the carousel content to control arrow placement */}
      <div className="max-w-3xl mx-auto relative">
        <div className="overflow-hidden w-full">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {projects.map((p) => (
              <div
                key={p.id}
                className="shrink-0 w-full p-4 flex justify-center"
              >
                <div className="w-full flex justify-center">
                  <ProjectCard project={p} />
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Arrows */}
        {length > 1 && (
          <>
            <button
              aria-label="Previous"
              onClick={() => {
                stopTimer();
                goPrev();
              }}
              className="absolute top-1/2 -translate-y-1/2 z-50 flex items-center justify-center w-9 h-9 md:w-12 md:h-12 bg-black/60 md:bg-black/40 rounded-full p-2 md:p-3 text-lg font-bold md:text-2xl text-[#ffde59] hover:bg-black/80 left-3 md:-left-16"
            >
              ‹
            </button>

            <button
              aria-label="Next"
              onClick={() => {
                stopTimer();
                goNext();
              }}
              className="absolute top-1/2 -translate-y-1/2 z-50 flex items-center justify-center w-9 h-9 md:w-12 md:h-12 bg-black/60 md:bg-black/40 rounded-full p-2 md:p-3 text-lg font-bold md:text-2xl text-[#ffde59] hover:bg-black/80 right-3 md:-right-16"
            >
              ›
            </button>
          </>
        )}

        {/* Dots */}
        {length > 1 && (
          <div className="flex justify-center gap-2 mt-4">
            {projects.map((_, i) => (
              <button
                key={i}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => {
                  stopTimer();
                  setIndex(i);
                }}
                className={`w-3 h-3 rounded-full ${
                  i === index ? "bg-[#ffde59]" : "bg-gray-700"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
