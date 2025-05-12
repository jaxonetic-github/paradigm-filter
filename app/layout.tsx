import type { Metadata } from "next";
//import { Inter } from "next/font/google";
import { Welcome } from "./components/home/welcome.tsx";
import { WebVitals } from "./_utils/web-vitals";
import "./globals.css";

//const inter = Inter({ subsets: ["greek"] });

export const metadata: Metadata = {
  title: "Relevant Movement",
  description: "Virtual Resources, References and Playground",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html  name="viewport" content="width=device-width, initial-scale=1.0" lang="en">
      <body >
        <a href='/' className=''>** Pre-Beta Home**</a>
        <main className="dark text-foreground bg-background">

        <WebVitals />
          {children}
        </main>
      </body>
    </html>
  );
}
