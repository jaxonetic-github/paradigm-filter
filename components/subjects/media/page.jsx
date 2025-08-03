import {initialStoreState} from '@/src/constants/state.js';
import OnlineMedia from './onlineMedia.js';

import React from "react";

// https://www.youtube.com/live/yLUKoXziuec?si=dMZUeyZT4JE0kUJ1   {displayHeading:"Real vs Artificial", pathName:"https://www.youtube.com/live/yLUKoXziuec?si=dMZUeyZT4JE0kUJ1", subject:'Deceptions',  comments:['Beware Chat GPT, 100 Facts about the Negro roots','']}
export default function MediaTabView() {


  return (
    <main className="flex perspective-distant  flex-col  justify-center p-5"> 
      <div className="flex flex-col px-4">
        <div className="flex w-full flex-col">
                <OnlineMedia dataArray={initialStoreState.resourcesData.onlineMediaContent}/>        
        </div>
      </div>
    </main>
  );
}