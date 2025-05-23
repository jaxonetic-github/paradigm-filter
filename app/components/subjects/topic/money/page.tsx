import React from "react";
import {specificallyCompiledVideos, MONEYMATTERS_VIDEOLIST_KEY} from './../../../../src/constants/references.js';
import HonorableMentionVideos from './../../media/honorableMentionVideos.js';


 
export default function TopicHome() {


console.log("---d--",specificallyCompiledVideos[MONEYMATTERS_VIDEOLIST_KEY]);
  return (<div className='mx-5'>

    <div>
    Amazigh (Berbers) <a target='_blank' href='https://vocal.media/history/igudar-morocco-s-ancient-banking-system-and-the-story-of-communal-trust'>The First Banking System </a>
        <h1 className="font-bold text-lg">$$$</h1>
        <div className='mx-5'>Money Masters::This gives context and details on US banking history and the corruptions that has caused to be in the bankrupt state it currently is in (as of 2025).
       <iframe width="560" height="315" src="https://www.youtube.com/embed/AOk3wBuQNcE?si=xEJyUYAwsiEPDzQP" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      </div>
        {/**<ReferencesTable columns={citationColumns} rows={[references[10]]}/>**/}
      <div className='mx-5'>
      <p>The American Dollar is currency but NOT money.  This early 2025 snippet gives an example of why it matters both locally and globally.</p>
 <iframe width="560" height="315" src="https://www.youtube.com/embed/g3kjQS8qh7E?si=QGSbgUExv3qkxneZ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
       </div>
    </div>

</div>);
}
