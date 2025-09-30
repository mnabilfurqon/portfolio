import { useEffect, useState, useRef } from "react";
import TrueFocus from "../ui/TrueFocus";
import ProfileCard from "../ui/ProfileCard";
import { techLogos } from "../data/TechLogos";

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className={`min-h-screen flex items-center justify-center py-20 pt-16 transition-all duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      style={{
        background:
          "linear-gradient(135deg, #0f3460 0%, #16213e 50%, #1a1a2e 100%)",
        willChange: "opacity, transform",
      }}
    >
      <div className="max-w-6xl mx-auto p-4 md:p-8">
        <div
          className={`text-center mb-8 md:mb-16 transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ willChange: "opacity, transform" }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6">
            About Me
          </h2>
          <div
            className="w-16 md:w-20 lg:w-24 h-1 mx-auto mb-4 md:mb-8"
            style={{
              background: "linear-gradient(90deg, #FF5EF7 0%, #02F5FF 100%)",
            }}
          ></div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 md:gap-12 items-center lg:items-start">
          <div
            className={`flex-shrink-0 flex justify-center transition-all duration-1000 delay-400 ${
              isVisible
                ? "opacity-100 translate-x-0 scale-100"
                : "opacity-0 -translate-x-8 scale-95"
            }`}
            style={{ willChange: "opacity, transform" }}
          >
            <ProfileCard />
          </div>

          <div
            className={`flex-1 text-white space-y-4 md:space-y-6 transition-all duration-1000 delay-600 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-8"
            }`}
            style={{ willChange: "opacity, transform" }}
          >
            <div className="flex items-start justify-center lg:justify-start">
              <TrueFocus
                sentence="Hi! Saya M Nabil Furqon"
                manualMode={false}
                blurAmount={5}
                borderColor="#FF5EF7"
                animationDuration={1.5}
                pauseBetweenAnimations={0.5}
                textSize="text-xl md:text-2xl"
                textColor="#02F5FF"
                focusBoxSize={3}
              />
            </div>

            <p className="text-sm md:text-base lg:text-lg text-justify text-gray-300 leading-relaxed px-2 md:px-0">
              👋 Saya seorang <b>fresh graduate</b> dari{" "}
              <b>Universitas Pendidikan Indonesia</b> dengan gelar{" "}
              <b>Sarjana Komputer</b> di bidang <b>Rekayasa Perangkat Lunak</b>.
              Saya mulai masuk ke dunia <b>pengembangan web</b> pada tahun{" "}
              <b>2023</b> dan sejak itu telah mengembangkan berbagai{" "}
              <b>proyek web</b> menggunakan teknologi seperti <b>HTML</b>,{" "}
              <b>CSS</b>, <b>JavaScript</b>, <b>ReactJS</b> 🚀 serta beberapa
              library pendukung lainnya. Salah satu alasan saya menyukai{" "}
              <b>pengembangan web</b> adalah karena saya dapat melihat hasil
              kerja saya secara langsung di browser 💻, yang memberikan{" "}
              <b>kepuasan tersendiri</b>. Saat ini saya sedang belajar lebih
              dalam tentang <b>Backend Development</b>
              📊untuk memperluas kemampuan saya, karena capaian saya adalah
              menjadi seorang <b>Full Stack Developer</b> yang <b>kompeten</b>{" "}
              ⭐.
            </p>

            <div className="mt-6 md:mt-8">
              <h4
                className="text-lg md:text-xl font-semibold mb-4 md:mb-6 text-center"
                style={{ color: "#02F5FF" }}
              >
                Skills & Technologies
              </h4>

              <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-6 md:mb-8 px-2">
                {[
                  "React.js",
                  "TypeScript",
                  "Next.js",
                  "Laravel",
                  "Node.js",
                  "Express.js",
                  "TailwindCSS",
                  "Ant Design",
                  "MySQL",
                ].map((skill, index) => (
                  <span
                    key={skill}
                    className="px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-medium border transition-all duration-300 hover:scale-105"
                    style={{
                      backgroundColor:
                        index % 2 === 0
                          ? "rgba(255, 94, 247, 0.15)"
                          : "rgba(2, 245, 255, 0.15)",
                      borderColor: index % 2 === 0 ? "#FF5EF7" : "#02F5FF",
                      color: index % 2 === 0 ? "#FF5EF7" : "#02F5FF",
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap justify-center items-center gap-3 md:gap-4 py-2 md:py-4 px-2">
                {techLogos.map((logo, index) => (
                  <a
                    key={index}
                    href={logo.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-center transition-all duration-300"
                    title={logo.title}
                  >
                    <div className="text-2xl md:text-3xl p-2 md:p-3 rounded-xl transition-all duration-300 bg-gray-800/30 hover:bg-gray-700/40 border border-gray-700/50 hover:border-gray-600/60">
                      {logo.node}
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
