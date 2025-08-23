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


export default function CriticalThinking() {

  return (<div className=''>

 <Card>
            <CardBody>
            <p >Alton Maddox on Critical Thinking</p>
            **calling things what they are...*
            *Breaking Down the Barrier*
            <iframe width="560" height="315" src="https://www.youtube.com/embed/sYOeilUSRLU?si=aWbx4hWGXFN-U90q&amp;start=240" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
           
           <div>
<p>Evaluating Evidence</p>
<p>“When it comes to critical thinking, simply gathering information isn’t enough. What you do with that information matters.
 If you’re trying to draw a conclusion or make a decision, evidence is what will help you get there.
  Think of it as the fuel for your thinking journey. But not all evidence has equal value or authority.
   And not all evidence is helpful or relevant. It’s like breakfast. Doctors tell us that the food we eat in the morning 
   matters because it gives us energy for the day ahead. A glazed donut and a bowl of oatmeal are both breakfast foods,
    but they don’t have the same nutritional value or effect on our energy levels. Evidence works the same way. 
    Some information is fuel that will help us reach a decision. Other information distracts or misleads”
</p>
<p>216</p>

<div>
Sources

</div>
           </div>

            </CardBody>
            <CardFooter>
                          <ReferencesGridView  rows={referenceFilter([115,116,215,216])}/>
            </CardFooter>
          </Card>
         

  
</div>);
}
