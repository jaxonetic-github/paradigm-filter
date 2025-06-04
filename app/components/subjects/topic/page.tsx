import React from "react";
import  {Image} from "@heroui/react";
import {nzingaProfileRecord,  NO_PHOTO_ALTERNATIVE_URI, tableColumns,citationColumns,references} from './../../../src/constants/references.js';
import Link from 'next/link';
import { useRouter } from 'next/navigation'

import ReferencesTable from './../references/page.js';
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
} from "@heroui/react";
import {Popover, PopoverTrigger, PopoverContent, Button} from "@heroui/react";



  
export default function TopicHome() {

  const items = [
    { id: 1, name: "Item 1" },
    { id: 2, name: "Item 2" },
    { id: 3, name: "Item 3" },
  ];


  return (<div className='mx-5 bg-yellow-400'> 


It's hard to care about something you don't think affects you.  There are elders from places like Mississipi who will not watch
movies like Mississippi burning because of how the events and ideas from the movie had actually touched them in real life. Many 
youths of America don't understand the apprehension of leaving your hotel in Alabama at night as so called negro or black man.

The distance in time and experience of the events understandably dims the awareness of those that come after us.  Hence we have a sttruggle of 
Walking a fine line between generations that don't know to protect themselves from lessons of the past while still progressing
 forward as the interminable energy of youth is known to do.


 
Outline::
Phase 1: Load and Organize Content, Facts, and Evidences
Phase 2: A Cognitive Dissonance check


In order to effect change; 
https://www.youtube.com/live/qvdqYkOKMsE?si=XUvSUFpzHDkF8hxd&t=9284
    
  </div>);
}
