import React from "react";
import Image from "next/image";
import Link from "next/link";
import LinkedinIcon from "../../../public/linkedin-icon.svg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent bg-[#121212] text-white">
      <div className="container mx-auto p-12 grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        {/* Logo and About Section */}
        <div className="flex flex-col gap-4">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/logo.png"
              alt="Logo"
              width={50}
              height={50}
              className="rounded-full"
            />
            <span className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-secondary-600">
              Angela Koua
            </span>
          </Link>
          <p className="text-slate-500 max-w-xs text-sm">
            Passionate Data Science & AI student at Ecole Centrale Casablanca, dedicated to building innovative and intelligent solutions.
          </p>
        </div>

        {/* Quick Links Section */}
        <div className="flex flex-col gap-4 md:items-center">
          <h5 className="font-bold text-lg">Quick Links</h5>
          <nav className="flex flex-col gap-2">
            <Link href="/#about" className="text-slate-400 hover:text-white transition-colors text-sm">About Me</Link>
            <Link href="/#projects" className="text-slate-400 hover:text-white transition-colors text-sm">Projects</Link>
            <Link href="/#contact" className="text-slate-400 hover:text-white transition-colors text-sm">Contact</Link>
          </nav>
        </div>

        {/* Social and Copyright Section */}
        <div className="flex flex-col gap-4 md:items-end">
          <h5 className="font-bold text-lg">Connect</h5>
          <div className="flex gap-4">
            <Link href="https://linkedin.com/in/angela-koua" target="_blank" className="hover:scale-110 transition-transform">
              <Image src={LinkedinIcon} alt="LinkedIn Icon" width={32} height={32} />
            </Link>
            {/* Add more social icons here if needed */}
          </div>
          <p className="text-slate-600 text-xs mt-4">
            &copy; {currentYear} Angela Koua. All rights reserved.
          </p>
          <p className="text-xs text-slate-700 italic">
            Built with Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
