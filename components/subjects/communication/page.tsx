
"use client"
import React from "react";
import  {Image,Divider, Link} from "@heroui/react";
import {YoutubeEmbed} from '@/components/utils/youtubeEmbed.js';
import {Tabs, Tab, Card, CardBody} from "@heroui/react";
import {Popover, PopoverTrigger, PopoverContent, Button} from "@heroui/react";
import CustomDialog from '@/components/utils/CustomDialog.tsx';
import {ReferenceView, referenceFilter, ReferencesGridView} from '@/components/subjects/references/referencesView.jsx';

import TricksOfTheTrade from '@/components/subjects/communication/tricksOfTheTrade.tsx';
import ExamplesOfDebates from '@/components/subjects/communication/debateExamples.tsx';
import AccordionView from '@/components/utils/CustomAccordion.tsx';

function TabView(){
    return (<div>
    
        <div className="max-w-md">
      <Tabs aria-label="Options">
        <Tab key="Wesling" title="Tricks of the Trade">
          <Card>
            <CardBody className="mx-auto flex">
<TricksOfTheTrade/>
            </CardBody>
          </Card>
        </Tab>
        <Tab key="KwameToure" title="Composure Under Fire">
          <Card>
            <CardBody>
                 <ExamplesOfDebates/>
            </CardBody>
          </Card>
        </Tab>
       
      </Tabs>
    </div>
        </div>);
}





export default function ReferenceSnippet(){

  return (<div className='mx-5'>

  <AccordionView title="Recommended Communication Resources">
<p>Developing communication skills is a lifelong process that contributes to personal growth,
 continuous learning, and enhanced self-awareness, all of which enrich both personal and professional experiences.</p>

        <ReferencesGridView  rows={referenceFilter([150,151,152])}/>
  </AccordionView>
     <Divider  className='my-5'/>
       <AccordionView title="Tricks of the Trade">
<TricksOfTheTrade/>
  </AccordionView>

      <Divider className='my-5'/>

     <p> Typically, communication can be classified into two main types:</p>

<p>Verbal communication: This form of communication includes the use of sounds and language in order to convey your intended message.</p>
<p>Non-Verbal communication: This includes everything else other than words like the posture, appearance, body language and eye movements of the speaker which helps emphasize the message being conveyed.</p>

<p>Both types of communication are equally important since they complement each other in order to eliminate confusion and ensure that the message being conveyed is clearly understood by its intended recipient.</p>
          <AccordionView title= "Examples of handling adversity">

    <ExamplesOfDebates/>
      </AccordionView>
</div>);
}
