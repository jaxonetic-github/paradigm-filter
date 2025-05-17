import React from "react";
import  {Link, Button,Image} from "@heroui/react";
import HonorableMentionVideos from './../../media/honorableMentionVideos.js';
import {Accordion, AccordionItem} from "@heroui/react";

import {ReferencesTable} from './../../references/page.js';

import {references, nzingaProfileRecord} from './../../../src/constants/references.js';


export default function NjingaPage() {
 const tableColumns = [ {    key: "category", label: "CATEGORY"}, {    key: "type", label: "TYPE"},
  {    key: "title", label: "TITLE" },{    key: "subtitle", label: "SUBTITLE" },
  {    key: "url",label: "url" },
];
  const profileRecord = nzingaProfileRecord;
console.log("prec-->",profileRecord);
  return (<>
 </>);
}

/*
   <div className="mx-auto sm:max-w-md max-w-md overflow-hidden rounded-xl bg-[#eee] shadow-md md:max-w-4xl">
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
       Translation of <a href='https://www.bu.edu/afam/people/faculty/john-thornton/john-thorntons-african-texts/'>Araldi Transcriptions</a>, a primary source.

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
</div>*/