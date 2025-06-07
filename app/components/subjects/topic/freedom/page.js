import React from "react";
import  {Link, Button,Image} from "@heroui/react";
import HonorableMentionVideos from './../../media/honorableMentionVideos.js';
import {Accordion, AccordionItem} from "@heroui/react";

import {ReferencesView} from './../../references/referencesView.jsx';

import {references, nzingaProfileRecord} from './../../../../src/constants/references.js';


export default function FreedomPage() {

  const profileRecord = nzingaProfileRecord;
  return (   <div className="mx-auto sm:max-w-md max-w-md overflow-hidden rounded-xl bg-[#eee] shadow-md md:max-w-4xl">
  
  <div className="">
  <div><p>There is no evidence that Harriet Tubman ever said,&quot;I freed thousands of slaves, and could have freed thousands more, if only they knew they were slaves&quot;; nonetheless,  the message rings true.</p></div>
    <div className="md:shrink-0"> 
     <iframe width="560" height="315" src="https://www.youtube.com/embed/8ecAeq62qmA?si=e4pKZ_U4GSUgPuM4" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
    <div className="p-8">
      <div className="text-sm font-semibold tracking-wide text-indigo-500 uppercase">Freedom vs Slavery</div>
        </div>
   </div>
  <div><p>What does freedom mean to you?  Take some time to think about this because it is not a trivial question.
  Is freedom simply not being called a slave or not having chains, or having civil rights or...? </p>


<p>What did freedom mean to the Sephardic Moors(Jews and Mohamedans) who were expelled from Al Andalusia?</p>
 <p>What about those British colonists who wanted to run themselves independent of the British monarchy?</p>
 <p>How does your concept of freedom compare to theirs?</p> 

 <p>These type of questions are important because if you don't have clarity on the concept of freedom, how could you judge whether you were free or not.
  Furthermore, if you are unable to accurately discern your freedoms, how do you know you are really free. </p> </div>

</div>);
}
