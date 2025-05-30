//import Image from "next/image";

import {profiles, references} from './../../../../src/constants/references.js';
import {VideoArrayType, ProfileType, ProfilesDictionary} from './../../../../src/constants/appTypes.ts';
//import PropTypes from 'prop-types'; // ES6
import { Card, CardHeader, CardBody, CardFooter} from "@heroui/react";
import {YoutubeEmbed} from './../../../../_utils/youtubeEmbed.js';
import HonorableMentionVideos from './../../media/honorableMentionVideos.js';

import {Accordion, AccordionItem, Avatar,Button, Image, Link} from "@heroui/react";
import React from "react";






/**
 *       <Avatar showFallback name="Jane" src="https://images.unsplash.com/broken" />
className="w-20 h-20 text-large"   grid grid-cols-5 sm:grid-cols-4 md:grid-cols-5 
 * @param dataArray : initialStoreState.resourcesData.youTubeResources
 *  
 */
   export default async function IlluminatorSlug({params}: {params: Promise<{ slug: string }>})  
   {

        const { slug } = await params;
        const resources:ProfilesDictionary = await profiles;
        const profileKey= decodeURIComponent(slug);
        const profileRecord:ProfileType = resources[profileKey];
 console.log(Object.keys(resources),"--------=======------",profileKey,'---', profileRecord);

    // let resource = args.dataArray|| initialStoreState.resourcesData.youTubeResources ;
//console.log(resources[profileKey].lifespan, resources[profileKey].name,resources[profileKey].thumbnail );
      return(<div className="mx-auto sm:max-w-md max-w-md overflow-hidden rounded-xl bg-[#eee] shadow-md md:max-w-4xl">
  <div className="md:flex">
    <div className="md:shrink-0"> 
      <Image className="p-4 h-[12%] w-full object-cover sm:w-full md:h-full md:w-48"
            src={profileRecord.thumbnail} 
            fallbackSrc={'images/imagenotavailable.jpeg'}
            alt={`Default Image not found for [${profileRecord.name}]`}
          />
        </div>
    <div className="p-8">
      <div className="text-sm font-semibold tracking-wide text-indigo-500 uppercase">{profileRecord.name}</div>
       <p>{profileRecord.name}</p>
       <p>{profileRecord.lifespan}</p> 
    </div>
   </div>

     <HonorableMentionVideos   dataArray={profileRecord.videoArray}  /> 
</div>);
    
}
/*{
    key: 1, {resourceView(resources[profileKey]) }
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
     
} */  



