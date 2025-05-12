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
 * [{
    title: 'House of Reawakening Minds',
    links: [
      {type: 'website', url: 'https://www.houseofreawakeningminds.com'},
      {
        type: 'youtube',
        url: 'https://www.youtube.com/@officialhouseofre-awakenin5190',
      },
    ],
    imageURI:
      'https://yt3.googleusercontent.com/ytc/AOPolaQI2TZitxNTYRzNbMmd6yxZI9c8HuP1QntTluth=s176-c-k-c0x00ffffff-no-rj-mo',
    url: 'https://www.youtube.com/channel/UCbf44EY8e1cT34vfpxcHSKg/videos',
    category: 'occult',

    description:
      'House of Re-Awakening Minds is a holistic center for spiritual grounding, free thought, self-discovery and Moorish Science. An awakening experience for all ages.',
 *  },]
 * 
 */
//Franz Fernon--oppressed oppress themselves
//	{quoted: 'Declaration of Independance', quotersImage:'declaration-of-independence.jpg', extraInfo:'', quote:' ...that all men are created equal, that they are endowed by their Creator with certain unalienable Rights, that among these are Life, Liberty and the pursuit of Happiness.--That to secure these rights, Governments are instituted among Men, ...'},
export default function Quotes () {
	const PROFILE_IMG_PATH = '/images/profiles/';

	 const styles = {
        textInset:{ border:'3px solid rgba(0, 0, 0, 0.05)'}, 
   };
	   let _quoteArray = [{quoted: 'Malik El Shabazz', quotersImage:'malcom-x.webp', extraInfo:'From International Socialist Review, Vol.28 No.2, March-April 1967, pp.3-48.', quote:'...see, the man is tricky, brothers and sisters. I mean the man is tricky. He’s a master of tricks. And if you don’t realize how tricky he is, he’ll have you maneuvered right back into slavery. I shouldn’t say back into slavery because we’re not out of it yet.'},
	   					{quoted: 'Malik El Shabazz', quotersImage:'Malcom-X-El-Hajj-Malik-El-Shabazz-910x512.jpg', extraInfo:'Speech at Embassy Auditorium. Los Angeles, California. April 16, 1961', quote:'These are facts that may sound cruel, but yet they’re facts. I don’t care how wealthy your are, if you’re not producing, you’re still a slave for your master. You’re just a wealthy slave. They got rich slaves and poor slaves. They got educated slaves and dumb slaves. They got alley slaves and they got boulevard slaves. Isn’t that right? I have to clarify these things so you’ll understand.'},
	   					{quoted: 'Malik El Shabazz', quotersImage:'malcom-x.webp', extraInfo:'', quote:'... And he loved his master more than he loved himself. That\'s why he didn\'t want his master hurt. If the master got sick, he said, "What\'s the matter boss, we sick?" When the master\'s house caught on fire, he\'d try to put the fire out.  He didn\'t want his master\'s house burned.'},
	   					{quoted: 'Steve Biko', quotersImage:'Steve_Biko_Portrait_saho-900x900-1.jpg', extraInfo:'', quote:' The most potent weapon in the hands of the oppressor is the mind of the oppressed'},
	   					{quoted: 'Dr Phil Valentine', quotersImage:'drPhilValentine.webp', extraInfo:'', quote:'Government is there to do only what the private sector won\'t, can\'t or shouldn\'t do.'},
	   					{quoted: 'Bobby Hemmit', quotersImage:'bobbyHemmitt.jpeg', extraInfo:'', quote:' You got a stop thinking og yourself as a human and start thinking as a god.'},
	   					{quoted: 'Yosef A.A. Ben-Jochannan', quotersImage:'DrBen.jpg', extraInfo:'', quote:'Truth is a continuous examination, and Fact... always supersedes belief'}
	   				]; 

 let quoteArray =_quoteArray.map((quoteRecord, index) =>{

return (<div key={quoteRecord.quoted+index} className="md-auto flex max-w-sm items-center gap-x-4 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
      		
    <div >
    <Image  src={ PROFILE_IMG_PATH + quoteRecord.quotersImage } alt="ChitChat Logo" />

      <p className="text-xs font-medium text-black dark:text-white">{quoteRecord.quoter}</p>
      <p className ="text-gray-500 dark:text-gray-400">{quoteRecord.quote}</p>
      <p>{quoteRecord.extraInfo}</p>
    </div>
</div>)});

 return (<><p className="justify-center  flex">Quotes</p>

        <div className="flex flex-wrap    justify-evenly ">
                  {quoteArray}
  </div></>);
}

