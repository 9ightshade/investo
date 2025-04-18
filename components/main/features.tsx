"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Features() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredTransaction, setHoveredTransaction] = useState<number | null>(
    null
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    const section = document.getElementById("features-section");
    if (section) observer.observe(section);

    return () => {
      if (section) observer.disconnect();
    };
  }, []);

  const transactions = [
    {
      id: 1,
      name: "Amazon",
      category: "Online Shopping",
      amount: -150.0,
      logo: "/amazon.png",
    },
    {
      id: 2,
      name: "Uber",
      category: "Taxi Services",
      amount: -55.0,
      logo: "/uber.png",
    },
    {
      id: 3,
      name: "PayPal",
      category: "Money Transfer",
      amount: -320.0,
      logo: "/paypal.png",
    },
  ];

  const features = [
    "Track transfers with real-time notifications.",
    "Instant transactions, real-time updates.",
  ];

  return (
    <div id="features-section" className="w-full bg-white py-12 md:py-20">
      <div className="flex flex-col lg:flex-row items-center w-[90%] lg:w-[80%] mx-auto gap-8 justify-between">
        {/* left side showing transaction */}
        <div
          className={`bg-gray-100 p-4 md:p-6 flex-1 rounded-xl shadow-sm transition-all duration-700 ${
            isVisible
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-12"
          }`}>
          <div className="space-y-3">
            {transactions.map((transaction, index) => (
              <div
                key={transaction.id}
                className={`bg-white p-4 rounded-xl flex justify-between items-center transition-all duration-300 hover:shadow-md ${
                  hoveredTransaction === transaction.id
                    ? "transform scale-105"
                    : ""
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
                onMouseEnter={() => setHoveredTransaction(transaction.id)}
                onMouseLeave={() => setHoveredTransaction(null)}>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mr-4 transition-transform duration-300 hover:rotate-6">
                    <Image
                      src={transaction.logo}
                      alt={transaction.name}
                      width={52}
                      height={52}
                      className="object-contain p-1"
                    />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">{transaction.name}</h3>
                    <p className="text-gray-600 text-sm">
                      {transaction.category}
                    </p>
                  </div>
                </div>
                <div
                  className={`text-xl font-medium transition-colors duration-300 ${
                    transaction.amount < 0 ? "text-[#171717]" : "text-[#171717]"
                  }`}>
                  ${Math.abs(transaction.amount).toFixed(2)}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* right side  */}
        <section className="py-8 md:py-16 bg-white flex-1">
          <div className="container mx-auto px-4 max-w-6xl">
            <div
              className={`max-w-xl transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-12"
              }`}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight transition-colors duration-300 hover:text-[#5945FD]">
                Transforming Transactions, One Click at a Time.
              </h2>
              <p className="text-gray-600 mb-8">
                Our service is designed to connect the world, offering reliable
                and accessible financial solutions to everyone, everywhere.
              </p>
              <div className="space-y-4 mb-8">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className={`flex items-center transition-all duration-500 ${
                      isVisible
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 translate-x-4"
                    }`}
                    style={{ transitionDelay: `${(index + 3) * 100}ms` }}>
                    <div className="mr-3 flex-shrink-0 bg-gray-100 rounded-full p-1 transition-all duration-300 hover:bg-[#D1F701] group">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-gray-900 transition-transform duration-300 group-hover:scale-110"
                        viewBox="0 0 20 20"
                        fill="currentColor">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
              <a
                href="#"
                className="inline-block bg-gray-900 text-white font-medium py-3 px-8 rounded-full transition-all duration-300 hover:bg-[#5945FD] hover:shadow-lg hover:shadow-[#5945FD]/20 hover:-translate-y-1 active:translate-y-0">
                Get Started
              </a>
            </div>
            <div className="border-b border-gray-200 mt-16 transition-all duration-300 hover:border-[#D1F701]"></div>
          </div>
        </section>
      </div>
    </div>
  );
}
