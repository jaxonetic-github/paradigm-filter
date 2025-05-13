import React from "react";
import  {Link,Image} from "@heroui/react";
import {nzingaProfileRecord,  NO_PHOTO_ALTERNATIVE_URI, tableColumns,citationColumns,references} from './../src/constants/references.js';

import ProfileHome from './topic/page.tsx';
import Topic from './topic/topic.tsx';
import Snippet from './topic/blackwhite.tsx';

import {Popover, PopoverTrigger, PopoverContent, Divider, Button} from "@heroui/react";
import ReferencesTable from './references/page.js'



export  function ReferencePopover() {
  return (
    <Popover
      showArrow
      backdrop="opaque"
      className={{
        base: [
          // arrow color
          "before:bg-red-200",
        ],
        content: [
          "py-3 px-4",
          "bg-gradient-to-br from-white to-red-300",
          "dark:from-default-100 dark:to-yellow-50",
        ],
      }}
      placement="right"
    >
      <PopoverTrigger>
        <Button  color={"success"} isBlock><p className='border border-1-radius' >Divine Laws</p></Button>
      </PopoverTrigger>
      <PopoverContent>
        {(titleProps) => (
          <div className="bg-red px-1 py-2">
            <h3 className="text-small font-bold" {...titleProps}>
              Divine Law
            </h3>
            <div className="text-tiny">The <Button isBlock  color={"success"} href="#"><span className='bg-red-200'>Corpos Hermiticus</span></Button> is a body of work from the 2nd century of the Gregorian Calender. It explores the divine and the way humanity functions within its macrocosm and it's relation or unity  with the divine. It is a blend of Kemitic, Vedic, and Hellenistic ideas of ascending in awareness of this unity. In the esoteric world, when someone speaks of (12) Divine Laws, they are ultimately refering to this Corpus.)</div>
            <div className="text-tiny">The Kyballion is later esoteric book about 7 of the 12 Divine Laws </div>
          </div>
        )}
      </PopoverContent>
    </Popover>
  );
}
 
export default function ComponentsHome() {
  const items = [
    { id: 1, name: "Item 1" },
    { id: 2, name: "Item 2" },
    { id: 3, name: "Item 3" },
  ];


  return (<div className='mx-5'>

<div className={'flex items-center space-x-2 text-base nota-bene border-1 '}>
  <div className='nota-bene mx-5'>
  <h3>**Nota Bene**</h3>
  <span>** Secret Energies' cybil.ai :: It is the AI Metaphysical Akashic Record for the Occult.</span>
  </div>   
</div>
      

</div>);
}
/**
 * <ReferencesFilters handleDisciplineFilterChange={()=>console.log("Filter Changed");} />

 * <Topic />
        <Divider />
        <ProfileHome profileRecord={nzingaProfileRecord}/>
        <Divider />*/
