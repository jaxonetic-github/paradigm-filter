//import {initialStoreState} from './src/constants/state.js';
//import {Accordion, AccordionItem, Avatar, Card, CardHeader, CardBody, CardFooter} from "@heroui/react";
//import {Divider, Image, Link, Tooltip,Button} from "@heroui/react";
'use client';
import React from "react";
import {Image, Button, Link, Divider} from "@heroui/react";
import {ReferenceView,referenceFilter, ReferencesGridView} from './../references/referencesView.jsx';
import CustomDialog from '@/components/utils/CustomDialog.tsx';
import {YoutubeEmbed, openWindow,} from '@/components/utils/youtubeEmbed.js';
import AccordionView from '@/components/utils/CustomAccordion.tsx';
import {ExternalWindowButton} from '@/components/utils/externalWindowButton.tsx';

import Constitution from '@/components/subjects/civics/constitution.tsx';
import Rights from '@/components/subjects/civics/rights.tsx';
import Money from '@/components/subjects/civics/money.tsx';
import Freedom from '@/components/subjects/civics/freedom.js';
import Trials from '@/components/subjects/civics/blackandwhite/trialsAndcases.tsx';
import ColoredPeople from '@/components/subjects/civics/freedom.tsx';

import {Tabs, Tab} from "@heroui/react";
/**
 * 
 * @Description This element displays a Card with information from @param dataArray
 * @param dataArray : initialStoreState.resourcesData.onlineMediaContent from initial state
 *  literally an arrary of 
 * 	
 * 
 */
//Franz Fernon--oppressed oppress themselves
//	{quoted: 'Declaration of Independance', quotersImage:'declaration-of-independence.jpg', extraInfo:'', quote:' ...that all men are created equal, that they are endowed by their Creator with certain unalienable Rights, that among these are Life, Liberty and the pursuit of Happiness.--That to secure these rights, Governments are instituted among Men, ...'},
export default function Civics () {
	const PROFILE_IMG_PATH = '/images/profiles/';
const 	quoteRecord = {quoted: 'Dr Phil Valentine', quotersImage:'drPhilValentine.webp', extraInfo:'', quote:'Government is there to do only what the private sector won\'t, can\'t or shouldn\'t do.'};

      let _literaryQuoteArray = [{quoted:'C. J. Keyset', source:'Human Worth of Rigorous Thinking', quote:`Out of that past we have come. Into it we are constantly returning. Meanwhile it is of the utmost importance to our lives. It contains the roots of all we are, and of all we have of wisdom."`,}]

 return (<div>


 	<div key={quoteRecord.quoted} className="md-auto flex max-w-sm items-center gap-x-4 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
      		<div className="align-center flex">
    <div className="mx-auto self-center flex" >
    <Image  src={ PROFILE_IMG_PATH + quoteRecord.quotersImage } alt="ChitChat Logo"  />
      <p className="text-xs font-medium text-black dark:text-white">{quoteRecord.quoted}</p>
      <p className ="text-gray-500 dark:text-gray-400">{quoteRecord.quote}</p>
      <p>{quoteRecord.extraInfo}</p>
    </div>
    </div>
</div>



<CustomDialog title='Analysis Yusef'>{YoutubeEmbed('v4-EvoEilkk')}</CustomDialog>


 	<p>Nationality and Citizenship</p> 
 	<ol className={'max-w-md'}>
<li><Link target='_blank' href='https://1024terabox.com/s/1L1LCfrsL5qOSJbdt-PNf6g'>Alton Maddox (audio)on What Brings People Together.</Link></li>
  	</ol>	 
 	
<p></p>
<p></p>

<p></p>
<p></p>

    <div className='mx-5'>   
    <AccordionView title="Constitution">
       <Constitution/>
  </AccordionView>
       </div>

    <div className='mx-5'>
        <AccordionView title="Rights &amp; Freedoms">
       <div className="flex flex-wrap gap-4">
        <Tabs key="warning" aria-label="Tabs colors" color="warning" radius="full">
          <Tab key="rights" title="Rights"><Rights/></Tab>
          <Tab key="freedom" title="Freedom"><Freedom/></Tab>
        </Tabs> 
    </div>
  </AccordionView>
       </div>

    <div className='mx-5'>   
    <AccordionView title="Money &amp; Economics">
       <Money/>
  </AccordionView>
       </div>

    <div className='mx-5'>   
    <AccordionView title="Trials and Cases">
       <Trials/>
  </AccordionView>
       </div>
 	</div>);
}

 function Preface() {
     
  const PROFILE_GRID_CSS = "grid grid-cols-1 sm:grid-cols-3 gap-5";

     return (<div id="linksdiv" className={ PROFILE_GRID_CSS } >
       
<p> So many modern controversies..., wMch have obtained 
in this country, have originated mostly itt the absence of a just
and pr0per understanding and appreciation of the Theory of our Government &quot; its National, State, and Territorial relations, 
under the Constitution, and the changes which these have undergone by the extension of our National 
domaiil and jurisdiction beyond the anticipations and calculations of its framers
</p>
<p>
In preparing this work 
for the press, I have endeavored to develope these relations and changes in their complicity with this agitating
 topic, with A view to a more general understanding of it^ and a more harmonious acquiesence in the privileges,
  as well as the restraints, of which it has been made the subject.
</p>
<p>
The Earl of Chatham, standing ill his place in the British House of Lords to oppose the aggressions of Ministry 
upon the rights of the American Colonies, in 1775, made the memorable and truthful declaration — 
" In every free State it is the Constitution, and the Constitution only, which limits both Sovereignty and Allegiance. 
This doctrine is no temporary doctrine taken up on particular occasions, to answer particular purposes. It is involved in no metaphysical doubts and intricacies, but is clear, precise, and determinate. It is recorded in all our Law books. It is written in the great Volume of Nature."
</p>

     </div>);
}


