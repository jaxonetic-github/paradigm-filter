import React from "react";
import {specificallyCompiledVideos, MONEYMATTERS_VIDEOLIST_KEY} from './../../../../src/constants/references.js';
import HonorableMentionVideos from './../../media/honorableMentionVideos.js';


 
export default function TopicHome() {


console.log("---d--",specificallyCompiledVideos[MONEYMATTERS_VIDEOLIST_KEY]);
  return (<div className='mx-5'>

    <div>
    Amazigh (Berbers) <a target='_blank' href='https://vocal.media/history/igudar-morocco-s-ancient-banking-system-and-the-story-of-communal-trust'>The First Banking System </a>
        <h1 className="font-bold text-lg">$$$</h1>
        <div className='mx-5'>
        <HonorableMentionVideos  dataArray={specificallyCompiledVideos[MONEYMATTERS_VIDEOLIST_KEY]}  /> 
      </div>
        {/**<ReferencesTable columns={citationColumns} rows={[references[10]]}/>**/}
    </div>

</div>);
}
