import Image from "next/image";

export default function InternationalTransfers() {
  return (
    <div className="bg-white w-full">
      <div className=" w-[80%] mx-auto flex items-center gap-10 ">
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="max-w-xl">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Smooth and Easy International Transfers.
              </h2>

              <p className="text-gray-600 mb-8">
                With user-friendly features, competitive exchange rates, and
                robust security measures, our platform simplifies international
                transactions.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <div className="mr-3 flex-shrink-0 bg-gray-100 rounded-full p-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-gray-900"
                      viewBox="0 0 20 20"
                      fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-700">
                    Seamless international money transfers.
                  </span>
                </div>

                <div className="flex items-center">
                  <div className="mr-3 flex-shrink-0 bg-gray-100 rounded-full p-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-gray-900"
                      viewBox="0 0 20 20"
                      fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-700">
                    Competitive exchange rates offered daily.
                  </span>
                </div>
              </div>

              <a
                href="#"
                className="inline-block bg-gray-900 text-white font-medium py-3 px-8 rounded-full hover:bg-[#5945FD] transition-colors">
                Get Started
              </a>
            </div>

            <div className="border-b border-gray-200 mt-16"></div>
          </div>
        </section>

        <div>
          <Image
            src="/transfers.png"
            alt="transfers"
            width={633}
            height={487}
            className="rounded-[40px] "
          />
        </div>
      </div>
    </div>
  );
}
