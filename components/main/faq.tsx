"use client";
import React, { useState } from "react";

export default function FAQSection() {
  const [openQuestion, setOpenQuestion] = useState<number | null>(0);

  interface FAQ {
    question: string;
    answer: string;
  }

  const toggleQuestion = (index: number): void => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  const faqs: FAQ[] = [
    {
      question: "Can I use the service for business transactions?",
      answer:
        "Yes, our platform supports both personal and business transactions. Businesses can benefit from our secure and efficient transfer options tailored to their needs.",
    },
    {
      question: "What is the maximum amount I can transfer?",
      answer:
        "Transfer limits depend on your account level and verification status. Basic accounts can transfer up to $10,000 per transaction, while verified business accounts have higher limits. Contact our support team for specific information about your account.",
    },
    {
      question: "How do I update my account information?",
      answer:
        "You can update your account information by logging into your account, navigating to the 'Account Settings' section, and selecting 'Edit Profile'. From there, you can update your personal details, contact information, and payment preferences.",
    },
    {
      question: "Are there any benefits for frequent users?",
      answer:
        "Yes, we offer a loyalty program for frequent users. As you make more transfers, you can earn points that lead to reduced fees, preferential exchange rates, and priority customer support. Check your account dashboard to see your current status and benefits.",
    },
    {
      question: "Can I access my account from multiple devices?",
      answer:
        "Yes, you can securely access your account from multiple devices. Our platform uses advanced security measures to protect your information across all your devices. For additional security, enable two-factor authentication in your account settings.",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {/* Left Column - Title and Contact */}
          <div>
            <div className="text-gray-500 mb-2">FAQ&apos;S</div>
            <h2 className="text-4xl font-bold text-gray-900 mb-8">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 mb-2">Ask any questions</p>
            <a
              href="mailto:investo@fintech.com"
              className="text-blue-600 text-lg font-medium hover:underline">
              investo@fintech.com
            </a>
          </div>

          {/* Right Column - FAQ Items */}
          <div className="md:col-span-2">
            <div className="space-y-1">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="border-b border-gray-200 cursor-pointer">
                  <button
                    className="w-full py-6 flex justify-between items-center text-left focus:outline-none"
                    onClick={() => toggleQuestion(index)}>
                    <span className="text-lg font-medium text-gray-900">
                      {faq.question}
                    </span>
                    <span className="ml-6 flex-shrink-0">
                      {openQuestion === index ? (
                        <svg
                          className="h-6 w-6 text-gray-500 cursor-pointer"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M20 12H4"
                          />
                        </svg>
                      ) : (
                        <svg
                          className="h-6 w-6 text-gray-500 cursor-pointer"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                          />
                        </svg>
                      )}
                    </span>
                  </button>

                  {openQuestion === index && (
                    <div className="pb-6">
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
