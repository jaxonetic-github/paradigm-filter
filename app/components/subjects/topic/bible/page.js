import React from "react";
import { Link} from "@heroui/react";

//import {specificallyCompiledVideos, MONEYMATTERS_VIDEOLIST_KEY} from './../../../src/constants/references.js';


 
export default function BiblePage() {


  return (<div className='mx-5'>
        <h1 className="font-bold text-lg">$$$</h1>
        <div className='mx-5'>
        <p>Yahweh</p>
        <p>Moses and the Exodus</p>
<div>
           <p>The oldest bible in the world is the Ethiopian Bible written in Geez with 81 texts</p>
              <Link target="_blank" href={''}>About the Ethiopian canon</Link>
              <Link target="_blank" href={''}>View the Ethiopian Bible</Link>
              <Link target="_blank" href={''}>Ethiopian Orthodox Tewahedo Church</Link>  

              <Link target='_blank' href='https://www.yorku.ca/inpar/kebra_budge.pdf'>Kebra Negast</Link>
              <Link target='_blank' href='https://www.ethiopianorthodox.org/biography/01thelawofkings.pdf'>Fetha Negast</Link>
              <Link target="_blank" href={'https://www.researchgate.net/publication/349018787_Negus_Ezana_Revisiting_the_Christianisation_of_Aksum'}>Revisiting the christianization of Aksum</Link>  
</div>
        </div>


        <p>The first complete translation was the John Wycliffe Bible, which was translated into English
         from Latin in the 14th century.</p>
         <p>There is the Tyndale Bible, which was translated from the Greek and Hebrew texts.</p>
         <p> The Coverdale Bible, translated in 1535, was the first complete Bible in modern English</p>

        {/**<ReferencesTable columns={citationColumns} rows={[references[10]]}/>**/}
  </div>);
}
