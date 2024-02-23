"use client";

import Link from "next/link";
import { TypewriterEffect } from "./ui/typewriter-effect";
import SparklesPreview from "./sparkles-preview";

export function Hero() {
  const words = [
    {
      text: "Analyze",
    },
    {
      text: "your",
    },
    {
      text: "social media",
    },
    {
      text: "with",
    },
    {
      text: "WIT-Reality.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[40rem] ">
      <p className="text-neutral-600 dark:text-neutral-200 text-base  mb-10">
        The road to analysis starts from here
      </p>
      <TypewriterEffect words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 mt-10">
        <Link href={"/login"}>
          {/* <button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
            Join now
          </button> */}
          <button className="p-[3px] relative h-15 ">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
            <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
              Join In
            </div>
          </button>
        </Link>
        {/* <button className="w-40 h-10 rounded-xl bg-white text-black border border-black  text-sm">
          Signup
        </button> */}
        <Link href={"/signup"}>
          <button className=" h-26 shadow-[0_0_0_3px_#000000_inset] px-8 py-2 bg-transparent border border-black dark:border-white dark:text-white text-black rounded-lg font-bold transform">
            SignUp
          </button>
        </Link>
      </div>
    </div>
  );
}
