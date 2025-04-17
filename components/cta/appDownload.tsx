import Image from "next/image";
import React from "react";

export default function AppDownloadSection() {
  return (
    <section className="bg-gray-100 py-16" 
    style={{
        backgroundImage:"url('/ctabg.png')",
        backgroundRepeat:"no-repeat",
        backgroundPosition:"center"
    }}
    
    >
      <div className="container mx-auto px-4">
        <div className="bg-gray-900 rounded-3xl py-16 px-6 text-center max-w-6xl mx-auto">
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
              <a
                href="#"
                className="bg-white text-black flex items-center justify-center rounded-full py-3 px-6 w-64">
                <div className="mr-3">
                 <Image src="/googleplay.png" alt="google play" width={30} height={30} />
                </div>
                <div className="text-left">
                  <div className="text-xs">GET IT ON</div>
                  <div className="text-lg font-semibold">Google Play</div>
                </div>
              </a>

              {/* Apple App Store Button */}
              <a
                href="#"
                className="bg-white text-black flex items-center justify-center rounded-full py-3 px-6 w-64">
                <div className="mr-3">
                 <Image src="/applestore.png" alt="apple store" width={30} height={30} />
                </div>
                <div className="text-left">
                  <div className="text-xs">Download on the</div>
                  <div className="text-lg font-semibold">App Store</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
