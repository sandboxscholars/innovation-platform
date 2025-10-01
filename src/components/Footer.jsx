import React from 'react';
// import { Linkedin, Instagram, Facebook, Twitter, Mail } from "lucide-react";
import { FaLinkedin, FaInstagram, FaFacebook, FaTwitter, FaEnvelope } from "react-icons/fa";


// Footer Component
// Bottom section of the page with dark blue background
// - Divided into three columns:
//   1. Contact info (email, phone, address)
//   2. Copyright + company name
//   3. Social links
// - Provides legal and contact details


function Footer() {
  return (
    <footer className="py-12 px-6 bg-[var(--background-color)] text-[var(--foreground-color)]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Section */}
        <div className="flex flex-col gap-6">
          <h2 className="px-2 text-5xl font-bold">
            Reach out to <span className="">us!</span>
          </h2>
          <p className="px-2 text-lg max-w-md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore manostrud exercitation
            ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
            iru
          </p>

          {/* Contact form */}
          <div className="bg-[var(--primary-color)]/17 p-6 rounded-md">
            <h3 className="text-lg font-bold mb-1">Your queries...</h3>
            <div className="border-b border-[var(--foreground-color)] mb-4"></div>
            <form className="flex flex-col gap-4">
              <div>
                <label className="block text-md font-bold mb-1">EMAIL</label>
                <input
                  type="email"
                  className="w-full border-b border-[var(--foreground-color)] bg-transparent focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-md font-bold mb-1">MESSAGE</label>
                <textarea
                  rows="2"
                  className="w-full border-b border-[var(--foreground-color)] bg-transparent focus:outline-none resize-none"
                />
              </div>
              <button
                type="submit"
                className="self-end border border-[var(--foreground-color)] px-4 py-1 text-sm font-semibold hover:bg-blue-200"
              >
                SEND
              </button>
            </form>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col gap-6">
          {/* Logo + title */}
          <div className="flex items-center gap-4">
            <div className="w-30 h-30 rounded-full bg-[var(--primary-color)]/17"></div>
            <h3 className="text-3xl font-neue-ultraBold font-bold leading-tight">
              The Daily <br /> Scholar
            </h3>
          </div>

          {/* Links grid */}
          <div className="grid grid-cols-2 gap-3">
            {[
              "Services",
              "Stories from us",
              "Articles",
              "Upcoming Projects",
              "Reports",
              "Join the team!",
              "Collaboration",
              "Support us!",
            ].map((link, idx) => (
              <a
                key={idx}
                href="#"
                className="bg-[var(--primary-color)]/17 px-3 py-2 text-md text-center font-medium"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Divider */}
          <hr className="border-black my-2" />

          {/* Social Media */}
          <div className="flex flex-col gap-3">
            <p className="text-blue-600 font-semibold text-sm text-center mb-2">
              FOLLOW US ON SOCIAL MEDIA
            </p>
            <div className="flex gap-8 justify-center text-[var(--foreground-color)]">
              <a href="#"><FaLinkedin className="w-6 h-6" /></a>
              <a href="#"><FaInstagram className="w-6 h-6" /></a>
              <a href="#"><FaFacebook className="w-6 h-6" /></a>
              <a href="#"><FaTwitter className="w-6 h-6" /></a>
              <a href="#"><FaEnvelope className="w-6 h-6" /></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  
  )
}

export default Footer