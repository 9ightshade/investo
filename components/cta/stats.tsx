import Image from "next/image";
import React from "react";

export default function StatsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Users Stat */}
          <div className="flex flex-col items-center md:items-start md:flex-row md:space-x-4">
            <div className="flex mb-4 md:mb-0">
              <Image
                src="/person1.png"
                alt="#"
                width={40}
                height={40}
                className="rounded-[100px] border"
              />
              <Image
                src="/person2.png"
                alt="#"
                width={40}
                height={40}
                className="rounded-[100px] border"
              />
              <Image
                src="/person3.png"
                alt="#"
                width={40}
                height={40}
                className="rounded-[100px] border"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">120K+</h3>
              <p className="text-gray-600 text-sm">
                Our platform is a trusted choice for money transfers.
              </p>
            </div>
          </div>

          {/* Rating Stat */}
          <div className="flex flex-col items-center md:items-start md:flex-row md:space-x-4">
            <div className="text-yellow-400 mb-4 md:mb-0">
              <Image src="/star.png" alt="#" width={40} height={40} />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">4.9</h3>
              <p className="text-gray-600 text-sm">
                Our high rating proves our platform&apos;s quality and positive
                global user impact.
              </p>
            </div>
          </div>

          {/* Global Presence Stat */}
          <div className="flex flex-col items-center md:items-start md:flex-row md:space-x-4">
            <div className="text-green-500 mb-4 md:mb-0">
              <Image src="/location.png" alt="#" width={40} height={40} />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">89+</h3>
              <p className="text-gray-600 text-sm">
                Our global presence ensures reliable, efficient financial
                solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
