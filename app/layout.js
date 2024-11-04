import { Plus_Jakarta_Sans, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/Navbar";
import Hero from "./_components/Hero";
import { Providers as ThemeProvider } from "./_context/ThemeContext";
import AnimatedCursor from "react-animated-cursor";

// Initialize Plus Jakarta Sans with the required subset
const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
});

// Initialize DM Sans with the required subset
const dmSans = DM_Sans({
  subsets: ["latin"],
});

export const metadata = {
  title:
    "G Cube Digital | Best Web Development & Digital Marketing Agency in Bangalore",
  description:
    "G Cube Digital is the leading web development and digital marketing agency in RR Nagar, Bangalore. We specialize in creating innovative websites and effective marketing strategies to help your business grow. Contact us today!",
  keywords:
    "G Cube Digital, web development agency, digital marketing agency, RR Nagar, Bangalore, best web development, digital marketing, SEO, social media marketing, branding, responsive web design, custom websites, e-commerce development",
  author: "Sharan P",
};

export default function RootLayout({ children }) {
  return (
    <html class="scroll-smooth" lang="en" suppressHydrationWarning>
      <body
        className={`${jakarta.className} ${dmSans.className} dark:bg-gray-900 bg-gray-50 overflow-x-hidden`}
      >
        <AnimatedCursor
          innerSize={12}
          outerSize={48}
          color="2, 132, 233" // White color for cursor
          outerAlpha={0.5}
          innerScale={0.3}
          outerScale={2}
          style={{
            mixBlendMode: "difference", // Apply difference blend mode
          }}
          clickables={[
            "a",
            'input[type="text"]',
            'input[type="email"]',
            'input[type="number"]',
            'input[type="submit"]',
            'input[type="image"]',
            "label[for]",
            "select",
            "textarea",
            "button",
            ".link",
          ]}
        />
        <ThemeProvider>
          <>{children}</>
        </ThemeProvider>
      </body>
    </html>
  );
}
