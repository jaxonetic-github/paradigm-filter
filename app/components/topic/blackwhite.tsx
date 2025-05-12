"use client"
import React from "react";
import  {Link,Image} from "@heroui/react";
import {nzingaProfileRecord,VIDEOS_PATH,  NO_PHOTO_ALTERNATIVE_URI, tableColumns,citationColumns,references,ProfileReferencesTable,} from './../../src/constants/references.js';

import ReferencesTable from '../references/page.js';
import {Popover, PopoverTrigger, PopoverContent, Button} from "@heroui/react";
export const theodoreAllenQuote0 = 'When the first Africans arrived in Virginia in 1619 there were no white people, nor according to the colonial records, would there be for another 60 years';
export const browderSnippet1Quote = 'The first step, the first step we want to focus on, is the step that you must be actively engaged be actively in the process of freeing your mind.  You must work to free your mind. You have to do that, begin the process of freeing your mind by  evaluating everything that you\'ve been taught. Everything. And develop a discriminating eye so that you can ultimately learn what not to  believe. You don\'t want to believe what everyone tells you. You want to get some information to reinforce that, to validate. that information to determine  whether or not it should be programmed within your consciousness '; 

export const browderSnippet0Quote ='All of these things are done in order to manipulate the images which will ultimates affect and influence your consciousness. Now we need to realize that racism is an unavoidable fact of life in America. We need to understand how racist images attack us  constantly 24 hours a day. We need to understand that whoever is responsible for craeting images will ultimately determine  your level of consciousness.  How you feel about yourself[personal note: like feeling dependent on the government or feeling unable to     make change] is determined by how you see yourself. And if the images that are constantly projected around you say that you are less  than human,  then you will act less than human. Others will regard you as less than human.  Carter G Woodson said it best, when he said  "when you control a Man\'s thinking you don\'t have to worry about his actions, you don\'t have to  tell him to stand here or there for he will find his proper place and will stay in it.  A person who has been miseducated does not have to be ordered to the back door in any society for they will go  without being told.  In fact, if there is no back door, there very nature is to demand one.  Why? Because their miseducation makes it necessary[like falling under someone\'s spell]."';
export const browderSnippits = [{url:'https://youtu.be/fRAHawFgNE4?si=iUzU95VYl6uBTa1h&t=1498', transcription:browderSnippet1Quote},{url:'https://youtu.be/fRAHawFgNE4?si=1gb5qHpt4D9iZSgo&t=1388', transcription: browderSnippet0Quote}];

export const quote = {src:'The Invention of the White Race, Vol 1. 1994',
                      quote:theodoreAllenQuote0,
                      commentaries:['videos/history/commentaries/TheInventionOfTheWhiteRacebyTheodoreWAllenPresentationbyJeffreyBPerry.mp4']};

export function Video({videoSource}) { return (<video key={videoSource.path} width="320" height="240" controls preload="none"><source src={ videoSource.path} type="video/mp4" />Your browser does not support the video tag.</video>)}

export default function ReferenceSnippet({snippet=quote}){
  const items = [
    { id: 1, name: "Item 1" },
    { id: 2, name: "Item 2" },
    { id: 3, name: "Item 3" },
  ];


  return (<div className='mx-5'>

    <div>
        <h1 className="font-bold text-lg">{snippet.src}</h1>
        <p>{snippet.quote}</p>
       <Video videoSource={{path:snippet.commentaries[0]}}/>
    <p>Presentation by Jeffrey B. Perry" (2013)</p>
    <p>How many years of records? did Allen go through?  (13:28) This is one example of researching the researches.  </p>
<p>Back in the 16th century negro was used with an uppercase N.</p>
<p>A system of racial priviledge was deliberately instituted in the 17th Century by Anglo-American borgoisie in order to define and establish a "white race" and establish a system of racial oppression.</p>
<p>The invention of the white race was polical and no part of genetic evolution</p>
     </div>
          
</div>);
}
