import type { Metadata } from "next";
//import { Inter } from "next/font/google";
import { WebVitals } from "@/components/utils/web-vitals";
import "./globals.css";
//const inter = Inter({ subsets: ["greek"] });
//import { Auth0Provider } from "@auth0/auth0-react";
import React from 'react';
//import { UserProvider } from "@auth/nextjs-auth/client";
//import { useAuth0 } from "@next-auth";
//import { Auth0Provider } from "@auth0/nextjs-auth0";
import '@stripe/stripe-js';
import SessionComponent from '@/components/authentication/session.tsx';
import AppNavBar from '@/components/appnavbar.js';
import Script from 'next/script';

export const metadata: Metadata = {
  title: "Relevant Movement",
  description: "Virtual Resources, References and Playground",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  //const session = await auth0.getSession();

  //<Auth0Provider user={session?.user}>

  return (
    <html  data-name="viewport" data-content="width=device-width, initial-scale=1.0" data-lang="en">
      <body >
        <main className="">
        <div className="">
         <AppNavBar/>
         </div>


         {children} 
        </main>
      </body>
        <Script src="https://js.stripe.com/v3/buy-button.js" />
    </html>
  );
}
