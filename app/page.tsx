'use client' 

import {initialStoreState} from './src/constants/state.js';
import AppNavBar from './components/appnavbar.js';
import ReferencesTable from './components/references/page.js';
import Home from './components/page.tsx';
import Welcome from './components/home/welcome.tsx';
import ParentLayout from './components/parentlayout.js';
import ReferencesAPPLayout from './components/layout.tsx';
import VideoRepo from './components/illuminators/videorepo/page.js';

import Quotes from './components/quotes/page.js';
import LandingPage from './home/page.js';
import TestPage from './test/page.tsx';
import Options from './src/menus/options.js';
import threeDSpace from './threeDSpace.js';
import Illuminators from './components/illuminators/page.js';
import styles from './threedee.module.scss';
import ModalDisplay from './components/modaldisplay/page.tsx';
//import {Image, Button, Divider, HeroUIProvider, Link} from "@heroui/link";


import { references} from './src/constants/references.js';

import {Select,SelectSection, SelectItem,Image, Link} from "@heroui/react";
import * as d3 from "d3";
import React, { useState, useEffect, useRef } from 'react';
import {Input} from "@heroui/input";
import {Tab} from "@heroui/tab";
import {Tabs} from "@heroui/tabs";

import {Button} from "@heroui/button";
import {Divider} from "@heroui/divider";
import {HeroUIProvider} from "@heroui/system";
import { Canvas, useFrame } from '@react-three/fiber';
import { useCallback } from 'react';


//import Link from 'next/link';
const ALL_OPTION  = {label: 'All', value: 'all', key: '0'};
const headingClasses = "flex w-full sticky top-1 z-20 py-1.5 px-2 bg-default-100 shadow-small rounded-small";
/*
herbert henry harrison classified as white- youtubeTherapy Session with Sabir Bey- How Irish People become s0-called White?
*/
/**
const router = createBrowserRouter([
  {
    path: "/",
    Component: LandingPage,
     children: [
      {
        path: "shows/:showId",
        Component: Illuminators,
        loader: ({ request, params }) =>
          fetch(`/api/show/${params.id}.json`, {
            signal: request.signal,
          }),
      },
    ],
  },
  {
    path: "/",
    Component: LandingPage,
     children: [
      {
        path: "shows/:showId",
        Component: Illuminators,
        loader: ({ request, params }) =>
          fetch(`/api/show/${params.id}.json`, {
            signal: request.signal,
          }),
      },
    ],
  },
]);
*/
  export default function RootLayout() {
    const [prevScrollY, setPrevScrollY] = useState(5);
    const [count, setCount] = useState(0);
    const [isScrolling, setIsScrolling] = useState(false); //neededto hide nav while scrolling

    const onScroll = useCallback(event => {
      if(!isScrolling){// ignore if already scrolling
        setIsScrolling(true)
         setTimeout(() => {
      setIsScrolling(false)
    }, 1500)}

  }, []);

 const dataStore = /*webResources ||*/ initialStoreState.resourcesData.youTubeResources ;

  const teachers = teacherArray => initialStoreState.resourcesData.youTubeResources.filter((resource)=>(resource.generalCategory[0]===discipline)|| discipline==='all');
 
  useEffect(() => {
    setPrevScrollY(window.scrollY);
    //add eventlistener to window
    window.addEventListener("scroll", onScroll, { passive: true });
    // remove event on unmount to prevent a memory leak with the cleanup
    return () => {
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
