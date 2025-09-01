'use client'
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

import AccordionView from '@/components/utils/CustomAccordion.tsx';
import {sections} from '@/src/constants/navigation.js';
import {subsectionType} from '@/src/constants/appTypes.js';

export default function ContentMap() {

function subSectionLinks(subsections:subsectionType[]) {
  return (  
    subsections.map(subsection =>  <Link key={subsection.key} className="border-purple-200  hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700 " underline="always" href={subsection.url}>{subsection.display}</Link>)  
  );
}

const listItems = sections.map(section =>  
  <div key={section.title} className="content-division flex flex-col items-center ">
  <div className=" flex text-center ">
  <AccordionView title={section.title}>{subSectionLinks(section.subsections)}</AccordionView>
  </div>
</div>
  );

   return (<div className='content'>

<div className={'space-x-2 '}>
<div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 '>

{listItems}
  </div>
</div>

</div>);
}