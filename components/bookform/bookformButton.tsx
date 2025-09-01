
import React from "react";
import Link from 'next/link';
import {Image} from "@heroui/react";

  
// https://www.youtube.com/live/yLUKoXziuec?si=dMZUeyZT4JE0kUJ1   {displayHeading:"Real vs Artificial", pathName:"https://www.youtube.com/live/yLUKoXziuec?si=dMZUeyZT4JE0kUJ1", subject:'Deceptions',  comments:['Beware Chat GPT, 100 Facts about the Negro roots','']}
export default function BookFormButton() {

  return (<>
   <div className="content-division bg-[#0a2b3bb0] mx-auto flex-row max-w-sm items-center gap-x-4 rounded-xl  p-1 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
   <div className="flex mx-auto ">   
<Image className="h-40"
            src={'/images/down-arrow-ui-svgrepo-com.svg'} 
            alt={`Default Image not found for `}
          /><Image className="h-40"
            src={'/images/down-arrow-ui-svgrepo-com.svg'} 
            alt={`Default Image not found for `}
          /><Image className="h-40"
            src={'/images/down-arrow-ui-svgrepo-com.svg'} 
            alt={`Default Image not found for `}
          />
      </div>
    <div className="flex">
<div className="mx-auto flex max-w-sm items-center gap-x-4 rounded-xl  p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
  <Link id='applink' className={"hover:border-1 p-4" } href={`/scrolls`}> 
    <div className="mt-3 flex -space-x-2 overflow-hidden">
       <h1 className="text-xl dark:text-white">The Amanuensis of Hermis Trismegistus </h1>
     </div>
  <div>
 
  </div>
  </Link>
</div>
      </div>     </div>
        </>);
}


/**
 * 
 import Preface from './components/home/preface.tsx';

 * 
 * */