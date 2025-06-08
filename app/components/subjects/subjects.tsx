import React from "react";
//import Link from 'next/link';
import {Button, Divider, Link} from "@heroui/react";

import AccordionView from './../../_utils/CustomAccordion.tsx';
 
export default function ContentMap() {
   return (<div className='content top-25 py-2 z-10 bg-[#eee] mx-5'>
<h1>Content Map</h1>
<div className={'space-x-2 '}>
<div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 '>


<div className="content-division  flex flex-col sm:flex-row sm:items-center sm:gap-4 ">
  <div className=" text-center sm:text-left">

   <AccordionView title="Philosophy">
       <Link underline="always" className="border-purple-200  hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700"  href={"/components/subjects/epistemology"} >Epistemology</Link>
  </AccordionView>

  </div>
</div>

<div className="content-division flex flex-col sm:flex-row sm:items-center sm:gap-4 ">
  <div className=" text-center sm:text-left">
<AccordionView title="History">
     <Link underline="always" className=" border-purple-200  hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700"  href='/components/subjects/history'>World</Link> 
     <Link underline="always" className="border-purple-200  hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700" href='/components/subjects/topic/bible'>Biblical</Link> 
     <Link underline="always" className="border-purple-200  hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700 " href={'/components/subjects/illuminators'}>Characters and Bios</Link>
  </AccordionView >
  </div>
</div>


<div className="content-division flex flex-col sm:flex-row sm:items-center sm:gap-4 ">


  <div className=" text-center sm:text-left">
<AccordionView title="Civics and Law">
    <Link className="border-purple-200  hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700 "
     underline="always"   href='/components/subjects/topic/rights'>Rights</Link> 
    <Link className="border-purple-200  hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700 "
     underline="always"   href='/components/subjects/topic/rights'>Property</Link> 
    <Link className="border-purple-200  hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700 "
     underline="always"   href='/components/subjects/topic/constitution'>Constitution</Link>
    <Link className="border-purple-200  hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700 "
      underline="always"  href={'/components/subjects/topic/freedom'}>Freedom</Link>
    <Link className="border-purple-200  hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700 "
      underline="always"  href={'/components/subjects/topic/money'}>Money</Link>
    <Link className="border-purple-200  hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700 "
      underline="always"  href={'/components/subjects/topic/blackandwhite'}>Colorable People</Link>
  </AccordionView>
  </div>
</div>

<div className=" content-division flex flex-col sm:flex-row sm:items-center sm:gap-4 ">
  <div className=" text-center sm:text-left">

<AccordionView title="Occult and Metaphysics">
     <Link className=" border-purple-200  hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700" isDisabled  underline="none" href='#'>Mantras</Link> 
     <Link className=" border-purple-200  hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700"  isDisabled  underline="none" href='/components/subjects/topic/mantras'>Breath/Spirit</Link> 
     <Link className=" border-purple-200  hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700" isDisabled   underline="none" href='/components/subjects/topic/mantras'>Focus/Darshan</Link> 
</AccordionView>
  </div>
</div>



<div className="content-division flex flex-col sm:flex-row sm:items-center sm:gap-4 ">
  <div className=" text-center sm:text-left">
    
  <AccordionView title="Cultures &amp; Arts">
     <Link underline="always" className=" border-purple-200  hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700"  href='/components/subjects/topic/capoeira'>Capoeira</Link> 
     <Link underline="always" className=" border-purple-200  hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700"  href='/components/subjects/topic/yoruba'>Yoruba</Link> 
  </AccordionView>
  </div>
</div>


<div className="content-division flex flex-col sm:flex-row sm:items-center sm:gap-4 ">
  <div className=" text-center sm:text-left">
    <div className="">
    <Link color={"primary"} underline="always" href={"/components/subjects/topic/communication"} > <p className={"font-bold text-inherit"}>Communication</p></Link>
    </div>
  </div>
</div>

<div className="content-division flex flex-col sm:flex-row sm:items-center sm:gap-4 ">
  <div className=" text-center sm:text-left">
   <AccordionView title="Misc">   
     <Link className="border-purple-200  hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700 " underline="always" href={'/components/subjects/media'}>Media</Link>
     <Link className=" border-purple-200  hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700"  isDisabled  underline="none" href='/components/subjects/calendar/'>Calendar</Link> 
  </AccordionView>
  </div>
</div>


<div className="content-division  flex flex-col sm:flex-row sm:items-center sm:gap-4 ">
  <div className=" text-center sm:text-left">
    <div className="">
        <Link underline="always" color={"primary"} href={"/components/subjects"} > <p className={"font-bold text-inherit"}>Table of Sources and Resources</p></Link>
    </div>

  </div>
</div>


</div> 
</div>
      </div>);
}