import Image from "next/image";

export default function GetStarted() {
  return (
    <div className="flex items-center w-[80%] mx-auto">
      <section className="py-16 bg-white flex-1">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="max-w-xl mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Let&apos;s Start Sending Your Money
            </h2>
            <p className="text-gray-600">
              By integrating advanced technologies, fintech reshapes the
              financial landscape, making it more user-friendly and adaptive to
              modern needs.
            </p>
          </div>

          <div className="space-y-8">
            {/* Step 1 */}
            <div className="flex">
              <div className="mr-6">
                <div className="w-16 h-16 bg-gray-100 rounded flex items-center justify-center">
                 <Image src="/bank.png" alt="#" width={24} height={24} />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  First of all create an account
                </h3>
                <p className="text-gray-600">
                  Create an account using your email address or social media
                  profile. Quick and straightforward registration process.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex">
              <div className="mr-6">
                <div className="w-16 h-16 bg-gray-100 rounded flex items-center justify-center">
                <Image src="/locate.png" alt="#" width={24} height={24} />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Track Transactions in Real-Time
                </h3>
                <p className="text-gray-600">
                  Monitor the status of your transactions with instant updates
                  and notifications.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex">
              <div className="mr-6">
                <div className="w-16 h-16 bg-gray-100 rounded flex items-center justify-center">
                <Image src="/support.png" alt="#" width={24} height={24} />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Access 24/7 Customer Support
                </h3>
                <p className="text-gray-600">
                  Get assistance anytime with our dedicated support team ready
                  to help with any issues or questions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="flex-1">
        <Image src="/phone.png" alt="#" width={576} height={983} />
      </div>
    </div>
  );
}
