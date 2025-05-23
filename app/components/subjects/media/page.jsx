'use client'
import {initialStoreState} from './../../../src/constants/state.js';
import {specificallyCompiledVideos} from './../../../src/constants/references.js';
import OnlineMedia from './onlineMedia.js';
import HonorableMentionVideos from './honorableMentionVideos.js';
import Options from './options.js';
import Quotes from './../../quotes/page.tsx';
import React from "react";
import {Tabs, Tab, Card, CardHeader, CardBody, CardFooter, Switch} from "@heroui/react";
import { Outlet } from "react-router";

// https://www.youtube.com/live/yLUKoXziuec?si=dMZUeyZT4JE0kUJ1   {displayHeading:"Real vs Artificial", pathName:"https://www.youtube.com/live/yLUKoXziuec?si=dMZUeyZT4JE0kUJ1", subject:'Deceptions',  comments:['Beware Chat GPT, 100 Facts about the Negro roots','']}
export default function MediaTabView() {
  const [matches, setMatches] = React.useState(false);

  const [isVertical, setIsVertical] = React.useState(false);
  //const [selectedView, setSelectedView] = React.useState(specificallyCompiledVideos);
  const [navIndex, setNavIndex] = React.useState(Object.keys(specificallyCompiledVideos)[0]);
  const navSetter = (newViewRecord)=>{setNavIndex(newViewRecord)};
  const query = '(min-width: 550px)';

  return (
    <main className="flex perspective-distant  flex-col  justify-center p-5"> 
      <div className="flex flex-col px-4">
        <div className="flex w-full flex-col">
          <Tabs aria-label="Options" isVertical={isVertical}>
  
            <Tab key="videos" title="Recommended Outlets">
                <OnlineMedia dataArray={initialStoreState.resourcesData.onlineMediaContent}/> 
            </Tab>
            <Tab key="quotes" title="Quotes of Wisdom">
                <Quotes /> 
            </Tab>
          </Tabs>
        </div>
      </div>
    </main>
  );
}