
import React from "react";

//export function Video({videoSource}:AppProps) { return (<video key={videoSource.path} width="320" height="240" controls preload="none"><source src={ videoSource.path} type="video/mp4" />Your browser does not support the video tag.</video>)}

export default function Blackness(){
   const theodoreAllenQuote0 = 'When the first Africans arrived in Virginia in 1619 there were no white people, nor according to the colonial records, would there be for another 60 years';
 const browderSnippet1Quote = 'The first step, the first step we want to focus on, is the step that you must be actively engaged be actively in the process of freeing your mind.  You must work to free your mind. You have to do that, begin the process of freeing your mind by  evaluating everything that you&apos;ve been taught. Everything. And develop a discriminating eye so that you can ultimately learn what not to  believe. You don&apos;t want to believe what everyone tells you. You want to get some information to reinforce that, to validate. that information to determine  whether or not it should be programmed within your consciousness';

 const browderSnippet0Quote ='All of these things are done in order to manipulate the images which will ultimates affect and influence your consciousness. Now we need to realize that racism is an unavoidable fact of life in America. We need to understand how racist images attack us  constantly 24 hours a day. We need to understand that whoever is responsible for craeting images will ultimately determine  your level of consciousness.  How you feel about yourself[personal note: like feeling dependent on the government or feeling unable to     make change] is determined by how you see yourself. And if the images that are constantly projected around you say that you are less  than human,  then you will act less than human. Others will regard you as less than human.  Carter G Woodson said it best, when he said  &quot;when you control a Man*apos;s thinking you don&apos;t have to worry about his actions, you don&apos;t have to  tell him to stand here or there for he will find his proper place and will stay in it.  A person who has been miseducated does not have to be ordered to the back door in any society for they will go  without being told.  In fact, if there is no back door, there very nature is to demand one.  Why? Because their miseducation makes it necessary[like falling under someon&apos;s spell].&quot;';
 const browderSnippits = [{url:'https://youtu.be/fRAHawFgNE4?si=iUzU95VYl6uBTa1h&t=1498', transcription:browderSnippet1Quote},{url:'https://youtu.be/fRAHawFgNE4?si=1gb5qHpt4D9iZSgo&t=1388', transcription: browderSnippet0Quote}];

 const snippet = {src:'The Invention of the White Race, Vol 1. 1994',
                      quote:theodoreAllenQuote0,
                      commentaries:['videos/history/commentaries/TheInventionOfTheWhiteRacebyTheodoreWAllenPresentationbyJeffreyBPerry.mp4']};

  return (<><div className='mx-5'>
   <ul>
    <li>Chapter 3 of Africans and Native Americans talks illustrates how the terms negro and black has been applied to people of American decent.  (28)[https://www.youtube.com/live/a3GaFbkRwYo?si=XBuVTNUSI6_Fys7o]</li>
    <li>&quot;It is apparent from the evidence that the term negro or its equivalent was not used for a race or a single stock of people or to point to ancestry or ethnicity. It was usually a simple
    description for perceived color.</li>
    <li>Negro or its functional equivalent mohr, moor, more (German Dutch French) in a very  broad sense.  The Portuguese also tended to use the term negro to encompass non Africans, people whose skin colow was a shade of brown... Negro or more almost  becomes equivalent to non-white or third-world in recent usage. </li>
</ul>
    <div>

    <div>
        Chinese as Black and sources about the usage of black:: Sabir Bey 
    </div>

        <h1 className="font-bold text-lg">{snippet.src}</h1>
        <p>{snippet.quote}</p>
        <video key={snippet.commentaries[0]} width="320" height="240" controls preload="none"><source src={ snippet.commentaries[0]} type="video/mp4" />Your browser does not support the video tag.</video>
    <p>Presentation by Jeffrey B. Perry (2013)</p>
    <p>How many years of records? did Allen go through?  (13:28) This is one example of researching the researches.  </p>
    <p>Back in the 16th century negro was used with an uppercase N.</p>
    <p>A system of racial priviledge was deliberately instituted in the 17th Century by Anglo-American borgoisie in order to define and establish a &quot;white race&quot; and establish a system of racial oppression.</p>
    <p>The invention of the white race was polical and no part of genetic evolution</p>
     </div>
          
</div></>);
}

