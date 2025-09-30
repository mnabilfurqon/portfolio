import { useEffect, useState, useRef } from "react";
import SocialMedia from "../ui/SocialMedia";

const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  const validateEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let valid = true;
    const newErrors = { name: "", email: "", message: "" };

    if (!form.name.trim()) {
      newErrors.name = "Name is required";
      valid = false;
    }
    if (!form.email.trim()) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!validateEmail(form.email)) {
      newErrors.email = "Invalid email format";
      valid = false;
    }
    if (!form.message.trim()) {
      newErrors.message = "Message is required";
      valid = false;
    }
    setErrors(newErrors);

    if (valid) {
      import("emailjs-com").then(emailjs => {
      emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
        from_name: form.name,
        from_email: form.email,
        message: form.message,
        name: form.name,
        email: form.email,
        },
        import.meta.env.VITE_EMAILJS_USER_ID
      ).then(() => {
        setForm({ name: "", email: "", message: "" });
        alert("Message sent successfully!");
      }).catch(() => {
        alert("Failed to send message. Please try again.");
      });
      });
    }
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className={`min-h-screen flex items-center justify-center py-20 pt-16 transition-all duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      style={{
        background:
          "linear-gradient(135deg, #0f3460 0%, #16213e 50%, #1a1a2e 100%)",
      }}
    >
      <div className="max-w-4xl mx-auto p-8">
        <div
          className={`text-center mb-16 transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-5xl font-bold text-white mb-6">Contact Me</h2>
          <div
            className="w-24 h-1 mx-auto mb-8"
            style={{
              background: "linear-gradient(90deg, #FF5EF7 0%, #02F5FF 100%)",
            }}
          ></div>
          <p className="text-xl text-gray-300">
            Feel free to reach out for collaborations or just a friendly hello!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-26">
          <div
            className={`space-y-8 lg:col-span-2 transition-all duration-1000 delay-400 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-8"
            }`}
          >
            <h3
              className="text-2xl font-bold text-white mb-6"
              style={{ color: "#02F5FF" }}
            >
              Get In Touch
            </h3>

            <div className="space-y-6">
              {[
                {
                  icon: "📧",
                  label: "Email",
                  value: "mnabilfurqon71@gmail.com",
                },
                { icon: "📱", label: "Phone", value: "+6282117988226" },
                { icon: "📍", label: "Location", value: "Cianjur, Jawa Barat" },
              ].map((contact, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-xl border"
                    style={{
                      backgroundColor: "rgba(255, 94, 247, 0.1)",
                      borderColor: "#FF5EF7",
                    }}
                  >
                    {contact.icon}
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">{contact.label}</p>
                    <p className="text-white font-medium">{contact.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16">
              <h4
                className="text-2xl font-semibold text-white"
                style={{ color: "#FF5EF7" }}
              >
                Follow Me
              </h4>
              <div className="flex justify-center lg:justify-start">
                <SocialMedia />
              </div>
            </div>
          </div>

          <div
            className={`rounded-2xl p-8 lg:p-12 backdrop-blur-lg border min-h-[500px] w-full lg:col-span-3 transition-all duration-1000 delay-600 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-8"
            }`}
            style={{
              backgroundColor: "rgba(255,255,255,0.03)",
              borderColor: "rgba(255,255,255,0.1)",
              boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
            }}
          >
            <h3
              className="text-2xl font-bold text-white mb-6"
              style={{ color: "#02F5FF" }}
            >
              Send Message
            </h3>
            <form className="space-y-6" onSubmit={handleSubmit} noValidate>
              <div>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-lg text-white placeholder-gray-400 border focus:outline-none transition-all duration-300"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.05)",
                    borderColor: errors.name
                      ? "#FF5EF7"
                      : "rgba(255,255,255,0.2)",
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = "#FF5EF7";
                    e.target.style.boxShadow =
                      "0 0 0 2px rgba(255, 94, 247, 0.2)";
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = errors.name
                      ? "#FF5EF7"
                      : "rgba(255,255,255,0.2)";
                    e.target.style.boxShadow = "none";
                  }}
                />
                {errors.name && (
                  <p className="text-pink-400 text-xs mt-1">{errors.name}</p>
                )}
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className="w-full px-4 py-3 rounded-lg text-white placeholder-gray-400 border focus:outline-none transition-all duration-300"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.05)",
                    borderColor: errors.email
                      ? "#FF5EF7"
                      : "rgba(255,255,255,0.2)",
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = "#02F5FF";
                    e.target.style.boxShadow =
                      "0 0 0 2px rgba(2, 245, 255, 0.2)";
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = errors.email
                      ? "#FF5EF7"
                      : "rgba(255,255,255,0.2)";
                    e.target.style.boxShadow = "none";
                  }}
                />
                {errors.email && (
                  <p className="text-pink-400 text-xs mt-1">{errors.email}</p>
                )}
              </div>
              <div>
                <textarea
                  rows={5}
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  className="w-full px-4 py-3 rounded-lg text-white placeholder-gray-400 border focus:outline-none transition-all duration-300 resize-none"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.05)",
                    borderColor: errors.message
                      ? "#FF5EF7"
                      : "rgba(255,255,255,0.2)",
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = "#FF5EF7";
                    e.target.style.boxShadow =
                      "0 0 0 2px rgba(255, 94, 247, 0.2)";
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = errors.message
                      ? "#FF5EF7"
                      : "rgba(255,255,255,0.2)";
                    e.target.style.boxShadow = "none";
                  }}
                />
                {errors.message && (
                  <p className="text-pink-400 text-xs mt-1">{errors.message}</p>
                )}
              </div>
              <button
                type="submit"
                className="w-full py-3 rounded-lg font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer"
                style={{
                  background:
                    "linear-gradient(135deg, #FF5EF7 0%, #02F5FF 100%)",
                  boxShadow: "0 8px 32px rgba(255, 94, 247, 0.3)",
                }}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
