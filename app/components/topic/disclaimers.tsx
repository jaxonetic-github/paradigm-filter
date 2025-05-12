"use client"
import React from "react";
import  {Link, Button,Image} from "@heroui/react";
import HonorableMentionVideos from '../media/honorableMentionVideos.js';
import {Accordion, AccordionItem} from "@heroui/react";

import {ReferencesTable} from '../references/page.js';

import {references, nzingaProfileRecord} from '../../src/constants/references.js';


export const tableColumns = [ {    key: "category", label: "CATEGORY"}, {    key: "type", label: "TYPE"},
  {    key: "title", label: "TITLE" },{    key: "subtitle", label: "SUBTITLE" },
  {    key: "url",label: "url" },
];





export default function ProfileHome({profileRecord=nzingaProfileRecord}) {
  const items = [
    { id: 1, name: "Item 1" },
    { id: 2, name: "Item 2" },
    { id: 3, name: "Item 3" },
  ];
console.log(profileRecord);
  return (<div><div className="mx-auto sm:max-w-md max-w-md overflow-hidden rounded-xl bg-[#eee] shadow-md md:max-w-4xl">
  <div className="md:flex">
    <div className="md:shrink-0">
     
        <Image
        className="p-4 h-[12%] w-full object-cover sm:w-full md:h-full md:w-48"
        src={profileRecord.thumbnail} 
        fallbackSrc={'images/imagenotavailable.jpeg'}
        alt={`Default Image not found for [${profileRecord.name}]`}
      />
    </div>
    <div className="p-8">
      <div className="text-sm font-semibold tracking-wide text-indigo-500 uppercase">{profileRecord.name}</div>
       <p>{profileRecord.lifespan}</p> 
       <p>Ngola of Ndongo and Matambe, present day Angola</p>
<p>Yet in fact, Harrison found answers to the questions
that would haunt advocates of racial equality for years to come.
Both the Black socialist tradition and the Black nationalist tradition
owe an enormous debt to Harrison which has not been properly
understood to date. As his biographer, Jeffrey Perry, has aptly
noted, Harrison was the most class conscious of the race radicals
and the most race conscious of the class radicals of his day.3 </p>
    </div>
    
  </div>
  </div>
   <Accordion variant="shadow">
      <AccordionItem key="References" aria-label="References" title=" References">
     <ReferencesTable columns={tableColumns} rows={profileRecord.sources.map((referenceIndex)=>references[referenceIndex])} />
      </AccordionItem>
      <AccordionItem key="2" aria-label="Discussions" title="Discussions and Lectues">
     <HonorableMentionVideos id="Discussions"  dataArray={profileRecord.videoArray}  /> 
      </AccordionItem>

    </Accordion>
</div>);
}
