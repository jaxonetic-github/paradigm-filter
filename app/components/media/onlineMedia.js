import {initialStoreState} from '../../src/constants/state.js';
import {Accordion, AccordionItem, Avatar, Card, CardHeader, CardBody, CardFooter} from "@heroui/react";
import {Divider, Image, Link, Tooltip,Button} from "@heroui/react";
import React from "react";


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
   export default function OnlineMedia({dataArray}) {

    //an array of Cards/Containers
   const listItems = dataArray.map((item) => 
   {
    //return a div with a list links and tooltips of the url when the user hovers over the links
      const itemLinks = item.links.map((alllinks) => 
          <div key={alllinks.type} className="border-8 relative inline-flex  place-items-center bg-yellow-600  ">
            <Link isExternal showAnchorIcon href={alllinks.url} size="lg">
            <div >
                <Tooltip content={alllinks.url}>
                <Button>{alllinks.type}</Button>
                </Tooltip> 
            </div>
            </Link>
          </div>);
      
    //return an individual Card with the info of an element from the dataArray param
    return (<Card role="figure" key={item.title} className="max-w-[400px] min-w-[400px] min-h-[400px] my-5" isFooterBlurred radius="lg" my-25>      
    <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p  className="text-tiny uppercase font-bold">{item.title}</p>
        <div>
        <span  className="font-bold text-large">Subject:</span>
        <span  className="text-default-500">{item.category}</span>
       </div> 
      </CardHeader>
      <CardBody>
    <Image  src={item.imageURI} alt="Card background"
          className="object-cover "
          />{item.description}
        </CardBody>
        <CardFooter className="before:bg-white/22 border-white/20 border-1 overflow-hidden py-1  before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
        <div >
     {itemLinks}</div></CardFooter></Card>)
    });

//actual Element
  return (<article className=" min-h-screen  ">
<h3>Recommended Media Outlets</h3>

          <Divider className="my-4" />
           <div className="flex flex-wrap    justify-center justify-evenly">
            {listItems}
            </div>
     <Divider className="my-4" />
        </article>);
 }//OnlineMedia


