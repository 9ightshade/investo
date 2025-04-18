import Image from "next/image";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#F0F0F2] py-12 px-4 sm:px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col lg:flex-row justify-between gap-8">
          {/* First column - Logo and Subscribe */}
          <div className=" ">
            <div className="flex items-center mb-6">
              <div className="h-6 w-6 rounded-sm mr-2">
                <Image
                  src="/logo1.png"
                  alt="Investo Logo"
                  width={28}
                  height={28}
                  priority
                />
              </div>
              <span className="text-xl font-semibold">Investo</span>
            </div>
            <div className="mb-6">
              <h3 className="font-semibold mb-2">Subscribe</h3>
              <p className="text-sm text-gray-600 mb-4">
                Join our newsletter to stay up to date on features and releases.
              </p>
              <form className="flex flex-col sm:flex-row mb-2 bg-white py-3  px-4 rounded-full">
                <div className="relative flex-grow w-full sm:w-auto">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
                    <Image
                      src="/email.png"
                      alt="email"
                      width={24}
                      height={24}
                    />
                  </span>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="pl-12 w-full px-4 py-4 outline-none text-[#595959] text-sm bg-white  rounded-[100px] sm:rounded-r-none"
                    required
                    aria-label="Email address"
                  />
                </div>
                <button
                  type="submit"
                  className="mt-2 sm:mt-0 bg-[#171717] rounded-[100px] sm:rounded-full hover:bg-[#2a2a2a] transition-colors duration-300 hover:text-[#D1F701] cursor-pointer text-white px-10 py-3.5 text-sm w-full sm:w-auto">
                  Subscribe
                </button>
              </form>
              <p className="text-xs text-gray-500 mt-2">
                By subscribing you agree to with our{" "}
                <a
                  href="#"
                  className="underline hover:text-[#171717] transition-colors duration-300">
                  Privacy Policy
                </a>
              </p>
            </div>
          </div>

          {/* Second, Third, and Fourth columns */}
          <div className="">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {/* Quick Links Section */}
              <div className="mb-6 sm:mb-0">
                <h3 className="font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-[#171717] transition-colors duration-300">
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-[#171717] transition-colors duration-300">
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-[#171717] transition-colors duration-300">
                      Services
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-[#171717] transition-colors duration-300">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>

              {/* Products Section */}
              <div className="mb-6 sm:mb-0">
                <h3 className="font-semibold mb-4">Products</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-[#171717] transition-colors duration-300">
                      AI Assistant
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-[#171717] transition-colors duration-300">
                      Mobile App
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-[#171717] transition-colors duration-300">
                      Account
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-[#171717] transition-colors duration-300">
                      Credit Card
                    </a>
                  </li>
                </ul>
              </div>

              {/* Company Section */}
              <div>
                <h3 className="font-semibold mb-4">Company</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-[#171717] transition-colors duration-300">
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-[#171717] transition-colors duration-300">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-[#171717] transition-colors duration-300">
                      Support
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-[#171717] transition-colors duration-300">
                      Terms of Service
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright and Social Media */}
        <div className="mt-12 pt-6 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center">
          <div className="text-sm text-gray-600 mb-6 sm:mb-0 text-center sm:text-left">
            Copyright © 2025 Investo. All Rights Reserved
          </div>
          <div className="flex space-x-6">
            {/* Facebook */}
            <a
              href="#"
              className="text-gray-600 hover:text-[#171717] transition-colors duration-300"
              aria-label="Facebook">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
            {/* Twitter */}
            <a
              href="#"
              className="text-gray-600 hover:text-[#171717] transition-colors duration-300"
              aria-label="Twitter">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round">
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
              </svg>
            </a>
            {/* Instagram */}
            <a
              href="#"
              className="text-gray-600 hover:text-[#171717] transition-colors duration-300"
              aria-label="Instagram">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            {/* YouTube */}
            <a
              href="#"
              className="text-gray-600 hover:text-[#171717] transition-colors duration-300"
              aria-label="YouTube">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round">
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
