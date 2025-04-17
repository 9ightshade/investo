import Image from "next/image";
import React from "react";

export default function AppDownloadSection() {
  return (
    <section
      className="bg-white py-16"
     >
      <div className="container mx-auto px-4">
        <div className="bg-[#171717] relative overflow-hidden rounded-3xl py-16 px-6 text-center max-w-6xl mx-auto"
         style={{
          backgroundImage: "url('/ctabg.png')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
        >
          {/* Grid overlay - using pseudo-element with custom styling */}
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `
              linear-gradient(rgba(255, 255, 255, 0.1) 2px, transparent 2px),
              linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 2px)
            `,
              backgroundSize: "40px 40px",
            }}></div>

          {/* Vignette/gradient overlay */}
          <div
            className="absolute inset-0 opacity-70"
            style={{
              background:
                "radial-gradient(circle at center, transparent 0%, rgba(0, 0, 0, 0.5) 100%)",
            }}></div>

          {/* Light highlight in corner */}
          <div
            className="absolute top-0 left-0 w-full h-full opacity-10"
            style={{
              background:
                "radial-gradient(circle at 25% 25%, rgba(255, 255, 255, 0.3) 0%, transparent 60%)",
            }}></div>

          <div className="max-w-3xl mx-auto">
            <h2 className="text-white text-4xl sm:text-5xl font-bold mb-6">
              Download Our App Free and Enjoy Exclusive Features!
            </h2>

            <p className="text-gray-300 mb-10 text-lg">
              Enjoy seamless navigation, exclusive content, and personalized
              experiences right at your fingertips. Don&apos;t miss out on this
              opportunity to enhance your daily routine with our user-friendly,
              free mobile app.
            </p>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              {/* Google Play Store Button */}
              <button className="bg-white text-black flex items-center cursor-pointer justify-center rounded-full py-3 px-6 w-64">
                <div className="mr-3">
                  <Image
                    src="/googleplay.png"
                    alt="google play"
                    width={30}
                    height={30}
                  />
                </div>
                <div className="text-left">
                  <div className="text-xs">GET IT ON</div>
                  <div className="text-lg font-semibold">Google Play</div>
                </div>
              </button>

              {/* Apple App Store Button */}
              <button className="bg-white text-black flex items-center justify-center cursor-pointer rounded-full py-3 px-6 w-64">
                <div className="mr-3">
                  <Image
                    src="/applestore.png"
                    alt="apple store"
                    width={30}
                    height={30}
                  />
                </div>
                <div className="text-left">
                  <div className="text-xs">Download on the</div>
                  <div className="text-lg font-semibold">App Store</div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
