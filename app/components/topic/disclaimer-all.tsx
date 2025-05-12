




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
           <p className={'disclaimer'}>This Resource assumes you are on a path to discern the or a truths among the 
         countless beliefs and opinions, available in this AI driven age. 
         That sentence was a mouthful so take a second to ensure you overstand it. </p> 
                 <p className={'disclaimer'}>This Resource offers a path for those who have</p>
         <p className={'disclaimer'}>This Akashic-ish Resource is a living document and will likely always be "in progress".  Needless to say, donations and support help that progress by minimizing the distractions that take away from investing in improving this Resource.  It will require your patience in terms of
         of content and UI (user interface) according to your appreciated and valued support.</p> 
        <div>
         <p className={'disclaimer-portfolio-aboutme'}>There is a common question in job interviews that goes...<span>"What makes you the right person for the job?"</span></p>
         <p> The truthful answer is that I have seen and been through the SDLC of so many technologies and languages that I am comfortable </p>
         <ul>
           <li>getting Business Requirements from a client.</li>
           <li>Turning those Business Requirements into technical UML diagram for developers or high level diagrams for management and sales teams. </li>
           <li>Of course after designing I can implement test cases, backend and or frontend code, database admin, scripts, data entry...</li>
           </ul>
        </div>
                  <p className={'disclaimer-tameri'}>This Resource recognized the relevant and necessary  movement toward for truths and facts be open and known so that conversations can be had without so much impedance by emotion. </p> 
           
                  <p className={'disclaimer'}>This resource will start by focusing on 3 main areas. 1. Facts about the past "history" 2. Facts About Civics and Law 3.   </p> 
                  <p className={'disclaimer-esoteric'}>History, Law, Spirituality(religion included here as a political face of Spirituality), are all connected.</p> 
                  <p className={'disclaimer-donate'}> If not for those in the Media Branch of this Record, this Opus, this Reservoir, this Record would not have been entered. If you don't contribute to this Record, it is encouraged that you contribute to theirs.</p> 
                  <p className={'disclaimer-donate-tome'}>Without hyperbole, it takes time to research, comprehend, organize and design, implement, test, update and maintain.
                  Contributions to this force, will be used for the restoration of Truth, True Freedoms, and higher Vibrations. </p> 
  </div>
<p>The 21st century finds the world recovering from well over a millenia of a supression of knowledge for economic and political power.
With, the advent of books, TV, and the internet (the World Wide Web) information and data is harder to keep suppressed.</p>

<p>The problem is some people(the top 1%, those on the hands of everything IMF, Vatican level) have a too high percentage of the info on one side of the scale. </p>
<p>On the other are the original communities swallowed by a usurpation of identity by (________?).</p>
<p>The point is that the dissemination of information doesn't happen uniformly.  Those whe grew up believing the norm were/are often hesitant/resistant to those with "new found" information</p>
</div>);
}
