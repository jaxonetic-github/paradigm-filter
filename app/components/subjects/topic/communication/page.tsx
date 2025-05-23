
"use client"
import React from "react";
import  {Image,Divider, Link} from "@heroui/react";

import {Popover, PopoverTrigger, PopoverContent, Button} from "@heroui/react";


export default function ReferenceSnippet(){

  return (<div className='mx-5'>
<p>Ultimately, developing communication skills is a lifelong process that contributes to personal growth,
 continuous learning, and enhanced self-awareness, all of which enrich both personal and professional experiences.</p>
  <div>
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
      <li>{`In the spirit of Dr Clarck's, "I debate my equals, everyone else I teach", unless your "opponent" has facts, don't poke the emotional hornets nest of beliefs unless they are open or receptive`}</li>      
      <li>{`Cite your sources and stand on your square with facts not beliefs.`}</li>
      <li><span>{`Epistemology is important, research your researchers</span hidden>, and their sources, and even their sources' sources, if necessary.`}</span></li>
      <li>{`Be ware of monologuing. Do checkins to ensure the other is still engaged.  `}</li>
      <li>{``}</li>
    </ul>
</div>

</div>
<Divider />
     <p> Clear and open communication fosters trust, understanding, and empathy, laying the foundation 
     for healthier interactions and stronger emotional connections. Additionally, strong communication 
      skills enhance conflict resolution, helping individuals navigate disagreements more productively 
    by expressing thoughts and emotions clearly and encouraging open dialogue that leads to peaceful resolutions. </p> 

    <p>Effective communication is about more than just speaking — it also involves active listening. Being able to truly 
    hear and understand others’ perspectives strengthens connections and promotes empathy, which contributes to
     emotional intelligence</p> 
     <Divider/>
     <p>
     Typically, communication can be classified into two main types:</p>

<p>Verbal communication: This form of communication includes the use of sounds and language in order to convey your intended message.</p>
<p>Non-Verbal communication: This includes everything else other than words like the posture, appearance, body language and eye movements of the speaker which helps emphasize the message being conveyed.</p>

<p>Both types of communication are equally important since they complement each other in order to eliminate confusion and ensure that the message being conveyed is clearly understood by its intended recipient.</p>
    
    <Link href={'https://archive.org/details/crucialconversat0000unse_o5j4'}>Crucial conversations : tools for talking when stakes are high</Link>
</div>);
}
