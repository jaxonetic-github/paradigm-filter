
import React from "react";

 import ReferencesTable from './references/page.js';
import ContentMap from './subjects.tsx';
import SessionComponent from './../authentication/session.tsx';
import AppNavBar from '../appnavbar.js';
//import { auth as Auth0Provider } from '../../auth.ts';
//import { useSession, SessionProvider } from 'next-auth/react';

// <p>Welcome {session?.user.name}!</p>
/**
 * /components/subjects
 */
export default function SubjectsLayout({
  children,
}:  React.PropsWithChildren) {

  console.log('subject app/components/subject/layout');

  return 
   <section > 
     
      <div className="fixed z-1000">   <AppNavBar/> </div> 
      <div className="relative  top-15   mx-5">   
       <ContentMap/>   
            

          <div className="bg-white">
          {children}
          </div>
      </div>

         </section>
      
}

