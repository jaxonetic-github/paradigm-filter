import React from "react";
import  {Image} from "@heroui/react";
import {nzingaProfileRecord,  NO_PHOTO_ALTERNATIVE_URI, tableColumns,citationColumns,references} from './../../src/constants/references.js';
import Link from 'next/link';
import { useRouter } from 'next/navigation'

import ReferencesTable from '../references/page.js';
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
 

    
  </div>);
}
