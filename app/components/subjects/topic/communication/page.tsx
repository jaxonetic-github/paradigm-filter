
"use client"
import React from "react";
import  {Image,Divider, Link} from "@heroui/react";
import {YoutubeEmbed} from './../../../../_utils/youtubeEmbed.js';
import {Tabs, Tab, Card, CardBody} from "@heroui/react";
import {Popover, PopoverTrigger, PopoverContent, Button} from "@heroui/react";
import CustomDialog from './../../../../_utils/CustomDialog.tsx';

function DebateExamples(){
    return (<div>
<p>Examples</p>
    
        <div className="max-w-md">
      <Tabs aria-label="Options">
        <Tab key="Wesling" title="Dr Francis Cress Wesling">
          <Card>
            <CardBody className="mx-auto flex">
{YoutubeEmbed('Oc-rYl9R7bs')}
{YoutubeEmbed('lZsCxMcV7wE')}
{YoutubeEmbed('-ZXWaps2Z2g')}
            </CardBody>
          </Card>
        </Tab>
        <Tab key="KwameToure" title="Kwame Toure (Stokely Carmichael)">
          <Card>
            <CardBody>
{YoutubeEmbed('HvksaM7rRX0')}
            </CardBody>
          </Card>
        </Tab>
        <Tab key="shabazz" title="El Hajj Malik El Shabazz">
          <Card>
            <CardBody>
{YoutubeEmbed('7sLQTC5GcuU')}
{YoutubeEmbed('iAgNk4LzbIw')}
{YoutubeEmbed('M7SgS2yPRF0')}
{YoutubeEmbed('n88ONdIISV4')}
            </CardBody>
          </Card>
        </Tab>
        <Tab key="farrakan" title="The Honorable Minister Farrakan">
          <Card>
            <CardBody>
     {YoutubeEmbed('wwbRugNYcVk')}
 {YoutubeEmbed('CdQzPVIpmvc')}
 {YoutubeEmbed('E7P1ntj2LHc')}
 {YoutubeEmbed('LMGaBrPGyG0')}
            </CardBody>
          </Card>
        </Tab>
      </Tabs>
    </div>
        </div>);
}


function TabView(){
    return (<div>
    
        <div className="max-w-md">
      <Tabs aria-label="Options">
        <Tab key="Wesling" title="Tricks of the Trade">
          <Card>
            <CardBody className="mx-auto flex">
<TricksOfTrade/>
            </CardBody>
          </Card>
        </Tab>
        <Tab key="KwameToure" title="Composure Under Fire">
          <Card>
            <CardBody>
                 <DebateExamples/>
            </CardBody>
          </Card>
        </Tab>
       
      </Tabs>
    </div>
        </div>);
}



function TricksOfTrade(){
    return (<>  <div className='max-w-md'>
<h2>Tricks of the Trade and Rules of the Game</h2>
<p>One of our goals is to be able to have our interactions (discussion, debate,...) honorably and admirably. We can use as examples Brother Malcom and  Dr Francis Wessley on shows like Donahue or Dr Ben lecturing in the Bible Belt (Alabama</p>

 <Divider />
<div className="flex ">
   <div className=" flex-row ">
    <Image
        className="my-auto p-4 h-[12%] w-48 object-cover sm:w-full md:h-full md:w-48"
        src={'/images/profiles/DrBen.jpg'} 
        fallbackSrc={'/images/imagenotavailable.jpeg'}
        alt={`Dr Ben Image`}
      />
      <p className=" w-[220px]">{'Truth is a continuous examination, and Fact... always supersedes belief'}</p>
   </div>
    <ul className='border-r-1 border-t-1 border-b-1 max-w-xs list-disc'>
      <li>{`Avoid, Cognitive Dissonance at all costs. Don't continue to defend or hold a belief that denies the facts.`}</li>
      <li>{`In the spirit of Dr Clark's, "I debate my equals, everyone else I teach", unless your "opponent" has facts, don't poke the emotional hornets nest of beliefs unless they are open or receptive`}</li>      
      <li>{`Cite your sources and stand on your square with facts not beliefs.`}</li>
      <li><span>{`Epistemology is important, research your researchers</span hidden>, and their sources, and even their sources' sources, if necessary.`}</span></li>
      <li>{`Be ware of monologuing. Do checkins to ensure the other is still engaged.  `}</li>
      <li>{`Be aware of the emotional state and interest of your audience.`}</li>
    </ul>
</div>
</div></>)
}

export default function ReferenceSnippet(){

  return (<div className='mx-5'>
<p>Ultimately, developing communication skills is a lifelong process that contributes to personal growth,
 continuous learning, and enhanced self-awareness, all of which enrich both personal and professional experiences.</p>

        <div className='flex justify-center'>
        <CustomDialog title='Connotative Dissonance'><iframe src="https://archive.org/embed/ERIC_ED323790" width="560" height="384" frameBorder="0" allowFullScreen></iframe></CustomDialog>    
              <CustomDialog title='Crucial conversations : tools for talking when stakes are high'><iframe src="https://archive.org/details/crucialconversat0000unse_o5j4" width="560" height="384" frameBorder="0" allowFullScreen></iframe></CustomDialog>    
        <CustomDialog title='Art of Deception'><iframe src="https://archive.org/embed/artofdeception00capa" width="560" height="384" frameBorder="0" allowFullScreen></iframe>        </CustomDialog>    

       </div>
<Divider />

     <Divider/>
<TabView/>
      <Divider/>

     <p> Typically, communication can be classified into two main types:</p>

<p>Verbal communication: This form of communication includes the use of sounds and language in order to convey your intended message.</p>
<p>Non-Verbal communication: This includes everything else other than words like the posture, appearance, body language and eye movements of the speaker which helps emphasize the message being conveyed.</p>

<p>Both types of communication are equally important since they complement each other in order to eliminate confusion and ensure that the message being conveyed is clearly understood by its intended recipient.</p>
    
</div>);
}
