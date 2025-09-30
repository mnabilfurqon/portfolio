import { useState, useEffect, useRef } from "react";
import { projectImages } from "../data/ProjectImages";

const ProjectsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showOverlay, setShowOverlay] = useState(true);
  const [modalImage, setModalImage] = useState<string | null>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null); // NEW
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setTimeout(() => setShowOverlay(false), 900);
        }
      },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setShowOverlay(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const isTouchDevice =
    typeof window !== "undefined" &&
    ("ontouchstart" in window || navigator.maxTouchPoints > 0);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative min-h-screen py-16 overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg,#1a1a2e 0%,#16213e 50%,#0f3460 100%)",
      }}
    >
      {showOverlay && (
        <div
          className={`absolute inset-0 bg-white transition-all duration-[1400ms] ease-[cubic-bezier(0.77,0,0.175,1)] ${
            isVisible ? "opacity-0 scale-105" : "opacity-100 scale-100"
          }`}
          style={{ zIndex: 20 }}
        />
      )}

      <div className="relative max-w-6xl mx-auto p-4 md:p-8 z-10">
        <div
          className={`text-center mb-12 transform transition-all duration-[1200ms] ease-[cubic-bezier(0.77,0,0.175,1)] ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            My Projects
          </h2>
          <div
            className="w-20 h-1 mx-auto mb-6"
            style={{
              background: "linear-gradient(90deg,#FF5EF7 0%,#02F5FF 100%)",
            }}
          />
          <p className="text-gray-300 text-base md:text-lg">
            These are some of the projects I have worked on!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12">
          {projectImages.map((project, index) => {
            const isActive = activeIndex === index;
            return (
              <div
                key={project.id}
                className={`relative rounded-3xl overflow-hidden group shadow-2xl transition-all duration-700 ease-out border-2 border-[#23234b] ${
                  isVisible
                    ? "opacity-100 translate-y-0 scale-100"
                    : "opacity-0 translate-y-10 scale-95"
                }`}
                style={{
                  transitionDelay: `${index * 120}ms`,
                  background: "linear-gradient(135deg,#23234b 0%,#1a1a2e 100%)",
                }}
                onMouseEnter={() => !isTouchDevice && setActiveIndex(index)}
                onMouseLeave={() => !isTouchDevice && setActiveIndex(null)}
                onClick={() => {
                  if (isTouchDevice) {
                    setActiveIndex(isActive ? null : index);
                  }
                }}
              >
                <div className="w-full h-72 md:h-80 flex items-center justify-center bg-[#18182f] relative">
                  <img
                    src={project.src}
                    alt={project.alt}
                    className={`w-full h-full object-cover rounded-2xl transition-transform duration-700 ${
                      isActive ? "scale-105 blur-sm md:blur-md" : ""
                    }`}
                    loading="lazy"
                    style={{
                      boxShadow: "0 8px 32px 0 rgba(2,245,255,0.18)",
                    }}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src =
                        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial' font-size='14' fill='%236b7280'%3EImage not found%3C/text%3E%3C/svg%3E";
                    }}
                  />
                  <button
                    className={`absolute bottom-3 right-3 bg-gradient-to-r from-[#FF5EF7] to-[#02F5FF] text-white px-3 py-1 rounded-full shadow-lg text-xs font-semibold transition ${
                      isActive ? "hover:scale-105 z-30" : "z-30"
                    }`}
                    onClick={(e) => {
                      e.stopPropagation();
                      setModalImage(project.src);
                    }}
                    type="button"
                  >
                    View Full Image
                  </button>
                </div>
                {/* Overlay hanya muncul jika isActive */}
                <div
                  className={`absolute inset-0 flex flex-col justify-center items-center bg-gradient-to-br from-[#18182f]/80 via-[#23234b]/70 to-[#0f3460]/60 transition-opacity duration-700 p-6 ${
                    isActive
                      ? "opacity-100 backdrop-blur-lg md:backdrop-blur-2xl"
                      : "opacity-0 pointer-events-none"
                  }`}
                >
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2 drop-shadow-lg text-center">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4 text-sm md:text-base text-center line-clamp-3">
                    {project.desc}
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-[#FF5EF7]/80 to-[#02F5FF]/80 text-white shadow border border-white/40"
                        style={{
                          fontWeight: 700,
                          letterSpacing: "0.03em",
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  {isTouchDevice && (
                    <button
                      className="absolute bottom-3 left-3 bg-gradient-to-r from-[#FF5EF7] to-[#02F5FF] text-white px-3 py-1 rounded-full shadow-lg text-xs font-semibold transition z-30"
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveIndex(null);
                      }}
                      type="button"
                    >
                      Close
                    </button>
                  )}
                </div>
                <div className="absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-br from-[#FF5EF7]/50 to-[#02F5FF]/50 rounded-full blur-2xl opacity-80 pointer-events-none" />
                <div className="absolute -bottom-8 -left-8 w-20 h-20 bg-gradient-to-tr from-[#02F5FF]/40 to-[#FF5EF7]/40 rounded-full blur-2xl opacity-70 pointer-events-none" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-radial from-[#FF5EF7]/10 to-transparent rounded-full blur-3xl opacity-40 pointer-events-none" />
                <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-[#FF5EF7] transition-all duration-700 pointer-events-none" />
              </div>
            );
          })}
        </div>
        {modalImage && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
            onClick={() => setModalImage(null)}
          >
            <div
              className="relative bg-[#18182f] rounded-2xl p-4 shadow-2xl max-w-3xl w-full flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={modalImage}
                alt="Full Project"
                className="max-h-[70vh] w-auto rounded-xl mb-4"
                style={{ boxShadow: "0 8px 32px 0 rgba(2,245,255,0.18)" }}
              />
              <button
                className="absolute top-3 right-3 bg-gradient-to-r from-[#FF5EF7] to-[#02F5FF] text-white px-3 py-1 rounded-full shadow-lg text-xs font-semibold"
                onClick={() => setModalImage(null)}
                type="button"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
