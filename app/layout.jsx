import "./globals.css";
import Navbar from "@/components/Navbar";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
import "./nprogress.css";
import { Analytics } from "@vercel/analytics/react";
import Chat from "@/components/Chat";
import ClientTopProgressBar from "@/components/ClientTopProgressBar";

export const metadata = {
  title: "RezaIvano | Portofolio",

  description:
    "My name is RezaIvano, I'm a web developer and I'm passionate about it. I'm currently studying at Universitas Negeri Malang.",

  author: "Muhammad Reza Ivano Pahlevi",
  siteUrl: "https://www.rezaivano.my.id",
  applicationName: "RezaIvano",

  keywords: [
    "rezaivano",
    "reza ivano",
    "reza ivano pahlevi",
    "ivano",
    "reza porto",
    "reza um",
  ],

  openGraph: {
    type: "website",
    url: "https://www.rezaivano.my.id",
    title: "RezaIvano | Portofolio",
    site_name: "RezaIvano | Portofolio",
    description: "My name is RezaIvano, This is my portofolio website.",
    width: 1200,
    height: 630,
    images: [
      {
        url: "/og-image-rev.png",
        alt: "RezaIvano Portofolio",
      },
    ],
    site_name: "RezaIvano | Portofolio",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ClientTopProgressBar />
        <Navbar />
        {children}
        <Chat />
        <Analytics />
      </body>
    </html>
  );
}
