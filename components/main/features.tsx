import Image from "next/image";
export default function Features() {
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

  return (
    <div className="w-full bg-white">
      <div className="flex items-center w-[80%] mx-auto gap-4 justify-between">
        {/* left side showing transaction */}
        <div className="bg-gray-100 p-6 flex-1 rounded-xl">
          <div className="space-y-3">
            {transactions.map((transaction) => (
              <div
                key={transaction.id}
                className="bg-white p-4 rounded-xl flex justify-between items-center">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mr-4">
                    <Image
                      src={transaction.logo}
                      alt={transaction.name}
                      width={52}
                      height={52}
                    />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">{transaction.name}</h3>
                    <p className="text-gray-600 text-sm">
                      {transaction.category}
                    </p>
                  </div>
                </div>
                <div className="text-xl font-medium">
                  ${transaction.amount.toFixed(2).replace("-", "-$")}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* right side  */}

        <section className="py-16 bg-white flex-1">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="max-w-xl">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Transforming Transactions, One Click at a Time.
              </h2>

              <p className="text-gray-600 mb-8">
                Our service is designed to connect the world, offering reliable
                and accessible financial solutions to everyone, everywhere.
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
                    Track transfers with real-time notifications.
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
                    Instant transactions, real-time updates.
                  </span>
                </div>
              </div>

              <a
                href="#"
                className="inline-block bg-gray-900 text-white font-medium py-3 px-8 rounded-full hover:bg-gray-800 transition-colors">
                Get Started
              </a>
            </div>

            <div className="border-b border-gray-200 mt-16"></div>
          </div>
        </section>
      </div>
    </div>
  );
}
