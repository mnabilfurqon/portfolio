import { useEffect, useRef, useState } from "react";
import { navLinks } from "../data/NavLinks";

const Navbar: React.FC = () => {
  const [activeItem, setActiveItem] = useState<string>("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const sectionsRef = useRef<HTMLElement[]>([]);
  const ioRef = useRef<IntersectionObserver | null>(null);
  const isScrollingProgrammatically = useRef(false);

  useEffect(() => {
    const getSections = () => {
      return navLinks
        .map((link) => document.getElementById(link.id))
        .filter(Boolean) as HTMLElement[];
    };

    const initObservers = () => {
      const sections = getSections();
      if (sections.length === 0) {
        setTimeout(initObservers, 100);
        return;
      }
      sectionsRef.current = sections;
      if (ioRef.current) {
        ioRef.current.disconnect();
      }

      const observer = new IntersectionObserver(
        (entries) => {
          if (isScrollingProgrammatically.current) return;
          const intersectingSections = entries
            .filter((entry) => entry.isIntersecting)
            .map((entry) => ({
              id: (entry.target as HTMLElement).id,
              ratio: entry.intersectionRatio,
              boundingRect: entry.boundingClientRect,
              rootBounds: entry.rootBounds,
            }));
          if (intersectingSections.length === 0) return;

          let activeSection = "home";

          const isMobile = window.innerWidth < 768;

          if (isMobile) {
            const sectionWithMostArea = intersectingSections.reduce(
              (prev, current) => {
                const prevArea = prev.ratio * (prev.boundingRect.height || 0);
                const currentArea =
                  current.ratio * (current.boundingRect.height || 0);
                return currentArea > prevArea ? current : prev;
              }
            );
            activeSection = sectionWithMostArea.id;
          } else {
            const topMostSection = intersectingSections.reduce(
              (prev, current) => {
                return Math.abs(current.boundingRect.top) <
                  Math.abs(prev.boundingRect.top)
                  ? current
                  : prev;
              }
            );
            activeSection = topMostSection.id;
          }
          if (activeSection === "home") {
            const scrollY = window.pageYOffset;
            const homeElement = document.getElementById("home");
            const aboutElement = document.getElementById("about");
            if (homeElement && aboutElement) {
              const homeBottom =
                homeElement.offsetTop + homeElement.offsetHeight;
              const aboutTop = aboutElement.offsetTop;
              if (scrollY > homeBottom - 100 || scrollY > aboutTop - 200) {
                activeSection = "about";
              }
            }
          }
          setActiveItem(activeSection);
        },
        {
          root: null,
          rootMargin:
            window.innerWidth < 768 ? "-10% 0px -60% 0px" : "-20% 0px -60% 0px",
          threshold: [0, 0.1, 0.25, 0.5, 0.75, 1.0],
        }
      );
      sections.forEach((section) => observer.observe(section));
      ioRef.current = observer;
    };
    const timer = setTimeout(initObservers, 100);

    const handleScroll = () => {
      if (isScrollingProgrammatically.current) return;
      const isMobile = window.innerWidth < 768;
      if (!isMobile) return;
      const scrollY = window.pageYOffset;
      const sections = getSections();
      let currentActive = "home";
      for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        const sectionTop = section.offsetTop - 50;
        if (scrollY >= sectionTop) {
          currentActive = section.id;
        } else {
          break;
        }
      }
      if (currentActive !== activeItem) {
        setActiveItem(currentActive);
      }
    };
    let scrollTimeout: number;
    const throttledScroll = () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = window.setTimeout(handleScroll, 100);
    };
    window.addEventListener("scroll", throttledScroll, { passive: true });

    const mutationObserver = new MutationObserver(() => {
      const newSections = getSections();
      if (newSections.length !== sectionsRef.current.length) {
        initObservers();
      }
    });

    mutationObserver.observe(document.body, {
      subtree: true,
      childList: true,
    });

    const handleNavActiveItemChange = (e: Event) => {
      const customEvent = e as CustomEvent<string>;
      isScrollingProgrammatically.current = true;
      setActiveItem(customEvent.detail);

      setTimeout(() => {
        isScrollingProgrammatically.current = false;
      }, 1000);
    };
    window.addEventListener("navActiveItemChange", handleNavActiveItemChange);

    return () => {
      clearTimeout(timer);
      clearTimeout(scrollTimeout);
      if (ioRef.current) {
        ioRef.current.disconnect();
      }
      mutationObserver.disconnect();
      window.removeEventListener("scroll", throttledScroll);
      window.removeEventListener(
        "navActiveItemChange",
        handleNavActiveItemChange
      );
    };
  }, [activeItem]);

  const handleNavClick = (id: string) => {
    setIsMobileMenuOpen(false);
    setActiveItem(id);
    isScrollingProgrammatically.current = true;

    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      setTimeout(() => {
        isScrollingProgrammatically.current = false;
      }, 1000);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg border-b border-gray-800">
      <div
        className="absolute inset-0"
        style={{
          backgroundColor: "rgba(26, 26, 46, 0.9)",
          pointerEvents: "none",
        }}
      />
      <div
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        style={{ pointerEvents: "auto" }}
      >
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <button
              onClick={() => handleNavClick("home")}
              className="text-xl lg:text-2xl font-bold italic focus:outline-none"
              type="button"
            >
              <span
                style={{
                  background: "linear-gradient(135deg,#FF5EF7 0%,#02F5FF 100%)",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                  marginRight: 5,
                }}
              >
                M
              </span>
              <span
                style={{
                  background: "linear-gradient(135deg,#FF5EF7 0%,#02F5FF 100%)",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                }}
              >
                Nabil Furqon
              </span>
            </button>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  type="button"
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 focus:outline-none cursor-pointer ${
                    activeItem === item.id
                      ? "text-white"
                      : "text-gray-400 hover:text-white"
                  }`}
                  style={{
                    background:
                      activeItem === item.id
                        ? "linear-gradient(135deg, rgba(255,94,247,0.3) 0%, rgba(2,245,255,0.3) 100%)"
                        : "transparent",
                    border:
                      activeItem === item.id
                        ? "1px solid #FF5EF7"
                        : "1px solid transparent",
                    boxShadow:
                      activeItem === item.id
                        ? "0 4px 16px rgba(255,94,247,0.3)"
                        : "none",
                  }}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              type="button"
              className="p-2 rounded-lg text-gray-400 hover:text-white transition-colors border focus:outline-none"
              style={{
                backgroundColor: "rgba(255,255,255,0.05)",
                borderColor: "rgba(255,255,255,0.2)",
              }}
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div
              className="px-2 pt-2 pb-3 space-y-1 rounded-lg mt-2 border"
              style={{
                backgroundColor: "rgba(26,26,46,0.95)",
                backdropFilter: "blur(10px)",
                borderColor: "rgba(255,255,255,0.1)",
              }}
            >
              {navLinks.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  type="button"
                  className={`block w-full text-left px-3 py-2 rounded-lg text-base font-medium transition-all duration-300 focus:outline-none ${
                    activeItem === item.id
                      ? "text-white"
                      : "text-gray-400 hover:text-white"
                  }`}
                  style={{
                    background:
                      activeItem === item.id
                        ? "linear-gradient(135deg, rgba(255,94,247,0.3) 0%, rgba(2,245,255,0.3) 100%)"
                        : "transparent",
                  }}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
