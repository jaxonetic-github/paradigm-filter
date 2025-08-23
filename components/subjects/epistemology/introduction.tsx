'use client';
import React from "react";
import  {Image, Button} from "@heroui/react";
import {nzingaProfileRecord,  NO_PHOTO_ALTERNATIVE_URI, tableColumns,citationColumns,references} from '@/src/constants/references.js';
import {Tabs, Tab, Card, CardFooter, CardBody, Divider, Link} from "@heroui/react";
import {ExternalWindowButton} from '@/components/utils/externalWindowButton.tsx';
import AccordionView from '@/components/utils/CustomAccordion.tsx';
import {ReferenceView,referenceFilter, ReferencesGridView} from '@/components/subjects/references/referencesView.jsx';

import  {SimplePopoverView} from "@/components/utils/popoverView.tsx";
import  {YoutubeEmbed} from "@/components/utils/youtubeEmbed.js";
import CustomDialog from '@/components/utils/CustomDialog.tsx';


export default function Epistemology() {

  return (<div className=''>
     
     <h1>Introduction</h1>
     <div className='grid grid-cols-1 lg:grid-cols-2  mx-15'>
     <div >
      <p className='indent-8'>Epistomology is the philosophy that deals with how we know what we know.  It is the tool you can use to filter the information that comes to you
      and discern whether it (or parts of it) is worthy of incorporating into your worldview, discarding it, or perhaps shelving it for need of future thought or investigation. </p> 
      <p className='indent-8'> An ultra high level of discernment is necessary to maneuver honorably and free in this world full of so many beliefs, assumption, and, opinions, AI generated
       content and information, shameful acts of book burnings, and thefts and destruction of monuments, artifacts, and documents,...</p> 
            
      <p className='indent-8'>The result of not filtering incoming information is like being caught in someone else's spell.  The older we get after, forming layer upon layer of concepts and ideas based on  
      what was heard and believed, the harder it is to want to "reinvint" or relayer our philosophieand paradigms .  Thus we are born 
      into this time loop of growing up in environment that perpetuates and promotes the belief and naturally accepting it 
      because of its broader cultural acceptance.</p>
      <p>
      This section will show and explore examples of propaganda and how it used to our detriment. As a rule no one looks beyond what is a settled fact/belief or foregone popular conclusion. It behooves all of us to do 
      an authentic audit on what we think we know or have learned.  If we are upholding concepts for their emotional appeal then
      we are not living our truth or upto our highest potential; instead, we are living under-standing another persons spell.
      That spell becomes a sprouting seed mental slavery the longer is not balanced with reality.
      </p>
      </div>

<div className='flex justify-center'>
<ul><h3>Heard vs Learned</h3>
<li>A: I learned X today</li>
<li>B: X isn’t true</li>
<li>A: but C told me X and c is an authority</li>
<li>B: oh! If X is true you did learn it.</li>
<li>C: wait, I was mistaken about X being true…</li>
<li>B: so A, you only heard X, you didn’t learn it.</li>
</ul>
</div>
</div>

</div>);
}
