
import React from "react";

import ContentMap from './subjects/subjects.tsx';
import SessionComponent from './authentication/session.tsx';
import AppNavBar from './appnavbar.js';
//import { auth as Auth0Provider } from '../../auth.ts';
//import { useSession, SessionProvider } from 'next-auth/react';

// <p>Welcome {session?.user.name}!</p>
/**
 * /components/subjects
 */
export default function SubjectsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  console.log('aoo components layout');
  return 

   (
    <section > 

      <SessionComponent/>
      <div className="fixed z-1000">   <AppNavBar/> </div> 
      <div className="relative  top-15   mx-5">   
       
          <div className="bg-white">
          {children}
          </div>
      </div>

         </section>);
}

