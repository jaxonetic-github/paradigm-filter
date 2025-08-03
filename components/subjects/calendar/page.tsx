import React from "react";
import  {Image} from "@heroui/react";
import {nzingaProfileRecord,  NO_PHOTO_ALTERNATIVE_URI, tableColumns,citationColumns,references} from '@/src/constants/references.js';

//import  BigCalendar, {momentLocalizer } from "react-big-calendar";
import moment from "moment";


//BigCalendar.setLocalizer(BigCalendar.momentLocalizer(moment));


 export default function EventCalendar() {

  const items = [
    { id: 1, name: "Item 1" },
    { id: 2, name: "Item 2" },
    { id: 3, name: "Item 3" },
  ];


  return (<div className='mx-5 bg-yellow-400'> 
<h2>Calender</h2> 
<p>of opportunities to stay informed and connected with Tribe.</p>
  
  </div>);
}
