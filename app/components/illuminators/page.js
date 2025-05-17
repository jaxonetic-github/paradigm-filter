'use client' 
import React from "react";
import {initialStoreState} from '../../src/constants/state.js';
//import PropTypes from 'prop-types'; // ES6
import { Button, Divider,  Avatar} from "@heroui/react";

//import VideoRepository from './videorepo/page.js'
import { FaFilter } from "react-icons/fa";
import Link from 'next/link';



/**
 * 
 * @param children : initialStoreState.resourcesData.youTubeResources
 * 
 */
  export default function Illuminators() {
  const [showFilter, toggleShowFilter] = React.useState(false);

  const dataStore = initialStoreState.resourcesData.youTubeResources ;

  const [discipline, setDiscispline] = React.useState("all");
  const [teacher, setTeacher] = React.useState("all");
  const [filteredTeachers, setFilteredTeachers] = React.useState(initialStoreState.resourcesData.youTubeResources);


  //filter teachers by Category
  const filterCategory = (filterByCategory) =>
    initialStoreState.resourcesData.youTubeResources.filter(
                                                    function hasPayload(arg) {
                                                        return ((arg.generalCategory[0] == filterByCategory) || (filterByCategory === 'all'));     
                                                      });



     return (<div>
                 <div className="relative">
      <h2>Database of Illuminators</h2>
           <p>{filteredTeachers.length} {discipline} teachers</p>
           <div className={'h-800'}>
           
            <VideoRepository dataArray={filteredTeachers} selectRecord={setFilteredTeachers}/>
            </div>
            <span>** Please excuse any delay in removing bad links.</span>
          </div>
    </div>)
}


/**       
 *       <Avatar showFallback name="Jane" src="https://images.unsplash.com/broken" />
className="w-20 h-20 text-large"   grid grid-cols-5 sm:grid-cols-4 md:grid-cols-5 
 * param dataArray : initialStoreState.resourcesData.youTubeResources
 *  <VideoRepository dataArray={filteredTeachers}/>
 * href={`/reference_spa/illuminators/${resource.key}`
 */

 function VideoRepository({dataArray,selectRecord}) {
      const [filteredTeachers,filterTeachers] =React.useState(dataArray);

    const [hoveringKey, setHoveringKey] = React.useState(true);

  const [resourceID, setResourceID] = React.useState(-1);
  const [showVideos, toggleShowVideos] = React.useState(false);


  const PROFILE_GRID_CSS = "grid grid-cols-1 sm:grid-cols-3 gap-5";
    //onClick={()=>console.log("Selecting specific Illuminator"); selectRecord(resource.key);} 
console.log('dataArray',dataArray);
console.log('filteredTeachers', filteredTeachers);
      let links =filteredTeachers?.map((resource, index)=><Link key={resource.key} className={"hover:border-1 p-2" } href={`illuminators/${resource.key}`} >
        <div  key={resource.key} className={"topdiv hover:border-1 m-5 p-2"+(resourceID==-1 || (hoveringKey==resourceID==resource.key))? "":"hidden" }
          onMouseEnter={() => {
            console.log("Entering ",resource.key);
            if(resourceID==resource.key) setHovering(true);
             else setHovering(false);
            setHoveringKey(resource.key);
           }}
          onMouseLeave={() => {setHovering(false)}}
         >
        <div><Avatar className='w-25 h-25 text-large rounded-full'
            showFallback isBordered width='35' height='35' src={resource.images[0]}/>
            <p>{resource.title}</p><p>{resource.description}</p>
            <p>{(hoveringKey==resource.key)?"is":" is not"} hovering over {resource.key}</p><p>resource.key={resource.key}, resourceID={resourceID}</p>
            </div>
            <div  aria-label={resource.title} subtitle={resource.generalCategory} title={'Videos'} >
              </div></div></Link>);
     
     return (<div id="linksdiv" className={ PROFILE_GRID_CSS } >{links}
              </div>);
}


/**<div>
     <Button  onPress={togglefilterView} color="warning" variant="faded" aria-label="Take a photo">
       <div> <FaFilter /><span>Filters</span></div>
      </Button>
        {(showFilter?<Filters handleDisciplineFilterChange={handleDisciplineFilterChange} categories={categories}/> :null)}

            <div className="relative">
      <h2>Database of Illuminators</h2>

           <p>{filteredTeachers.length} {discipline} teachers</p>
           <div className='h=800'>
           
            <VideoRepository dataArray={filteredTeachers} selectRecord={setFilteredTeachers}/>
            </div>
            <span>** Please excuse any delay in removing bad links.</span>
          </div>
    </div></>
*/
