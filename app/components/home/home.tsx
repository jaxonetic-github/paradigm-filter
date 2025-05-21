
import React from "react";
import Link from 'next/link';
import {Image} from "@heroui/react";

  
// https://www.youtube.com/live/yLUKoXziuec?si=dMZUeyZT4JE0kUJ1   {displayHeading:"Real vs Artificial", pathName:"https://www.youtube.com/live/yLUKoXziuec?si=dMZUeyZT4JE0kUJ1", subject:'Deceptions',  comments:['Beware Chat GPT, 100 Facts about the Negro roots','']}
export default function Home() {

  return (<div className="flex">
       
<div className="mx-auto flex max-w-sm items-center gap-x-4 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
  <Link  className={"hover:border-1 p-4" } href={`/components/subjects`}> 
    <div className="mt-3 flex -space-x-2 overflow-hidden">
    <Image className="inline-block h-12 w-12 rounded-full ring-2 ring-white" src="images/profiles/bobbyHemmitt.jpeg" alt="Bro Bobby" />
    <Image className="inline-block h-12 w-12 rounded-full ring-2 ring-white" src="images/profiles/malcom-x.webp" alt="" />
    <Image className="inline-block h-12 w-12 rounded-full ring-2 ring-white" src="images/profiles/DrBen.jpg" alt="" />
    <Image className="inline-block h-12 w-12 rounded-full ring-2 ring-white" src="images/profiles/drPhilValentine.webp" alt="" />
    <Image className="inline-block h-12 w-12 rounded-full ring-2 ring-white" src="images/profiles/Steve_Biko_Portrait_saho-900x900-1.jpg" alt="" />
 </div>
  <div>
    <div className="text-xl font-medium text-black dark:text-white">References and Sources</div>
    <p className="text-gray-500 dark:text-gray-400">E-Media Library</p>
  </div>
  </Link>
</div>
        </div>);
}