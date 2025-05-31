import React from "react";
import { Image,Link} from "@heroui/react";

//import {specificallyCompiledVideos, MONEYMATTERS_VIDEOLIST_KEY} from './../../../src/constants/references.js';


 
export default function BiblePage() {


  return (<div className='mx-5'>
        <h1 className="font-bold text-lg">$$$</h1>
        <div className='mx-5'>

        <p>Moses and the Exodus</p>
<div>

<div className='border-1 my-2' >
<h2>Yahweh</h2>    
              <Link target="_blank" href={''}>About the Ethiopian canon</Link>
              <Link target="_blank" href={''}>View the Ethiopian Bible</Link>
 </div>
<div className='border-1 my-2'>
<h2>Tawedo, The Ethiopiac Coptic Church</h2>
<p>&quot;King Ezana converted Aksum to Christianity, but the early impacts of royal conversion on the non-elite populace are not well understood.&quot;  <sup>Src</sup></p>
<Image className="p-4 max-w-md  object-cover "
                src={'/images/betasamatdiscovery.png'} 
                fallbackSrc={'/images/imagenotavailable.jpeg'}
                alt={`Default Image not found`}
  />

           <p>The oldest complete bible in the world is the Ethiopian Bible written in Geez with 81 texts</p>

          <p>By the 4th cen</p>
              <Link target="_blank" href={''}>About the Ethiopian canon</Link>
              <Link target="_blank" href={''}>View the Ethiopian Bible</Link>
              <Link target="_blank" href={''}>Ethiopian Orthodox Tewahedo Church</Link>  

              <Link target='_blank' href='https://www.yorku.ca/inpar/kebra_budge.pdf'>Kebra Negast</Link>
              <Link target='_blank' href='https://www.ethiopianorthodox.org/biography/01thelawofkings.pdf'>Fetha Negast</Link>
              <Link target="_blank" href={'https://www.researchgate.net/publication/349018787_Negus_Ezana_Revisiting_the_Christianisation_of_Aksum'}>Revisiting the christianization of Aksum</Link>  
</div>

<div className='border-1 my-2' >
<h2>The Book of Enoch</h2>


<p>Jude 1:14 has often been usd as a prophecy of Yeshua in the New Testament</p>

<p>Clement of Alexandria (150-215) references the Book of Enock in his theological works (Stromata book 6).</p>
<p>Tertullian also defends and praises Enoch saying,  &quot;it&apos;s too christian for jews.&quot;</p> 
<p>The Book of Enoch is a gateway  or bridge to the Sumerian creation stories as it includes themes like the Watchers and their fall from grace.  </p> 
              <Link target="_blank" href={''}>The Book of Enoch</Link>
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
