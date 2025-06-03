import React from "react";
import  {Link, Button,Image} from "@heroui/react";
import HonorableMentionVideos from './../../media/honorableMentionVideos.js';
import {Accordion, AccordionItem} from "@heroui/react";

import {ReferencesView} from './../../references/referencesView.jsx';

import {references, nzingaProfileRecord} from './../../../../src/constants/references.js';


export default function FreedomPage() {
 const tableColumns = [ {    key: "category", label: "CATEGORY"}, {    key: "type", label: "TYPE"},
  {    key: "title", label: "TITLE" },{    key: "subtitle", label: "SUBTITLE" },
  {    key: "url",label: "url" },
];
  const profileRecord = nzingaProfileRecord;
  return (   <div className="mx-auto sm:max-w-md max-w-md overflow-hidden rounded-xl bg-[#eee] shadow-md md:max-w-4xl">
  <div className="md:flex">
    <div className="md:shrink-0"> 
     <iframe width="560" height="315" src="https://www.youtube.com/embed/8ecAeq62qmA?si=e4pKZ_U4GSUgPuM4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
    <div className="p-8">
      <div className="text-sm font-semibold tracking-wide text-indigo-500 uppercase">Freedom vs Slavery</div>
        </div>
   </div>

</div>);
}
