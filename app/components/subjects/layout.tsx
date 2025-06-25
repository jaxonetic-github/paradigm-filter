import React from "react";

 import ReferencesTable from './references/page.js';
import ContentMap from './subjects.tsx';
import {Image, Divider, Link} from "@heroui/react";



/**
 * /components/subjects
 */
export default function SubjectsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <section>  

<div className=" flex flex-col items-center ">

 
  <Link   underline="always"   href='/'><Image className="content-division w-10"
            src={'/images/book-svgrepo-com.svg'} 
            fallbackSrc={'/images/imagenotavailable.jpeg'}
            alt={`Default Image not found for`}
          />Home
</Link>
</div>

      
            <ContentMap/>
            {children}
            
         </section>
}

