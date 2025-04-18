"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function GetStarted() {
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

    const section = document.getElementById("get-started-section");
    if (section) observer.observe(section);

    return () => {
      if (section) observer.disconnect();
    };
  }, []);

  const steps = [
    {
      icon: "/bank.png",
      title: "First of all create an account",
      description:
        "Create an account using your email address or social media profile. Quick and straightforward registration process.",
    },
    {
      icon: "/locate.png",
      title: "Track Transactions in Real-Time",
      description:
        "Monitor the status of your transactions with instant updates and notifications.",
    },
    {
      icon: "/support.png",
      title: "Access 24/7 Customer Support",
      description:
        "Get assistance anytime with our dedicated support team ready to help with any issues or questions.",
    },
  ];

  return (
    <div id="get-started-section" className="w-full bg-white py-12 md:py-16">
      <div className="flex flex-col lg:flex-row items-center w-[90%] lg:w-[80%] mx-auto">
        <section className="py-8 md:py-16 bg-white flex-1 order-2 lg:order-1">
          <div className="container mx-auto px-4 max-w-6xl">
            <div
              className={`max-w-xl mb-12 transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Let&apos;s Start Sending Your Money
              </h2>
              <p className="text-gray-600">
                By integrating advanced technologies, fintech reshapes the
                financial landscape, making it more user-friendly and adaptive
                to modern needs.
              </p>
            </div>
            <div className="space-y-8">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className={`flex transition-all duration-700 ${
                    isVisible
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 -translate-x-8"
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}>
                  <div className="mr-6">
                    <div className="w-16 h-16 bg-gray-100 rounded flex items-center justify-center transition-all duration-300 hover:bg-gray-200 hover:shadow-md group">
                      <Image
                        src={step.icon}
                        alt={step.title}
                        width={24}
                        height={24}
                        className="transition-transform duration-300 group-hover:scale-125"
                      />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 transition-colors duration-300 hover:text-[#5945FD]">
                      {step.title}
                    </h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <div
          className={`flex-1 order-1 lg:order-2 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
          }`}>
          <div className="transform transition-transform duration-500 hover:scale-105 hover:rotate-1">
            <Image
              src="/phone.png"
              alt="Mobile application showcase"
              width={576}
              height={983}
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}
