//import Image from "next/image";

import {initialStoreState} from './../../../src/constants/state.js';
import PropTypes from 'prop-types'; // ES6
import { Card, CardHeader, CardBody, CardFooter} from "@heroui/react";

import {Accordion, AccordionItem, Avatar,Button, Image} from "@heroui/react";
import React from "react";
import Link from 'next/link'



export const YoutubeEmbed = ({ embedId }) => (
  <div className="video-responsive">
    <iframe
      width="380"
      height="280"
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
);
YoutubeEmbed.propTypes = {
  //embedId: PropTypes.string.isRequired
};



/**
 *       <Avatar showFallback name="Jane" src="https://images.unsplash.com/broken" />
className="w-20 h-20 text-large"   grid grid-cols-5 sm:grid-cols-4 md:grid-cols-5 
 * @param dataArray : initialStoreState.resourcesData.youTubeResources
 *  
 */
   export default async function Illuminator( args ) {
        console.log("1args=>",args);

        const { slug } = await args.params;
        const resources = await initialStoreState.resourcesData.youTubeResources;
    console.log(slug,"args=>",args);

  const PROFILE_GRID_CSS = "grid grid-cols-1 sm:grid-cols-3 gap-5";
 
    // let resource = args.dataArray|| initialStoreState.resourcesData.youTubeResources ;

      return(resources[slug].images? <div className={"hover:border-1" } href={`/components/videorepo/videoRepository.js`}>
        
        <div><Avatar className='w-25 h-25 text-large rounded-full'
            name={resources[slug].title} isBordered width='35' height='35' src={resources[slug].images[0]}/>
            <p>{resources[slug].title}</p><p>{resources[slug].description}</p>
            </div>
            <div  aria-label={resources[slug].title} subtitle={resources[slug].generalCategory} title={'Videos'} >
           
                             <span>({resources?.payload?.items?.length})  Lectures </span>
         
              {resourceView(resources[slug]) }
        </div></div>:<p>{slug+'----'+resource.length}</p>);
    
}



/**
 *       <Avatar showFallback name="Jane" src="https://images.unsplash.com/broken" />
 * className="w-20 h-20 text-large"   grid grid-cols-5 sm:grid-cols-4 md:grid-cols-5 
 * @param dataArray : initialStoreState.resourcesData.youTubeResources
 */  
 
  export  function resourceView(resource) {
console.log("resource",resource);
      return (<div  className="bg-beige grid  sm:grid-cols-2 gap-2 md:grid-cols-2 video-repos">
              {resource?.payload?.items?.map(videoRecord =>
                <Card  key={videoRecord.id.videoId} className="bg-gray border-1 ">
                <CardHeader><Image  width={120} height={90} alt="NextUI hero Image" src={videoRecord.snippet.thumbnails.default.url}/></CardHeader>
                <CardBody className="bg-blue">
                <div  className="" key={videoRecord.id.videoId}>
                <div><p>{videoRecord.snippet.title}</p>
                     <p><span>description :: </span>{videoRecord.snippet.description}</p></div>
                </div>
                </CardBody><CardFooter className=""> <YoutubeEmbed embedId={videoRecord.id.videoId} /></CardFooter></Card>
              )}</div>);
     
}



