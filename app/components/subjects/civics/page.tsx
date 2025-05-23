//import {initialStoreState} from './src/constants/state.js';
//import {Accordion, AccordionItem, Avatar, Card, CardHeader, CardBody, CardFooter} from "@heroui/react";
//import {Divider, Image, Link, Tooltip,Button} from "@heroui/react";
import React from "react";
import {Image} from "@heroui/image";

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

	 const styles = {
        textInset:{ border:'3px solid rgba(0, 0, 0, 0.05)'}, 
   };
	
      let _literaryQuoteArray = [{quoted:'C. J. Keyset', source:'Human Worth of Rigorous Thinking', quote:`Out of that past we have come. Into it we are constantly returning. Meanwhile it is of the utmost importance to our lives. It contains the roots of all we are, and of all we have of wisdom."`,}]


 return (<div>
 14 video playlist by Richard McDonald on the multiple citizenships in the "US States".
 	<iframe key='Mcdonald' width="560" height="315" src="https://www.youtube.com/embed/videoseries?si=XyEESUHi-Bkv6LUC&amp;list=PL-DGnkOdP-k3ChNwDLSf7hfnqT5XvefK0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
 	</div>);
}

