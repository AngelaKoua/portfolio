"use client";
import React, { useState } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: "POST",
      // Tell the server we're sending JSON.
      headers: {
        "Content-Type": "application/json",
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);
    const resData = await response.json();

    if (response.status === 200) {
      console.log("Message sent.");
      setEmailSubmitted(true);
    }
  };

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-16 py-24 gap-12 relative"
    >
      <div className="z-10 flex flex-col justify-center">
        <h5 className="text-4xl font-bold text-white my-4 tracking-tight">
          Let&apos;s Connect
        </h5>
        <p className="text-[#ADB7BE] mb-8 max-w-md text-lg leading-relaxed">
          I&apos;m currently open to new opportunities and always happy to connect. Whether you have a question or just want to say hello, feel free to reach out, I&apos;ll do my best to respond promptly.
        </p>
        <div className="socials flex flex-row gap-4">
          <Link 
            href="https://linkedin.com/in/angela-koua"
            target="_blank"
            className="hover:opacity-80 transition-opacity bg-[#181818] p-3 rounded-full border border-white/5"
          >
            <Image src={LinkedinIcon} alt="Linkedin Icon" width={32} height={32} />
          </Link>
        </div>
      </div>
      <div>
        {emailSubmitted ? (
          <div className="flex flex-col items-center justify-center p-8 bg-[#181818] rounded-2xl border border-primary-500/20 shadow-xl">
             <p className="text-green-500 text-xl font-medium">Email sent successfully!</p>
             <p className="text-slate-400 mt-2">I&apos;ll get back to you shortly.</p>
          </div>
        ) : (
          <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="email"
                className="text-white block mb-2 text-sm font-semibold opacity-90"
              >
                Your email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                required
                className="bg-[#121212] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-xl block w-full p-4 focus:border-primary-500 transition-all outline-none shadow-inner"
                placeholder="name@example.com"
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="text-white block text-sm mb-2 font-semibold opacity-90"
              >
                Subject
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                className="bg-[#121212] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-xl block w-full p-4 focus:border-primary-500 transition-all outline-none"
                placeholder="Just saying hi"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="text-white block text-sm mb-2 font-semibold opacity-90"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows="5"
                className="bg-[#121212] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-xl block w-full p-4 focus:border-primary-500 transition-all outline-none resize-none"
                placeholder="Let&apos;s talk about..."
              />
            </div>
            <button
              type="submit"
              className="bg-primary-500 hover:bg-primary-600 text-white font-bold py-4 px-5 rounded-xl w-full transition-all shadow-lg active:scale-[0.98]"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default EmailSection;
