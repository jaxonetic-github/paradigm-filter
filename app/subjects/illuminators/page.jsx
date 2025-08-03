
'use client' 
import React from "react";
import {initialStoreState} from './../../../src/constants/state.js';
import {profiles} from './../../../src/constants/references.js';

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
           
            <BioRepository dataArray={profiles} />
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

 function BioRepository({dataArray}) {
  const [filteredTeachers,filterTeachers] =React.useState(dataArray);
  const [hoveringKey, setHoveringKey] = React.useState(true);
  const [resourceID, setResourceID] = React.useState(-1);
  const [showVideos, toggleShowVideos] = React.useState(false);


  const PROFILE_GRID_CSS = "grid grid-cols-1 sm:grid-cols-3 gap-5";


const profileRecords= Object.values(dataArray);

      let links =profileRecords?.map((resource, index)=><Link key={resource.key} className={"hover:border-1 p-2" } href={`illuminators/${resource.name}`} >
        <div  key={resource.key} className={"topdiv hover:border-1 m-5 p-2"+(resourceID==-1 || (hoveringKey==resource.key))? "":"hidden" }
          onMouseEnter={() => {      
            setHoveringKey(resource.key);
           }}
          onMouseLeave={() => {setHoveringKey(false)}}
         >
        <div><Avatar className='w-25 h-25 text-large rounded-full'
            showFallback  width='35' height='35' src={resource.thumbnail}/>
            {resource.name}
            </div>
              {resource.lifespan}

           </div></Link>);
     
     return (<div id="linksdiv" className={ PROFILE_GRID_CSS } >{links} </div>);
}



