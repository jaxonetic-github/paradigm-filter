'use client' 
import ContentMap from '@/components/subjects/navigationMap.tsx';

import CustomAccordion from '@/components/utils/CustomAccordion.tsx';
import Introduction from '@/components/bookform/introduction.tsx';
import Preface from '@/components/bookform/preface.tsx';
import TableOfContents from '@/components/bookform/tableOfContents.tsx';
import ReservoirEntryButton from '@/components/bookform/reservoirEntryButton.tsx';
import React, { useState, useEffect, useRef } from 'react';
import {HeroUIProvider} from "@heroui/system";
import { useCallback } from 'react';
import {initialStoreState} from "./../src/constants/state.js";
//import  SessionComponent  from "./components/auth/session.tsx";
import Bookform from '@/components/bookform/bookLayout.tsx';
import AppNavBar from '@/components/appnavbar.js';

/*
herbert henry harrison classified as white- youtubeTherapy Session with Sabir Bey- How Irish People become s0-called White?
*/


  export default function BookForm() {
    const [prevScrollY, setPrevScrollY] = useState(5);
    const [count, setCount] = useState(0);
    const [isScrolling, setIsScrolling] = useState(false); //neededto hide nav while scrolling

    const onScroll = useCallback((event:any) => {
      if(!isScrolling){// ignore if already scrolling
        setIsScrolling(true)
         setTimeout(() => {
      setIsScrolling(false)
    }, 1500)}
  }, []);


 const dataStore = /*webResources ||*/ initialStoreState.resourcesData.youTubeResources ;

  //const teachers = (teacherArray:any) => initialStoreState.resourcesData.youTubeResources.filter((resource)=>(resource.generalCategory[0]===discipline)|| discipline==='all');
  useEffect(() => {
    setPrevScrollY(window.scrollY);
    //add eventlistener to window
    // @ts-ignore
    window.addEventListener("scroll", onScroll, { passive: true });
    // remove event on unmount to prevent a memory leak with the cleanup
    return () => {
      // @ts-ignore
       window.removeEventListener("scroll", onScroll, { passive: true });
    }
  }, []);
  return (<HeroUIProvider>
   

  <div className=" mx-auto flex-row max-w-sm text-center gap-x-4 rounded-xl  p-5 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
<div><ReservoirEntryButton/></div>
</div>
     
              

  <div className=" mx-auto flex-row max-w-sm text-center gap-x-4 rounded-xl  p-5 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
<div> <Bookform/></div>
</div>
     
  </HeroUIProvider>);
}

/** <RouterProvider router={router} />
<Route element={< ReferencesAPP />} >
            <Route index    element={< ParentLayout />}/>
            <Route path='quotes' element={<ReferencesAPP/>} />

            <Route path='illuminators' element={<ParentLayout/>} > 
              <Route path="components/illuminators/:slug" element={<ParentLayout />} />
            </Route>
        </Route>
 <TabViews>
 <InteractiveTreemap category={discipline} dataToDisplay={DEFALTDATA}/>
 {IlluminatorsListDisplay(handleDisciplineFilterChange, filteredTeachers, categories, discipline)}
 </TabViews>
</>
 */
