//import {initialStoreState} from './src/constants/state.js';
//import {Accordion, AccordionItem, Avatar, Card, CardHeader, CardBody, CardFooter} from "@heroui/react";
//import {Divider, Image, Link, Tooltip,Button} from "@heroui/react";
'use client';
import React from "react";
import {Image, Button, Link, } from "@heroui/react";

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

 	const openWindow = (event:any) => {
  window.open('https://youtube.com/playlist?list=PL-DGnkOdP-k3ChNwDLSf7hfnqT5XvefK0&si=n6y9u_Xa7Wfo6E5N', "_blank", 'left=100,top=100,width=320,height=320');
	}

      let _literaryQuoteArray = [{quoted:'C. J. Keyset', source:'Human Worth of Rigorous Thinking', quote:`Out of that past we have come. Into it we are constantly returning. Meanwhile it is of the utmost importance to our lives. It contains the roots of all we are, and of all we have of wisdom."`,}]

 return (<div>
 	<div key={quoteRecord.quoted} className="md-auto flex max-w-sm items-center gap-x-4 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
      		<div className="align-center flex">
    <div className="mx-auto self
    -center flex" >
    <Image  src={ PROFILE_IMG_PATH + quoteRecord.quotersImage } alt="ChitChat Logo"  />
      <p className="text-xs font-medium text-black dark:text-white">{quoteRecord.quoted}</p>
      <p className ="text-gray-500 dark:text-gray-400">{quoteRecord.quote}</p>
      <p>{quoteRecord.extraInfo}</p>
    </div>
    </div>
</div>
Conversation--Before we were Black -- zXNJRAb5RbA
Analysis Yusef--[v4-EvoEilkk]
<Link target='_blank' href='https://1024terabox.com/s/1L1LCfrsL5qOSJbdt-PNf6g'>Alton Maddox (audio)on What Brings People Together.</Link>

WHAT IS YOUR NATIONALITY? WHO ARE YOU IN AMERICA?
 	<p> </p> 
 	<ol className={'max-w-md'}>
		<li><Link target='_blank' href='https://www.govinfo.gov/content/pkg/GPO-STYLEMANUAL-2016/pdf/GPO-STYLEMANUAL-2016-7.pdf'>US Governmental Publishing Office Style Manual</Link></li>
		<li><Button
      disableRipple
      className="relative border-1 overflow-visible rounded-full hover:-translate-y-1 px-12 shadow-xl bg-background/30 after:content-[''] after:absolute after:rounded-full after:inset-0 after:bg-background/40 after:z-[-1] after:transition after:!duration-500 hover:after:scale-150 hover:after:opacity-0"
      size="md"
      variant="bordered"
      onPress={openWindow}
    >
      14 video Youtube playlist
    </Button>of Richard McDonald speaking on the multiple citizenships in the "US States".</li>
    <li>
    	<Button
as={Link}
	target='_blank'
      disableRipple
      className="relative border-1 overflow-visible rounded-full hover:-translate-y-1 px-12 shadow-xl bg-background/30 after:content-[''] after:absolute after:rounded-full after:inset-0 after:bg-background/40 after:z-[-1] after:transition after:!duration-500 hover:after:scale-150 hover:after:opacity-0"
      size="md"
      variant="bordered"
     href='https://youtu.be/WYoWu5Hr_Ks?si=qL9rDntDCoIzNYWy'
    >
      Who or What are you in America
    </Button>
    </li>
 	</ol>
 	

 	 
 	
<p></p>
<p></p>

<p></p>
<p></p>

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


