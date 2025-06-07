import React from "react";
import { Image,Link} from "@heroui/react";
import {SimplePopoverView} from "./../../../../_utils/popoverView.tsx";

//import {specificallyCompiledVideos, MONEYMATTERS_VIDEOLIST_KEY} from './../../../src/constants/references.js';

const enochrefs =()=><div className='border-1 my-2' >
<h2>The Book of Enoch</h2>
<p>Jude 1:14, contains a quote from Enoch1:9 has often been usd as a prophecy of Yeshua in the New Testament.  In  the rhetorical context, of both passages, the stories are presented as possessing some intrinsic authority but not necessarily as scripturally or canonically except by Clement of Alexandria.</p>
<p>Clement of Alexandria (150-215) references the Book of Enoch in his theological works (Stromata book 6) and thought it essential for understand christian doctrine..</p>
<p>Tertullian also defends and praises Enoch saying,  &quot;it&apos;s too christian for jews.&quot;</p> 
<p>The Book of Enoch is a gateway  or bridge to the Sumerian creation stories as it includes themes like the Watchers and their fall from grace.  </p> 
              <Link target="_blank" href={''}>View the Book of Enoch</Link>
 </div>;

 
export default function BiblePage() {


  return (<div className='mx-5'>
        <h1 className="font-bold text-lg">$$$</h1>
        <div className='mx-5'>

        <p></p>
<div>

<div>Introduction
<p>There are many reason for the Nehusu of the world to shun the bible, particulary because of the way it was forced onto us,
 our parents, our grand parents,..., our ancestors.  It was the Papal Bulls of the mid and late 1400's that  gave us aspects of
 Christianity in the form referred to as [Constantinism ]in the texts of the early first millenium. Constantinism turned into Catholism
 and from Catholism sprang the various protestant branches. </p>

<span>Catholicism and the Protestants carry between 54 and 66 biblical books where as the Ethiopian christian church carries
81 books. Despite being </span><SimplePopoverView infoRecord={{title:'popular and respected', what:'', when:'', imgURL:'', desc:''}}>
<h2>The Book of Enoch</h2>
{enochrefs()}</SimplePopoverView>

<span> the Book of Enoch was ommitted from all of the major churches except the Ethiopian Orthodox and Coptic Christian Churches, (@See  Tawedo)
</span>

</div>
 <div className='border-1 my-2' >
<h2>Yahweh</h2>    

 <form action="#">
  <fieldset>
    <legend>Do you agree?</legend>           
              <Link underline="always" target="_blank" href={'https://youtu.be/XxKQGqDbg9k?si=WyLoHaca3emlSryD'}>From Storm God to Creator</Link>
              <Link underline="always" target="_blank" href={'https://www.youtube.com/watch?v=lGCqv37O2Dg'}>How did Yahweh Become God?:: The Origins of Monotheism</Link>
              <Link underline="always" target="_blank" href={'https://youtu.be/mdKst8zeh-U?si=6DrDI2hOPvqPNr8_'}>Who is Yahwey</Link>
  </fieldset>
</form>
 </div>


<div className='border-1 my-2'>
<h2>Tawedo, The Ethiopic Coptic Church</h2>
<p>&quot;King Ezana converted Aksum to Christianity, but the early impacts of royal conversion on the non-elite populace are not well understood.&quot;  <sup>Src</sup></p>
<Image className="p-4 max-w-md  object-cover "
                src={'/images/betasamatdiscovery.png'} 
                fallbackSrc={'/images/imagenotavailable.jpeg'}
                alt={`Default Image not found`}
  />

           <p>The oldest complete bible in the world is the Ethiopian Bible written in Geez with 81 texts</p>

          <div>
              <Link underline="always" target="_blank" href={''}>About the Ethiopian canon</Link>
              <Link underline="always"  target="_blank" href={''}>View the Ethiopian Bible</Link>
              <Link underline="always" target="_blank" href={''}>Ethiopian Orthodox Tewahedo Church</Link>  
              <Link underline="always" target='_blank' href='https://www.yorku.ca/inpar/kebra_budge.pdf'>Kebra Negast</Link>
              <Link underline="always" target='_blank' href='https://www.ethiopianorthodox.org/biography/01thelawofkings.pdf'>Fetha Negast</Link>
              <Link underline="always" target="_blank" href={'https://www.researchgate.net/publication/349018787_Negus_Ezana_Revisiting_the_Christianisation_of_Aksum'}>Revisiting the christianization of Aksum</Link>  
</div>
</div>


<div className='border-1 my-2' >
<h2>Moses and the Exodus</h2>    
   <p>There is no credible historic evidence for an Exodus.</p>
   <p>Moses is not mentioned in any Jewish texts until after the return the Babylonian Exile.</p>
   <p>Rabbi's themselves admit there was no Exodus or Moses</p>
 </div>


</div>
</div>
        <p>The first complete translation was the John Wycliffe Bible, which was translated into English
         from Latin in the 14th century.</p>
         <p>There is the Tyndale Bible, which was translated from the Greek and Hebrew texts.</p>
         <p> The Coverdale Bible, translated in 1535, was the first complete Bible in modern English</p>

        {/**<ReferencesTable columns={citationColumns} rows={[references[10]]}/>**/}
  </div>);
}
