import { useState } from "react";
import  {Button, Link} from "@heroui/react";
import React from 'react';

export default function  CustomNavButton({ children}:{ children:React.ReactNode})  {
 return (<>
   <div className="content-division bg-[#0a2b3bb0] mx-auto flex-row max-w-sm items-center gap-x-4 rounded-xl  p-1 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">

    <div className="flex">
<div className="mx-auto flex max-w-sm items-center gap-x-4 rounded-xl  p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
  <Link id='applink' className={"hover:border-1 p-4" } href={`/reservoir`}> 
    <div className="mt-3 flex -space-x-2 overflow-hidden">
    { children}
     </div>
  </Link>
</div>
      </div>     </div>
        </>);
};
