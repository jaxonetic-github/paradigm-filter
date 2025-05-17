//import Image from "next/image";

import {initialStoreState} from './../../../src/constants/state.js';
//import PropTypes from 'prop-types'; // ES6
import { Card, CardHeader, CardBody, CardFooter} from "@heroui/react";
import {YoutubeEmbed} from './../../../_utils/youtubeEmbed.js';
import {Accordion, AccordionItem, Avatar,Button, Image} from "@heroui/react";
import React from "react";
import Link from 'next/link'






/**
 *       <Avatar showFallback name="Jane" src="https://images.unsplash.com/broken" />
className="w-20 h-20 text-large"   grid grid-cols-5 sm:grid-cols-4 md:grid-cols-5 
 * @param dataArray : initialStoreState.resourcesData.youTubeResources
 *  
 */
   export default async function Illuminator({params}: {params: Promise<{ slug: string }>})  
   {
        console.log("1args=>",params);

        const { slug } = await params;
        const resources = await initialStoreState.resourcesData.youTubeResources;
    console.log(parseInt(slug),"<-slug=>");

  const PROFILE_GRID_CSS = "grid grid-cols-1 sm:grid-cols-3 gap-5";
 
    // let resource = args.dataArray|| initialStoreState.resourcesData.youTubeResources ;

      return(resources[parseInt(slug)].images? <div className={"hover:border-1" } >
        
        <div><Avatar className='w-25 h-25 text-large rounded-full'
            name={resources[parseInt(slug)].title} isBordered  src={resources[parseInt(slug)].images[0]}/>
            <p>{resources[parseInt(slug)].title}</p><p>{resources[parseInt(slug)].description}</p>
            </div>
            <div  aria-label={resources[parseInt(slug)].title} >
           
                             <span> Lectures </span>
         
              {resourceView(resources[parseInt(slug)]) }
        </div></div>:<p>{parseInt(slug)+'--of--'+resources.length}</p>);
    
}
/*{
    key: 1,
    title: 'Dr Ivan Sertima',
    url: 'http://www.journalofafricancivilizations.com/VanSertima',
    images: [
      'https://i.pinimg.com/474x/da/63/f0/da63f05d83205619ca686d744b160dff.jpg',
    ],
    generalCategory: ['History'],
    description: 'Bio',
    payload: SERTIMA_YOUTUBE_PAYLOAD_MOCK,
  }

  {    
    key: number;
    title: string;
    url: string;
    images: [];
    generalCategory: [];
    description: string;
    payload: [];
  }
*/


/**
 * 
 * 
 * 
  { key: number; title: string; url: string; images: string[]; generalCategory: string[]; description: string; 
    payload: 
         { items: { kind: string; etag: string;  id: { kind: string; videoId: string; }; snippet: { ...; }; }[];
         }; 
   } | { ...; } | { ...; } | { ...; } | { ...; } 

   { key: number; title: string; url: string; images: string[]; generalCategory: string[]; description: string; 
    payload: 
         { items: { kind: string; etag: string;  id: { kind: string; videoId: string; }; snippet: object; }[];
         }; 
   } 
 []) 
 
 */
/**
 *       <Avatar showFallback name="Jane" src="https://images.unsplash.com/broken" />
 * className="w-20 h-20 text-large"   grid grid-cols-5 sm:grid-cols-4 md:grid-cols-5 
 * @param dataArray : initialStoreState.resourcesData.youTubeResources
 */  
 
    function resourceView(resource: any) {
      return (<div  className="bg-beige grid  sm:grid-cols-2 gap-2 md:grid-cols-2 video-repos">
              {resource?.payload?.items?.map((videoRecord:any) =>
                <Card  key={videoRecord.id.videoId} className="bg-gray border-1 ">
                <CardHeader><Image  width={120} height={90} alt="NextUI hero Image" src={videoRecord.snippet.thumbnails.default.url}/></CardHeader>
                <CardBody className="bg-blue">
                <div  className="" key={videoRecord.id.videoId}>
                <div><p>{videoRecord.snippet.title}</p>
                     <p><span>description :: </span>{videoRecord.snippet.description}</p></div>
                </div>
                </CardBody><CardFooter > {YoutubeEmbed(videoRecord.id.videoId)}</CardFooter></Card>
              )}</div>);
     
}



