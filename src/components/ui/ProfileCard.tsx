const ProfileCard = () => (
    <div className="relative w-72 md:w-80">
      <div
        className="relative bg-gradient-to-br from-gray-900/95 to-gray-800/95 backdrop-blur-sm rounded-2xl p-6 border transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl group"
        style={{
          background:
            "linear-gradient(135deg, rgba(15, 52, 96, 0.95) 0%, rgba(22, 33, 62, 0.95) 50%, rgba(26, 26, 46, 0.95) 100%)",
          borderColor: "rgba(255, 94, 247, 0.2)",
          boxShadow:
            "0 8px 32px rgba(255, 94, 247, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.05)",
        }}
      >
        <div className="flex justify-center mb-6">
          <div className="flex flex-col items-center">
            <div
              className="relative rounded-full p-1 mb-4 group-hover:scale-105 transition-all duration-300"
              style={{
                background: "linear-gradient(45deg, #FF5EF7, #02F5FF)",
                padding: "3px",
                boxShadow: "0 0 20px rgba(255, 94, 247, 0.3)",
              }}
            >
              <div className="bg-gray-900 rounded-full p-1">
                <img
                  src="/images/profile-photo.png"
                  alt="M Nabil Furqon"
                  width="120"
                  height="120"
                  className="rounded-full object-cover transition-all duration-300 group-hover:brightness-110"
                  style={{ width: "120px", height: "120px" }}
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.src =
                      "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjEyMCIgdmlld0JveD0iMCAwIDEyMCAxMjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMjAiIGhlaWdodD0iMTIwIiBmaWxsPSIjMzc0MTUxIi8+CjxjaXJjbGUgY3g9IjYwIiBjeT0iNDAiIHI9IjE1IiBmaWxsPSIjOUNBM0FGIi8+CjxwYXRoIGQ9Ik0zMCA5MEM0MCA4MCA4MCA4MCA5MCA5MEw5MCA5MEgzMFoiIGZpbGw9IiM5Q0EzQUYiLz4KPC9zdmc+";
                  }}
                />
              </div>
            </div>
            <div
              className="w-32 h-2 rounded-full opacity-60 group-hover:opacity-80 transition-all duration-300"
              style={{
                background:
                  "linear-gradient(90deg, transparent 0%, #FF5EF7 30%, #02F5FF 70%, transparent 100%)",
                boxShadow: "0 0 10px rgba(255, 94, 247, 0.5)",
              }}
            ></div>
          </div>
        </div>

        <div className="text-center">
          <h3
            className="text-xl font-bold mb-2 group-hover:scale-105 transition-all duration-300"
            style={{
              background: "linear-gradient(135deg, #FF5EF7 0%, #02F5FF 100%)",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            M Nabil Furqon
          </h3>
          <p className="text-gray-300 mb-1 group-hover:text-gray-200 transition-colors duration-300">
            Web Developer
          </p>
          <div className="flex items-center justify-center gap-2 mb-6">
            <div
              className="w-2 h-2 rounded-full animate-pulse"
              style={{
                backgroundColor: "#02F5FF",
                boxShadow: "0 0 8px rgba(2, 245, 255, 0.6)",
              }}
            ></div>
            <span className="text-sm font-medium" style={{ color: "#02F5FF" }}>
              Available for work
            </span>
          </div>
          <button
            onClick={() => {
              const contactSection = document.getElementById("contact");
              if (contactSection) {
                contactSection.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }
            }}
            className="w-full py-3 px-6 rounded-lg font-medium transition-all duration-300 hover:scale-[1.02] hover:shadow-lg cursor-pointer relative overflow-hidden group/btn"
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
          >
            <span className="relative z-10">Contact Me</span>
            <div
              className="absolute inset-0 opacity-0 group-hover/btn:opacity-20 transition-opacity duration-300"
              style={{
                background:
                  "linear-gradient(45deg, rgba(255, 255, 255, 0.2), transparent)",
              }}
            ></div>
          </button>
        </div>
      </div>
    </div>
  );

export default ProfileCard