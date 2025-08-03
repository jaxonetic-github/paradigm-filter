
import React from "react";
import {specificallyCompiledVideos, BLACKVWHITE_VIDEOLIST_KEY} from './../../../../src/constants/references.js';
import HonorableMentionVideos from './../../media/honorableMentionVideos.js';
import Link from 'next/link';
import {YoutubeEmbed} from './../../../../_utils/youtubeEmbed.js';
import {Accordion, AccordionItem, Divider} from "@heroui/react";

//https://www.youtube.com/live/bA9-pwts4Tg?si=uguefX7v935svwDA&t=3159
//export function Video({videoSource}:AppProps) { return (<video key={videoSource.path} width="320" height="240" controls preload="none"><source src={ videoSource.path} type="video/mp4" />Your browser does not support the video tag.</video>)}
/**       <div className='mx-5'>
                <HonorableMentionVideos  dataArray={specificallyCompiledVideos[BLACKVWHITE_VIDEOLIST_KEY]}  /> 
      </div>
   */
export default function Blackness(){
   const theodoreAllenQuote0 = 'When the first Africans arrived in Virginia in 1619 there were no white people, nor according to the colonial records, would there be for another 60 years';
 const browderSnippet1Quote = 'The first step, the first step we want to focus on, is the step that you must be actively engaged be actively in the process of freeing your mind.  You must work to free your mind. You have to do that, begin the process of freeing your mind by  evaluating everything that you&apos;ve been taught. Everything. And develop a discriminating eye so that you can ultimately learn what not to  believe. You don&apos;t want to believe what everyone tells you. You want to get some information to reinforce that, to validate. that information to determine  whether or not it should be programmed within your consciousness';

 const browderSnippet0Quote ='All of these things are done in order to manipulate the images which will ultimates affect and influence your consciousness. Now we need to realize that racism is an unavoidable fact of life in America. We need to understand how racist images attack us  constantly 24 hours a day. We need to understand that whoever is responsible for craeting images will ultimately determine  your level of consciousness.  How you feel about yourself[personal note: like feeling dependent on the government or feeling unable to     make change] is determined by how you see yourself. And if the images that are constantly projected around you say that you are less  than human,  then you will act less than human. Others will regard you as less than human.  Carter G Woodson said it best, when he said  &quot;when you control a Man*apos;s thinking you don&apos;t have to worry about his actions, you don&apos;t have to  tell him to stand here or there for he will find his proper place and will stay in it.  A person who has been miseducated does not have to be ordered to the back door in any society for they will go  without being told.  In fact, if there is no back door, there very nature is to demand one.  Why? Because their miseducation makes it necessary[like falling under someon&apos;s spell].&quot;';
 const browderSnippits = [{url:'https://youtu.be/fRAHawFgNE4?si=iUzU95VYl6uBTa1h&t=1498', transcription:browderSnippet1Quote},{url:'https://youtu.be/fRAHawFgNE4?si=1gb5qHpt4D9iZSgo&t=1388', transcription: browderSnippet0Quote}];

 const snippet = {src:'The Invention of the White Race, Vol 1. 1994',
                      quote:theodoreAllenQuote0,
                      coqmmentaries:['videos/history/commentaries/TheInventionOfTheWhiteRacebyTheodoreWAllenPresentationbyJeffreyBPerry.mp4']};

 const kurimeo_evidenseofblack_snippet = {src:'Africans and Native Americans',
                      quote:'&quot;It is apparent from the evidence that the term negro or its equivalent was not used for a race or a single stock of people or to point to ancestry or ethnicity. It was usually a simple description for perceived color.&quot;',
                      commentaries:['https://www.youtube.com/live/a3GaFbkRwYo?si=XBuVTNUSI6_Fys7o']};

  return (<><div className='mx-5'>
        <div>
        <h3 className="font-bold text-lg">The colorable "b(B)lack" Construct</h3>

<Link target={'_blank'} href={'https://drive.proton.me/urls/CZTC5AZE10#vP1nbuMxRvdb'}>The Use of the Word Negro...</Link>

    </div>




</div></>);
}
/**



   <ul>
    <li>Chapter 3 of Africans and Native Americans talks illustrates how the terms negro and black has been applied to people of American decent.  (28)[https://www.youtube.com/live/a3GaFbkRwYo?si=XBuVTNUSI6_Fys7o]</li>
    <li>&quot;It is apparent from the evidence that the term negro or its equivalent was not used for a race or a single stock of people or to point to ancestry or ethnicity. It was usually a simple
    description for perceived color.</li>
    <li>Negro or its functional equivalent mohr, moor, more (German Dutch French) in a very  broad sense.  The Portuguese also tended to use the term negro to encompass non Africans, people whose skin colow was a shade of brown... Negro or more almost  becomes equivalent to non-white or third-world in recent usage. </li>
</ul>**/

