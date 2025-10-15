// src/app/layout.js

import './globals.css';
import { DM_Sans } from "next/font/google";

// 1. Initialize DM Sans here
const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans", // Define the CSS variable
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* 2. Apply the CSS variable to the body tag */}
      <body className={`${dmSans.variable} font-sans`}> 
        {children}
      </body>
    </html>
  );
}