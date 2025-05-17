'use client' 

import Home from './components/page.tsx';
import Welcome from './components/home/welcome.tsx';
import React, { useState, useEffect, useRef } from 'react';
import {HeroUIProvider} from "@heroui/system";
import { useCallback } from 'react';

/*
herbert henry harrison classified as white- youtubeTherapy Session with Sabir Bey- How Irish People become s0-called White?
*/

  export default function RootLayout() {
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
          <Welcome/>
<Home/>
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
