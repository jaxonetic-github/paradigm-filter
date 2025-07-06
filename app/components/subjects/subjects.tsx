import React from "react";
//import Link from 'next/link';
import {Button, Divider,Image,  Link} from "@heroui/react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,

  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
} from "@heroui/react";

import AccordionView from './../../_utils/CustomAccordion.tsx';
 
export default function ContentMap() {
   return (<div className='content'>

<div className={'space-x-2 '}>
<div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 '>



<div className="content-division flex flex-col items-center ">
  <div className=" flex text-center ">
   <AccordionView title="Epistemology">
       <Link underline="always" className="border-purple-200  hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700"  href={"/components/subjects/epistemology"} >Introduction</Link>
  </AccordionView>

  </div>
</div>


<div className="content-division flex flex-col items-center ">
  <div className=" flex text-center ">
<AccordionView title="History">
     <Link underline="always" className=" border-purple-200  hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700"  href='/components/subjects/history'>World</Link> 
     <Link underline="always" className="border-purple-200  hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700" href='/components/subjects/topic/bible'>Biblical</Link> 
  </AccordionView >
  </div>
</div>



<div className="content-division flex flex-col items-center ">
  <div className=" flex text-center ">
<AccordionView title="Civics and Law">

    <Link className="border-purple-200  hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700 "
     underline="always"   href='/components/subjects/civics'>The Union of Nations </Link> 
    <Link className="border-purple-200  hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700 "
      underline="always"  href={'/components/subjects/topic/blackandwhite'}>Colored People</Link>   
  </AccordionView>
  </div>
</div>


<div className="content-division flex flex-col items-center ">
  <div className=" flex text-center my-auto">
    <div className="">
    <Link color={"primary"} underline="always" href={"/components/subjects/metaphysics"} > <p className={"font-bold text-inherit"}>Occult and Metaphysics</p></Link>
    </div>
{/*<AccordionView title="Occult and Metaphysics">
     <Link className=" border-purple-200  hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700" isDisabled  underline="none" href='#'>Mantras</Link> 
     <Link className=" border-purple-200  hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700"  isDisabled  underline="none" href='/components/subjects/topic/mantras'>Breath/Spirit</Link> 
     <Link className=" border-purple-200  hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700" isDisabled   underline="none" href='/components/subjects/topic/mantras'>Focus/Darshan</Link> 
</AccordionView>
*/}
  </div>
</div>




<div className="content-division flex flex-col items-center ">
  <div className=" flex text-center ">
  <AccordionView title="Cultures &amp; Arts">
     <Link underline="always" className=" border-purple-200  hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700"  href='/components/subjects/topic/capoeira'>Capoeira</Link> 
     <Link underline="always" className=" border-purple-200  hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700"  href='/components/subjects/topic/yoruba'>Yoruba</Link> 
  </AccordionView>
  </div>
</div>


<div className="content-division flex flex-col items-center ">
  <div className=" text-center  my-auto">
  
    <Link color={"primary"} underline="always" href={"/components/subjects/topic/communication"} > <p className={"flex font-bold "}>Communication</p></Link>

  </div>
</div>

<div className="content-division flex flex-col items-center ">
  <div className=" text-center  my-auto">
   <AccordionView title="Misc">   
     <Link className="border-purple-200  hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700 " underline="always" href={'/components/subjects/media'}>Media</Link>
     <Link className=" border-purple-200  hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700"  isDisabled  underline="none" href='/components/subjects/calendar/'>Calendar</Link> 
  </AccordionView>
  </div>
</div>


<div className="content-division flex flex-col items-center ">
  <div className=" text-center  my-auto">

    <div className="">
        <Link underline="always" color={"primary"} href={"/components/subjects/illuminators"} > <p className={"font-bold text-inherit"}>Characters and Bios</p></Link>
    </div>
  </div>
</div>


<div className="content-division flex flex-col items-center ">
  <div className=" text-center  my-auto">

    <div className="">
        <Link underline="always" color={"primary"} href={"/components/subjects"} > <p className={"font-bold text-inherit"}>Table of Sources and Resources</p></Link>
    </div>
  </div>
</div>


</div> 
</div>
      </div>);
}