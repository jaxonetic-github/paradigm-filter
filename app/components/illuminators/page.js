'use client' 
import Image from "next/image";
import {initialStoreState} from '../../src/constants/state.js';
import PropTypes from 'prop-types'; // ES6
import { Button, Divider, HeroUIProvider} from "@heroui/react";
import {Accordion, AccordionItem, Avatar} from "@heroui/react";
import { Outlet } from "react-router";
import React from "react";
import {COMMON_DARK_BACKGROUND, categories} from '../../src/constants/constants.js';
import VideoRepository from './videorepo/page.js'
import Quotes from '../quotes/page.js'
import TabViews from '../../tabviews';
import Filters from '../filters';
import { FaFilter } from "react-icons/fa";



/**
 * 
 * @param children : initialStoreState.resourcesData.youTubeResources
 * 
 */
  export default function Illuminators({teachers} ) {
  const [showFilter, toggleShowFilter] = React.useState(false);

  const dataStore = initialStoreState.resourcesData.youTubeResources ;

  const [discipline, setDiscispline] = React.useState("all");
  const [teacher, setTeacher] = React.useState("all");
  const [filteredTeachers, setFilteredTeachers] = React.useState(dataStore);


  //filter teachers by Category
  const filterCategory = filterByCategory =>{
   const tst = initialStoreState.resourcesData.youTubeResources.filter(
          function hasPayload(arg) {
              return ((arg.generalCategory[0] == filterByCategory) || (filterByCategory === 'all'));     
            });

  //FilteredTeachers
     return tst;
   };



     return (<>
    <div>
                 <div className="relative">
      <h2>Database of Illuminators</h2>
      <Outlet/>
           <p>{filteredTeachers.length} {discipline} teachers</p>
           <div className='h=800'>
           
            <VideoRepository dataArray={filteredTeachers} selectRecord={setFilteredTeachers}/>
            </div>
            <span>** Please excuse any delay in removing bad links.</span>
          </div>
    </div></>
)
}
/**<div>
     <Button  onPress={togglefilterView} color="warning" variant="faded" aria-label="Take a photo">
       <div> <FaFilter /><span>Filters</span></div>
      </Button>
        {(showFilter?<Filters handleDisciplineFilterChange={handleDisciplineFilterChange} categories={categories}/> :null)}

            <div className="relative">
      <h2>Database of Illuminators</h2>
      <Outlet/>
           <p>{filteredTeachers.length} {discipline} teachers</p>
           <div className='h=800'>
           
            <VideoRepository dataArray={filteredTeachers} selectRecord={setFilteredTeachers}/>
            </div>
            <span>** Please excuse any delay in removing bad links.</span>
          </div>
    </div></>
*/
