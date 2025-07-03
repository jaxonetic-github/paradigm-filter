import React from "react";

 import ReferencesTable from './references/page.js';
import ContentMap from './subjects.tsx';
import AppNavBar from '../appnavbar.js';
import {Image, Divider, Link} from "@heroui/react";



/**
 * /components/subjects
 */
export default function SubjectsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <section >  
      <div className="fixed z-1000">   <AppNavBar/> </div> 
      <div className="relative  top-15  z-1 bg-[#eee] mx-5">   
       <ContentMap/>   
       <Divider className='my-8'/>
          <div className="bg-white">
            {children}
          </div>
      </div> 
         </section>
}

