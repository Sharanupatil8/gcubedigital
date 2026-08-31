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
  metadataBase: new URL("https://www.sharpxstudios.com"),
  title: {
    default: "AI Automation, Web Development & Digital Marketing Agency | SharpXstudios",
    template: "%s | SharpXstudios",
  },
  description:
    "SharpXstudios builds custom websites, AI automation, and digital marketing strategies for businesses worldwide. Remote-first agency based in Bangalore, India. Get a free consultation.",
  keywords: [
    "SharpXstudios",
    "AI automation agency",
    "web development agency",
    "digital marketing agency",
    "AI agents for business",
    "SEO marketing",
    "social media marketing",
    "branding",
    "responsive web design",
    "custom websites",
    "e-commerce development",
  ],
  authors: [{ name: "Sharan P" }],
  creator: "SharpXstudios",
  publisher: "SharpXstudios",
  alternates: {
    canonical: "https://www.sharpxstudios.com/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    url: "https://www.sharpxstudios.com/",
    siteName: "SharpXstudios",
    title: "AI Automation, Web Development & Digital Marketing Agency | SharpXstudios",
    description:
      "Custom websites, AI automation, and digital marketing for businesses worldwide. Remote-first agency based in Bangalore, India.",
    images: [
      {
        url: "/assets/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SharpXstudios - AI Automation, Web Development & Digital Marketing Agency",
      },
    ],
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Automation, Web Development & Digital Marketing Agency | SharpXstudios",
    description:
      "Custom websites, AI automation, and digital marketing for businesses worldwide. Remote-first agency based in Bangalore, India.",
    images: ["/assets/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },
  themeColor: "#0a0a0a",
};

export default function RootLayout({ children }) {
  return (
    <html className="scroll-smooth" lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "SharpXstudios",
              url: "https://www.sharpxstudios.com/",
              logo: "https://www.sharpxstudios.com/logo.png",
              image: "https://www.sharpxstudios.com/assets/og-image.jpg",
              description:
                "SharpXstudios is a remote-first agency offering AI automation, web development, and digital marketing services for businesses worldwide.",
              areaServed: {
                "@type": "Country",
                name: "Worldwide",
              },
              address: {
                "@type": "PostalAddress",
                addressLocality: "Bangalore",
                addressRegion: "Karnataka",
                addressCountry: "IN",
              },
              sameAs: ["https://wa.me/918050923077"],
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.8",
                reviewCount: "5",
              },
              makesOffer: [
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "AI Automation" } },
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "Web Development" } },
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "Digital Marketing" } },
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "SEO Marketing" } },
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "Graphic Design" } },
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${jakarta.className} ${dmSans.className} bg-gray-50 overflow-x-hidden`}
      >
        <AnimatedCursor
          innerSize={12}
          outerSize={48}
          color="14 ,165, 233"
          outerAlpha={0.1}
          innerScale={0.3}
          outerScale={2}
          style={{
            mixBlendMode: "difference",
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
        <>{children}</>
      </body>
    </html>
  );
}
