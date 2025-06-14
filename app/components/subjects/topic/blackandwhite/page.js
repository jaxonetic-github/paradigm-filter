
'use client';
import React from "react";
import {specificallyCompiledVideos, BLACKVWHITE_VIDEOLIST_KEY} from './../../../../src/constants/references.js';
import HonorableMentionVideos from './../../media/honorableMentionVideos.js';
import Blackness from './blackness.js';
import Whiteness from './whiteness.js';
import Greyness from './greyness.js';

import {YoutubeEmbed} from './../../../../_utils/youtubeEmbed.js';
import {Accordion, AccordionItem, Divider, Image, Link} from "@heroui/react";
import {Tabs, Tab, Card, CardBody} from "@heroui/react";
import CustomDialog from './../../../../_utils/CustomDialog.tsx'

//https://www.youtube.com/live/bA9-pwts4Tg?si=uguefX7v935svwDA&t=3159
//export function Video({videoSource}:AppProps) { return (<video key={videoSource.path} width="320" height="240" controls preload="none"><source src={ videoSource.path} type="video/mp4" />Your browser does not support the video tag.</video>)}
/**       <div className='mx-5'>
                <HonorableMentionVideos  dataArray={specificallyCompiledVideos[BLACKVWHITE_VIDEOLIST_KEY]}  /> 
      </div>
   */
export default function Colorisms(){
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

  return (<div className='mx-5'>
        <Link  underline="always" target='_blank' href={'http://doi.org/10.29164/23raceandracism'}>Race?</Link>

 <div className="flex flex-wrap gap-4">
 <p>Humans come in various shades of melanin or skin tones.   The use of crayon colors to identify a people perpetuates a moderm myth, belief, a spell; cast by 
 the shadow of colonial propaganda called infamously called &quot;white supremacy&quot;. 
</p>
<CustomDialog title='Before Color Prejudice Ancient View of Blacks'><iframe src="https://archive.org/embed/beforecolorpreju0000snow" width="560" height="384" frameborder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowfullscreen></iframe></CustomDialog>
<CustomDialog title='&quot;Black&quot; slave owners--Anthony Johnson'><iframe width="560" height="315" src="https://www.youtube.com/embed/RibI0Nd4UD4?si=-d5idPrXHSOeIVOY&amp;start=284" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></CustomDialog>
<p className={'take-away'}>During the formation of the British US colonies from colonial territories
 into  nations, the US Congress passed the Naturalization Act in 1790 to describe the parameter for state citezenship.
 There was no Federal US Citizen yet; only citizens of one of the 13 states(nations) of the Union.</p>
 <p>In the late 1700's, property holders, those with vested interest or business with the state were citizens.
 They were, in fact, &quot;free white people&quot;.  On the surface, it seems racist until you see how the colonizers
 defined  <CustomDialog title='free men'></CustomDialog> and  <CustomDialog title='free white people'></CustomDialog>.   
  </p>  
<div> Johan BlumenBach and Carl von Jonais helped popularize the idea of scientifically justified racism.</div>

  
<p>Someone&apos;s &quot;white&quot;-ness was and is (as of 2025) not based on skin color.</p>

All Asiatics don't fit the yellow scheme 

<CustomDialog title='Andamanese'><iframe src="https://www.youtube.com/embed/lZK_7WLaiXU?si=OnjFsFoUtQdSLsGK" width="560" height="384" frameBorder="0" allowFullScreen></iframe></CustomDialog>    


 <div className="flex w-full flex-col">
      <Tabs aria-label="Options">
        <Tab key="blacks" title="Blacks">
          <Card>
            <CardBody>
                <Blackness/>
            </CardBody>
          </Card>
        </Tab>
        <Tab key="whites" title="Whites">
          <Card>
            <CardBody>
                <Whiteness/>
            </CardBody>
          </Card>
        </Tab>
          <Tab key="grey" title="Grey People">
          <Card>
            <CardBody>
                <Greyness/>
            </CardBody>
          </Card>
        </Tab>
          <Tab key="timeline" title="Timeline">
          There is a difference between noticing that a percentage of a group  of  peoples have  
          certain features or characteristics and systemically excluding them from the social order
           because of those features. 
          

          Here is a light investigation into ideas of skin based sistemic racial prejudices of past civilizations.
          From Blacks in Antiquity...
          <div className="">
          <div className="grid grid-cols-1 sm:grid-cols-2 bg-[#444] rounded-md">
                      <Image className=" flex p-4  "
            src={'/images/blackandwhite/blackinantiquityP1.jpg'} 
            fallbackSrc={'images/imagenotavailable.jpeg'}
            alt={`Default Image not found for Blacks In Antiquity`}
          />
                      <Image className="flex p-4"
            src={'/images/blackandwhite/blackinantiquityP2.jpg'} 
            fallbackSrc={'images/imagenotavailable.jpeg'}
            alt={`Default Image not found for Blacks In Antiquity`}
          />
                                <Image className="flex p-4  "
            src={'/images/blackandwhite/blacksInAntiquityP3.jpg'} 
            fallbackSrc={'images/imagenotavailable.jpeg'}
            alt={`Default Image not found for Blacks In Antiquity`}
          />
          </div>
 </div>
        </Tab>
        <Tab key="videos" title="Colonizers and Foreigners">
          <Card>
            <CardBody>
              <div>
<p>The From Colonizer to Enslaved, The Whitewash, Paper Genocide</p>  
{YoutubeEmbed('5I_qy8wcYjE')}
<Divider/>

</div>

<div>   
    <p>US Colonists ...British Felons</p>
    {YoutubeEmbed('i2yREDMg5SY')}
    20:00::"White" Servitude in The Colony Of Virginia / European Servants & Slaves
</div>
<div>   
    <p>US Colonists ...British Felons</p>
    {YoutubeEmbed('W-aRUJlHd4I')}
    20:00::"White" Servitude in The Colony Of Maryland / European Servants & Slaves
</div>
<div>   
    <p>US Colonists ...British Felons</p>
    {YoutubeEmbed('dPdkia69Y7k')}
    20:00::"White" Servitude in Colonial South Carolina / European Servants & Slaves
</div>
<div>   
    <p>US Colonists ...British Felons</p>
    {YoutubeEmbed('96qN4dkut4w')}
    20:00::"White" Servitude in Colonial North Carolina / European Servants & Slaves
</div>
            </CardBody>
          </Card>
        </Tab>
      </Tabs>
    </div>
    
    </div>



   
          
</div>);
}


