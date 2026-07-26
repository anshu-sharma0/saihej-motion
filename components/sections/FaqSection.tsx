"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(-1);

  const faqData = [
    {
      question: "Is the content free?",
      answer:
        "Yes, 100%! All of Saihej Motion's Hindi nursery rhymes, kids songs, 3D animated adventures, and educational shorts are completely free to watch on our official YouTube channel. You can subscribe anytime so your children never miss a new episode!",
    },
    {
      question: "Is it safe?",
      answer:
        "Absolutely. Child safety is our #1 priority. Every video we create is designed for the YouTube Kids ecosystem with positive values, joyful melodies, gentle pacing, and zero inappropriate content or scary themes. It is trusted by parents and preschool teachers across India and worldwide.",
    },
    {
      question: "How often do you upload?",
      answer:
        "We release new 4K animated videos and Hindi nursery rhymes every week! We also upload fun 60-second shorts and playlist collections regularly so your family always has fresh, educational entertainment to enjoy together.",
    },
    {
      question: "What age group is this for?",
      answer:
        "Our content is specifically tailored for toddlers, preschool children, kindergarteners, and kids aged 2–8 years. However, our catchy Hindi songs and cheerful Disney-Pixar style animation delight parents and grandparents just as much!",
    },
    {
      question: "Can parents request rhymes?",
      answer:
        "Yes! We love hearing from families. If your child has a favourite Hindi nursery rhyme, educational topic, or animal song they want to see in 4K 3D animation, you can leave a comment on our YouTube videos or send an email to punjab.sabbi@gmail.com. We read every request!",
    },
  ];

  const toggleAccordion = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="relative py-8  md:py-12 lg:py-16 bg-[#FFFDF7] overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 lg:mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#FF4D4D]/10 px-4 py-1.5 text-xs font-extrabold uppercase tracking-wider text-[#FF4D4D] mb-3">
            <HelpCircle className="h-4 w-4" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-[#1F2937] tracking-tight leading-tight">
            Got Questions? <br /> <span className="text-[#FF4D4D]">We&apos;ve Got</span> Answers!
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg lg:text-xl text-zinc-600 font-medium leading-relaxed">
            Everything parents want to know about Saihej Motion, our 4K 3D animation,
            and our weekly uploading schedule.
          </p>
        </div>

        {/* Accordion List */}
        <div className="flex flex-col gap-4">
          {faqData.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={item.question}
                className={`rounded-3xl border-2 transition-all duration-300 overflow-hidden ${isOpen
                  ? "bg-white border-[#FF4D4D] shadow-xl"
                  : "bg-white border-zinc-200/80 hover:border-zinc-300 shadow-sm"
                  }`}
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full flex items-center justify-between p-4 sm:p-5 text-left focus:outline-none cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="flex items-center gap-3">
                    <span
                      className={`flex h-8 w-8 items-center justify-center rounded-xl text-sm font-extrabold transition-colors ${isOpen
                        ? "bg-[#FF4D4D] text-white"
                        : "bg-[#FFD93D]/30 text-[#D97706]"
                        }`}
                    >
                      {idx + 1}
                    </span>
                    <span className="text-base sm:text-lg lg:text-xl font-extrabold text-[#1F2937]">
                      {item.question}
                    </span>
                  </span>

                  <span
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-transform duration-300 ${isOpen
                      ? "bg-[#FF4D4D]/10 text-[#FF4D4D] rotate-180"
                      : "bg-zinc-100 text-zinc-500"
                      }`}
                  >
                    <ChevronDown className="h-5 w-5" />
                  </span>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-7 pb-6 sm:pb-7 pt-2 text-sm sm:text-base text-zinc-600 font-medium leading-relaxed border-t border-zinc-100 animate-in fade-in duration-200">
                    <p>{item.answer}</p>
                    {idx === 4 && (
                      <div className="mt-4 inline-flex items-center gap-2 rounded-2xl bg-[#FFD93D]/20 px-4 py-2 text-xs font-bold text-[#D97706]">
                        <span>✉️ Request rhymes at:</span>
                        <a
                          href="mailto:punjab.sabbi@gmail.com"
                          className="underline text-[#1F2937]"
                        >
                          punjab.sabbi@gmail.com
                        </a>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
