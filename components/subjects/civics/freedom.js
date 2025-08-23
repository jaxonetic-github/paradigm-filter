import React from "react";
import  {Link, Button,Image} from "@heroui/react";
import HonorableMentionVideos from '@/components/subjects/media/honorableMentionVideos.js';
import {Accordion, AccordionItem} from "@heroui/react";
import CustomDialog from '@/components/utils/CustomDialog.tsx';

import {ReferencesView} from '@/components/subjects/references/referencesView.jsx';
import  {YoutubeEmbed} from "@/components/utils/youtubeEmbed.js";

import {references, nzingaProfileRecord} from '@/src/constants/references.js';


export default function FreedomPage() {

  const profileRecord = nzingaProfileRecord;
  return ( <div>  <div className="mx-auto sm:max-w-md max-w-md overflow-hidden rounded-xl bg-[#eee] shadow-md md:max-w-4xl">
  
  <div className="">
  <div><p>There is no evidence that Harriet Tubman ever said,&quot;I freed thousands of slaves, and could have freed thousands more, if only they knew they were slaves&quot;; nonetheless,  the message rings true.</p></div>
    <div className="md:shrink-0"> 
     <iframe width="560" height="315" src="https://www.youtube.com/embed/8ecAeq62qmA?si=e4pKZ_U4GSUgPuM4" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
    <div className="p-8">
      <div className="text-sm font-semibold tracking-wide text-indigo-500 uppercase">Freedom vs Slavery</div>
        </div>
   </div>
</div>
