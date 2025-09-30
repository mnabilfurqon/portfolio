import { navLinks } from "../data/NavLinks";
import Quotes from "./Quotes";
import SocialMediaFooter from "./SocialMediaFooter";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleBackToTopClick = () => {
    const homeSection = document.getElementById("home");
    if (homeSection) {
      homeSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }

    window.dispatchEvent(
      new CustomEvent("navActiveItemChange", { detail: "home" })
    );
  };

  const handleQuickLinkClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
    window.dispatchEvent(
      new CustomEvent("navActiveItemChange", { detail: id })
    );
  };

  return (
    <footer
      className="py-12 border-t"
      style={{
        background:
          "linear-gradient(135deg, rgb(15, 52, 96) 0%, rgb(22, 33, 62) 50%, rgb(26, 26, 46) 100%)",
        borderColor: "rgba(255, 255, 255, 0.1)",
      }}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8 text-center md:text-left">
          <div className="md:col-span-2 lg:col-span-2">
            <div className="text-3xl font-bold mb-4 italic">
              <span
                style={{
                  background:
                    "linear-gradient(135deg, #FF5EF7 0%, #02F5FF 100%)",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                  marginRight: "5px",
                }}
              >
                M Nabil
              </span>
              <span
                style={{
                  background:
                    "linear-gradient(135deg, #FF5EF7 0%, #02F5FF 100%)",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                }}
              >
                Furqon
              </span>
            </div>
            <div className="flex justify-center md:justify-start">
              <p className="text-gray-300 text-justify mb-6 max-w-md">
                Terima kasih telah mengunjungi portfolio saya. Semoga karya dan
                pengalaman yang saya bagikan dapat memberikan inspirasi,
                manfaat, dan dapat memberikan wawasan baru. Jangan ragu untuk
                menghubungi saya jika ingin berdiskusi. Sampai jumpa 😊
              </p>
            </div>
            <div className="flex justify-center md:justify-start">
              <SocialMediaFooter />
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="flex flex-col lg:flex-row justify-between lg:justify-start items-center lg:items-start gap-8 lg:gap-16">
              <div className="flex flex-col items-center lg:items-start w-full lg:w-auto">
                <h3
                  className="text-lg font-semibold text-white mb-4"
                  style={{ color: "rgb(255, 94, 247)" }}
                >
                  Quotes
                </h3>
                <Quotes />
              </div>
              <div className="flex flex-col items-center lg:items-start w-full lg:w-auto">
                <h3
                  className="hidden md:block whitespace-nowrap text-lg font-semibold mb-4"
                  style={{ color: "rgb(2, 245, 255)" }}
                >
                  Quick Links
                </h3>
                <ul className="flex flex-wrap justify-center gap-4 md:flex-col md:gap-2 text-center md:text-left">
                  {navLinks.map((link) => (
                    <li key={link.label}>
                      <button
                        className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer"
                        onClick={() => handleQuickLinkClick(link.id)}
                      >
                        {link.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <button
          onClick={handleBackToTopClick}
          className="fixed bottom-8 right-8 w-12 h-12 rounded-full flex items-center justify-center text-white text-xl border-2 transition-all duration-300 hover:scale-110 z-[60] cursor-pointer"
          style={{
            background:
              "linear-gradient(135deg, rgb(255, 94, 247) 0%, rgb(2, 245, 255) 100%)",
            borderColor: "rgba(255, 255, 255, 0.2)",
            boxShadow: "0 8px 32px rgba(255, 94, 247, 0.3)",
          }}
          title="Back to Top"
        >
          ↑
        </button>

        <div
          className="h-px mb-8"
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, rgb(255, 94, 247) 50%, transparent 100%)",
          }}
        ></div>

        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 mb-4 md:mb-0">
            © {currentYear} Portfolio. Made by ❤️ M Nabil Furqon
          </div>

          <div className="flex items-center space-x-4">
            <span className="text-gray-400 text-sm">Built with:</span>
            <div className="flex space-x-2">
              {[
                { name: "React", color: "rgb(2, 245, 255)" },
                { name: "TypeScript", color: "rgb(255, 94, 247)" },
                { name: "Tailwind", color: "rgb(2, 245, 255)" },
              ].map((tech) => (
                <span
                  key={tech.name}
                  className="px-2 py-1 rounded text-xs font-medium border"
                  style={{
                    color: tech.color,
                    borderColor: tech.color,
                    backgroundColor: `${tech.color
                      .replace("rgb", "rgba")
                      .replace(")", ", 0.1)")}`,
                  }}
                >
                  {tech.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
