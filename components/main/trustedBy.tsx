"use client";
import { useState } from "react";
import Image from "next/image";

export default function TrustedBySection() {
  const [isHovered, setIsHovered] = useState(false);

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
    <div className="w-full py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 ">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Trusted by Over 5,500+ Industry Leaders
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center">
          {companiesTop.map((company, index) => (
            <div key={index} className="flex items-center justify-center">
              <Image
                src={company.src}
                alt={`${company.name} logo`}
                width={140}
                height={140}
                className="opacity-50 hover:opacity-70 transition-opacity duration-300"
              />
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center mx-auto w-[80%]">
          {companiesBelow.map((company, index) => (
            <div key={index} className="flex items-center justify-center">
              <Image
                src={company.src}
                alt={`${company.name} logo`}
                width={140}
                height={140}
                className="opacity-50 hover:opacity-70 transition-opacity duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
