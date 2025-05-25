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

 	const openWindow = (event:any) => {
  window.open('https://youtube.com/playlist?list=PL-DGnkOdP-k3ChNwDLSf7hfnqT5XvefK0&si=n6y9u_Xa7Wfo6E5N', "_blank", 'left=100,top=100,width=320,height=320');
	}

      let _literaryQuoteArray = [{quoted:'C. J. Keyset', source:'Human Worth of Rigorous Thinking', quote:`Out of that past we have come. Into it we are constantly returning. Meanwhile it is of the utmost importance to our lives. It contains the roots of all we are, and of all we have of wisdom."`,}]

 return (<div>

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

