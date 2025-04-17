"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function TrustedBySection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById("trusted-section");
    if (section) observer.observe(section);

    return () => {
      if (section) observer.disconnect();
    };
  }, []);

  const companiesTop = [
    { name: "Google", src: "/google.png" },
    { name: "Siemens", src: "/siemens.png" },
    { name: "Microsoft", src: "/microsoft.png" },
    { name: "Slack", src: "/slack.png" },
    { name: "Tesla", src: "/telsa.png" },
  ];
  const companiesBelow = [
    { name: "Walmart", src: "/walmart.png" },
    { name: "Adobe", src: "/adobe.png" },
    { name: "Framer", src: "/framer.png" },
    { name: "OpenAI", src: "/openai.png" },
  ];

  return (
    <div
      id="trusted-section"
      className="w-full py-16 bg-white relative overflow-hidden">
      {/* Subtle background effect */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-gray-50 to-transparent opacity-50"></div>

      <div className="max-w-6xl mx-auto px-4 relative">
        <h2
          className={`text-3xl font-bold text-center text-gray-800 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-6"
          }`}>
          Trusted by Over <span className="">5,500+</span> Industry Leaders
        </h2>

        {/* First row of logos */}
        <div
          className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center transition-all duration-700 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}>
          {companiesTop.map((company, index) => (
            <div
              key={index}
              className="flex items-center justify-center transition-all duration-500"
              style={{
                transitionDelay: `${index * 100}ms`,
                transform: isVisible ? "translateY(0)" : "translateY(20px)",
              }}>
              <div className=" rounded-lg transition-all duration-300 transform hover:scale-110">
                <Image
                  src={company.src}
                  alt={`${company.name} logo`}
                  width={140}
                  height={140}
                  className="opacity-50 hover:opacity-100 transition-all duration-300 filter hover:drop-shadow-sm"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Second row of logos */}
        <div
          className={`grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 items-center justify-items-center mx-auto w-[80%] transition-all duration-700 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
          style={{ transitionDelay: "300ms" }}>
          {companiesBelow.map((company, index) => (
            <div
              key={index}
              className="flex items-center justify-center transition-all duration-500"
              style={{
                transitionDelay: `${(index + 5) * 100}ms`,
                transform: isVisible ? "translateY(0)" : "translateY(20px)",
              }}>
              <div className=" rounded-lg transition-all duration-300 transform hover:scale-110 ">
                <Image
                  src={company.src}
                  alt={`${company.name} logo`}
                  width={140}
                  height={140}
                  className="opacity-50 hover:opacity-100 transition-all duration-300 filter hover:drop-shadow-sm"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
