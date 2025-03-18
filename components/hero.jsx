"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

const HeroSection = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    const imageElement = imageRef.current;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = 100;

      if (scrollPosition > scrollThreshold) {
        imageElement.classList.add("scrolled");
      } else {
        imageElement.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-white to-[#f0f8ff]">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold pb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#01257D] to-[#00FFFF]">
          Manage Your Finances <br /> with Intelligence
        </h1>
        <p className="text-xl text-[#01257D]/80 mb-10 max-w-2xl mx-auto">
          An AI-powered financial management platform that helps you track,
          analyze, and optimize your spending with real-time insights.
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <Link href="/dashboard">
            <Button
              size="lg"
              className="px-8 py-6 bg-[#01257D] hover:bg-[#01257D]/90 text-white shadow-lg transition-all hover:shadow-[0_5px_25px_rgba(0,255,255,0.4)] border border-[#00FFFF]/30 hover:translate-y-[-2px]"
            >
              Get Started
            </Button>
          </Link>
          <Link href="https://www.youtube.com/roadsidecoder">
            <Button
              size="lg"
              variant="outline"
              className="px-8 py-6 border-[#00FFFF]/40 text-[#01257D] hover:bg-[#f0f8ff] shadow-sm transition-all"
            >
              Watch Demo
            </Button>
          </Link>
        </div>
        <div className="hero-image-wrapper mt-16 relative">
          <div className="absolute inset-0 bg-[#00FFFF]/10 rounded-2xl blur-3xl -z-10 transform rotate-3"></div>
          <div ref={imageRef} className="hero-image relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#01257D]/20 to-transparent rounded-xl"></div>
            <Image
              src="/banner.jpeg"
              width={1280}
              height={720}
              alt="Dashboard Preview"
              className="rounded-xl shadow-xl border border-[#00FFFF]/20 mx-auto transform transition-all hover:scale-[1.01] hover:shadow-[0_10px_40px_-5px_rgba(0,255,255,0.2)]"
              priority
            />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#00FFFF]/20 rounded-full blur-xl opacity-70 -z-10"></div>
            <div className="absolute -top-8 -left-8 w-32 h-32 bg-[#01257D]/10 rounded-full blur-xl opacity-50 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
