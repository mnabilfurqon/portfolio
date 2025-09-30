import { useEffect, useState } from "react";
import GradientText from "../ui/GradientText";
import TextType from "../ui/TextType";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="home"
      className={`min-h-screen w-full flex items-center justify-center pt-16 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{
        background:
          "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
        minHeight: '100vh',
        width: '100%'
      }}
    >
      <div className={`max-w-4xl mx-auto p-8 text-center transition-all duration-1200 delay-300 ${
        isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95'
      }`}>
        <div className={`transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <GradientText
            colors={["#FF5EF7", "#02F5FF", "#FF5EF7", "#02F5FF", "#FF5EF7"]}
            animationSpeed={3}
            showBorder={false}
            className="text-3xl md:text-4xl font-bold text-white mb-6"
          >
            WELCOME TO MY PORTFOLIO
          </GradientText>
        </div>
        <div className={`transition-all duration-1000 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <TextType
            text={[
              "Frontend Developer",
              "Backend Developer",
              "Fullstack Developer",
            ]}
            typingSpeed={75}
            pauseDuration={1500}
            className="text-2xl md:text-3xl text-gray-300 mb-8"
          />
        </div>
        <div className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-900 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <button
            className="text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer"
            style={{
              background: "linear-gradient(45deg, #FF5EF7, #02F5FF)",
              color: "white",
              border: "none",
              boxShadow: "0 4px 15px rgba(255, 94, 247, 0.3)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow =
                "0 0 25px rgba(255, 94, 247, 0.5), 0 0 50px rgba(2, 245, 255, 0.3)";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow =
                "0 4px 15px rgba(255, 94, 247, 0.3)";
              e.currentTarget.style.transform = "translateY(0px)";
            }}
            onClick={() => {
              const projectsSection = document.getElementById("projects");
              if (projectsSection) {
                projectsSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            View Projects
          </button>
            <button
            className="text-gray-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl border-2 cursor-pointer"
            style={{
              backgroundColor: "rgba(255,255,255,0.9)",
              borderColor: "#02F5FF",
              boxShadow: "0 8px 32px rgba(2, 245, 255, 0.2)",
              transition: "background 0.3s, box-shadow 0.3s",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background =
              "linear-gradient(90deg, #02F5FF 0%, #FF5EF7 100%)";
              e.currentTarget.style.boxShadow =
              "0 0 25px rgba(2, 245, 255, 0.3), 0 0 50px rgba(255, 94, 247, 0.2)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = "rgba(255,255,255,0.9)";
              e.currentTarget.style.boxShadow =
              "0 8px 32px rgba(2, 245, 255, 0.2)";
            }}
            onClick={() => {
              const cvPath = "/assets/CV_M-Nabil-Furqon.pdf";
              const link = document.createElement("a");
              link.href = cvPath;
              link.download = "CV_M-Nabil-Furqon.pdf";
              link.target = "_blank";

              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            }}
            >
            Download CV
            </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
