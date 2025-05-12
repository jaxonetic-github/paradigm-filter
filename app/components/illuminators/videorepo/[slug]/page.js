//import Image from "next/image";
import {initialStoreState} from '../../../src/constants/state.js';
import PropTypes from 'prop-types'; // ES6
import { Card, CardHeader, CardBody, CardFooter} from "@heroui/react";

import {Accordion, AccordionItem, Avatar,Button, Image} from "@heroui/react";
import React from "react";
import Link from 'next/link'



export const YoutubeEmbed = ({ embedId }) => (
  <div className="video-responsive">
    <iframe
      width="480"
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
 *
   export function ProfileView({ params }) {
  const [isHovering, setHovering] = React.useState(true);
    const [hoveringKey, setHoveringKey] = React.useState(true);

  const [resourceID, setResourceID] = React.useState(-1);
  var [showVideos, toggleShowVideos] = React.useState(false);
  const PROFILE_GRID_CSS = "grid grid-cols-1 sm:grid-cols-3 gap-5 md:grid-cols-4";
     let itemLinks = dataArray;

      let links =itemLinks.map((resource, index)=><Link className={"hover:border-1" } href={`/components/videorepo/videoRepository.js`}>
        <div  key={resource.key} className={"topdiv hover:border-1 m-5 p-2"+(resourceID==-1 || (hoveringKey==resourceID==resource.key))? "":"hidden" }
          onMouseEnter={() => {
            console.log("Entering ",resource.key);
            if(resourceID==resource.key) setHovering(true);
             else setHovering(false);
            setHoveringKey(resource.key);
           }}
          onMouseLeave={() => {setHovering(false)}}
         >
        <div><Avatar className='w-25 h-25 text-large rounded-full'
            showFallback isBordered width='35' height='35' src={resource.images[0]}/>
            <p>{resource.title}</p><p>{resource.description}</p>
            <p>{(hoveringKey==resource.key)?"is":" is not"} hovering over {resource.key}</p><p>resource.key={resource.key}, resourceID={resourceID}</p>
            </div>
            <div  aria-label={resource.title} subtitle={resource.generalCategory} title={'Videos'} >
            <Button onPress={ ()=>{ setResourceID(resource.key); toggleShowVideos(!showVideos);} }><span>({resource?.payload?.items?.length})  Lectures </span></Button>
    resourceView(resource) 
        </div></div></Link>);
     
     return ( 
            <div id="linksdiv" className={(true )? PROFILE_GRID_CSS :''} >{links}</div>);
}

*/

/**
 *       <Avatar showFallback name="Jane" src="https://images.unsplash.com/broken" />
 * className="w-20 h-20 text-large"   grid grid-cols-5 sm:grid-cols-4 md:grid-cols-5 
 * @param dataArray : initialStoreState.resourcesData.youTubeResources
 */  
 
  export  function resourceView(resource) {

      return (<div  className="bg-beige grid grid-cols-1 sm:grid-cols-2 gap-2 md:grid-cols-3 video-repos">
              {resource?.payload?.items?.map(videoRecord =>
                <Card  key={videoRecord.id.videoId} className="bg-gray border-1 "><CardHeader><Image  width={120} height={90} alt="NextUI hero Image" src={videoRecord.snippet.thumbnails.default.url}/></CardHeader>
                <CardBody className="bg-blue">
                <div  className="" key={videoRecord.id.videoId}>
                <div><p>{videoRecord.snippet.title}</p>
                     <p><span>description :: </span>{videoRecord.snippet.description}</p></div>
                </div>
                </CardBody><CardFooter className="hidden"> <YoutubeEmbed embedId={videoRecord.id.videoId} /></CardFooter></Card>
              )}</div>);
     
}

export default async function Page({ params }) {
  const { slug } = await params
  return <div>My Post: {slug}</div>
}



