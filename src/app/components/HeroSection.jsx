"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="lg:py-24 px-4 sm:px-6">
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-6 text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              Hello, I&apos;m{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "Angela Koua",
                1500,
                "Bachelor Student",
                1000,
                "Data & AI Enthusiast",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-8 lg:text-xl max-w-2xl leading-relaxed">
            &quot;The goal of artificial intelligence is not to replace humans, but to augment human capabilities.&quot;
            Guided by this vision, I focus on developing intelligent systems that support decision-making and solve complex technological challenges.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/#contact"
              className="px-8 py-4 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:opacity-90 transition-all text-white font-bold text-center"
            >
              Hire Me
            </Link>
            <Link
              href="https://drive.google.com/file/d/1FTIHWWumpV8b5HKs_9EJRjmUDokRLtI4/view?usp=drive_link"
              className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-1 group"
            >
              <span className="block bg-[#121212] group-hover:bg-opacity-80 rounded-full px-7 py-3 transition-all duration-300">
                Download CV
              </span>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-8 lg:mt-0"
        >
          <div className="relative w-[300px] h-[300px] lg:w-[450px] lg:h-[450px]">
            {/* Minimalist Glowing Ring */}
            <div className="absolute inset-0 rounded-full border-2 border-primary-500/20 animate-pulse shadow-[0_0_30px_rgba(168,85,247,0.15)]"></div>
            <div className="rounded-full bg-[#181818] w-full h-full relative overflow-hidden border border-white/5">
              <Image
                src="/images/hero-image.png"
                alt="hero image"
                className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 transition-transform duration-500 hover:scale-105"
                width={400}
                height={400}
                priority
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
