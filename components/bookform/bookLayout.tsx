import CustomAccordion from '@/components/utils/CustomAccordion.tsx';
import Introduction from '@/components/bookform/introduction.tsx';
import Preface from '@/components/bookform/preface.tsx';
import TableOfContents from '@/components/bookform/tableOfContents.tsx';
import React, { useState, useEffect, useRef } from 'react';

export default function BookLayout({ children}: { children?: React.ReactNode})
{
  return   <div className="content-division bg-[#0a2b3bb0] mx-auto flex-row max-w-xl items-center gap-x-4 rounded-xl  p-1 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">

  <CustomAccordion title="The Amanuensis of Hermis Trismegistus">
           <div>
    <h1>A Treatise on the World : in hopes of breaking the cycle.</h1>
    <p className="indent-8">The Amanuensis of Hermis Trismegistus</p>
          <Preface/>
          <Introduction/>
          
          <TableOfContents/>
            </div>
</CustomAccordion>
</div>
}