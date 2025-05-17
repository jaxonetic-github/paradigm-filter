"use client"
import React from "react";
import {specificallyCompiledVideos, MONEYMATTERS_VIDEOLIST_KEY} from './../../../src/constants/references.js';
import HonorableMentionVideos from './../../media/honorableMentionVideos.js';


 
export default function TopicHome() {
  const items = [
    { id: 1, name: "Item 1" },
    { id: 2, name: "Item 2" },
    { id: 3, name: "Item 3" },
  ];


  return (<div className='mx-5'>

    <div>
    Amazigh (Berbers) The First Banking System
        <h1 className="font-bold text-lg">$$$</h1>
        <div className='mx-5'>
                <HonorableMentionVideos  dataArray={specificallyCompiledVideos[MONEYMATTERS_VIDEOLIST_KEY]}  /> 
      </div>
        {/**<ReferencesTable columns={citationColumns} rows={[references[10]]}/>**/}
 

    </div>

</div>);
}
