import React, { useState, useEffect } from "react";

export default function ProjectCard({ project }) {
  const image =
    project.images && project.images.length ? project.images[0] : null;
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    let t;
    if (showToast) {
      t = setTimeout(() => setShowToast(false), 3000);
    }
    return () => clearTimeout(t);
  }, [showToast]);

  return (
    <>
      <article className="w-full max-w-[320px] mx-auto md:max-w-none bg-[#0b0b0b] border border-[#ffde59] rounded-2xl p-4 md:p-6 shadow-xl text-gray-200">
        <div className="flex flex-col md:flex-row-reverse md:items-center gap-4 md:gap-6">
          {/* Image / Preview */}
          <div className="w-full md:w-1/2">
            <div className="bg-linear-to-b from-[#ffde59]/5 to-transparent rounded-lg p-2 md:p-3 flex items-center justify-center">
              {image ? (
                <img
                  src={image}
                  alt={project.title}
                  className="w-full h-28 md:h-40 lg:h-48 object-contain rounded-md border border-[#ffde59] bg-black"
                />
              ) : (
                <div className="w-full h-28 md:h-40 lg:h-48 rounded-md bg-gray-800 flex items-center justify-center text-gray-500">
                  No preview
                </div>
              )}
            </div>
          </div>

          {/* Details */}
          <div className="w-full md:w-1/2">
            <h3 className="text-xl md:text-2xl font-extrabold text-[#ffde59] mb-1 md:mb-2">
              {project.title}
            </h3>
            <p className="text-xs md:text-sm text-gray-300 mb-2 md:mb-3">
              {project.shortDescription}
            </p>

            <div className="flex flex-wrap gap-2 mb-2 md:mb-3">
              {(project.techStack || []).slice(0, 5).map((t) => (
                <span
                  key={t}
                  className="text-[10px] md:text-xs bg-[#ffde59]/20 text-[#ffde59] px-2 py-1 rounded-md"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="text-[11px] md:text-xs text-gray-400 mb-3">
              Role: {project.role}
            </div>

            <div className="flex gap-2 md:gap-3">
              <a
                href={project.githubUrl || "#"}
                target="_blank"
                rel="noreferrer"
                className="inline-block px-3 py-2 rounded-full text-xs md:text-sm transition-colors duration-200 border-2 border-[#ffde59] bg-[#ffde59] text-black hover:bg-black hover:text-[#ffde59]"
              >
                View on GitHub
              </a>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
