"use client"
import React from "react";
import {Table,TableHeader, TableColumn, TableBody, TableRow, TableCell,
        getKeyValue,  Button, Link, Image } from "@heroui/react";
import Options from '../media/options.js'
import {nzingaProfileRecord,  NO_PHOTO_ALTERNATIVE_URI, tableColumns,citationColumns,
            references as appRefs,categories, REFERENCE_TYPES} from './../../src/constants/references.js';
import {ReferencesFilters} from '../filters';
import {Input, Select, SelectItem,Divider} from "@heroui/react";
import { FaFilter } from "react-icons/fa";
import AppNavBar from './../appnavbar.js';
import Topics from './../topic/page.tsx';

//      <ReferencesTable columns={tableColumns} rows={references}/>


export  function ReferencesTable({columns, rows}) {
  return (<Table  aria-label="Example table with dynamic content">
      <TableHeader columns={columns}>
        {(column) => <TableColumn className={((column.key=='category' ||column.key=='subtitle') ?'hidden md:block':'')} key={column.key}>{column.label}</TableColumn>}
      </TableHeader>
      <TableBody items={rows} emptyContent={"No rows to display."}>
        {(item) => (
          <TableRow key={item.id}>
            {(columnKey) => <TableCell className={((columnKey =='category' || columnKey=='subtitle') ?'hidden md:block':'')}>
                              {(columnKey=='url')? 
                                    <Button  as={Link} color="primary" variant='solid' href={getKeyValue(item, columnKey)}>
                                      {`View ${(item.type=='book')?'reviews':item.type}`}
                                    </Button>
                              :     getKeyValue(item, columnKey)}</TableCell>}
          </TableRow>
        )}
      </TableBody>
    </Table>);
}



export default function References({children, references =appRefs} ) {
    //const [filteredReferences, setFilteredReferences] = React.useState(references);
    const [selectedCategory, setSelectedCategory] = React.useState('All');
    const [selectedType, setType] = React.useState('All');
 

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };
     const handleDisciplineFilterChange = (e) => {
    setDiscispline(e.target.value);
    setFilteredTeachers(filterCategory(e.target.value))
  };

  const filteredReferences = (selectedCategory === "All")
    ? references
    : references.filter((item) => {
                                    console.log("item--", item);
                                    console.log(item.category, '<-->',selectedCategory, '---', (typeof item.category));
                                    return (selectedCategory.toLowerCase() ===item.category.toLowerCase());
                                    });


  return (<div> 

<div className="sticky top-25 py-2 z-10 bg-white">
   <Select color={"success"} variant={"bordered"} labelPlacement={'outside-left'}
            label="Filter By Category" placeholder="Select a Category"
            className=" max-w-xs"
            items={categories}
               selectedKey={["All"]}
               onChange={handleCategoryChange}
            >
    {item => <SelectItem className="filter-select"  >{item.label}</SelectItem>}
    </Select>
</div>
     <Divider className="my-8" />
     
<h1>Available and Upcoming Subjects</h1>
<div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 '>
<div className=" border-1 flex flex-col gap-2 p-1 sm:flex-row sm:items-center sm:gap-4 ">
  <div className="space-y-2 text-center sm:text-left">
    <div className="space-y-0.5">
      <p className="text-lg font-semibold text-black">Epistemology</p>
      <p className="font-medium text-gray-500">Are your sure? Why? How do you know?</p>
    </div>
<Link className="border-purple-200 text-purple-600 hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700 "
        href='/components/epistemology'>Epistemology</Link>

  </div>
</div><div className=" border-1 flex flex-col gap-2 p-1 sm:flex-row sm:items-center sm:gap-4 ">
  <div className="space-y-2 text-center sm:text-left">
    <div className="space-y-0.5">
      <p className="text-lg font-semibold text-black">History</p>
      <p className="font-medium text-gray-500">Bios, Events, &amp; Religous</p>
    </div>
     <Link className="border-purple-200 text-purple-600 hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700 "
     href='/components/topic/bible'>Bible</Link>
    
  </div>
</div><div className="border-1 flex flex-col gap-2 p-1 sm:flex-row sm:items-center sm:gap-4 ">
  <div className="space-y-2 text-center sm:text-left">
    <div className="space-y-0.5">
      <p className="text-lg font-semibold text-black">Civics and Law</p>
      <p className="font-medium text-gray-500">Law and History go together.</p>
    </div>
    <Link className="border-purple-200 text-purple-600 hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700 "
        href='/components/topic/constitution'>Constitution</Link>
    <Link className="border-purple-200 text-purple-600 hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700 "
        href={'/components/topic/money'}>Money</Link>
    <Link className="border-purple-200 text-purple-600 hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700 "
        href={'/components/topic/blackandwhite'}>Black</Link>

  </div>
</div><div className=" border-1 flex flex-col gap-2 p-1 sm:flex-row sm:items-center sm:gap-4 ">
  <div className="space-y-2 text-center sm:text-left">
    <div className="space-y-0.5">
      <p className="text-lg font-semibold text-black">Occult and Metaphysics</p>
      <p className="font-medium text-gray-500">Where reality and spirituality diverge or converge depending on what you know or what your beliefs hinder you from knowing.</p>
    </div>
    <button className="border-purple-200 text-purple-600 hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700 ">
      Message
    </button>
  </div>
</div>
<div className="border-1 flex flex-col gap-2 p-1 sm:flex-row sm:items-center sm:gap-4sm:py-4 ">
  <div className="space-y-2 text-center sm:text-left">
    <div className="space-y-0.5">
      <p className="text-lg font-semibold text-black">Communication</p>
      <p className="font-medium text-gray-500">Law and History go together.</p>
    </div>
    <Link className="border-purple-200 text-purple-600 hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700 "
        href='/components/topic/communication'>Communication</Link>
  </div></div>
  <div className="border-1 flex flex-col gap-2 p-1 sm:flex-row sm:items-center sm:gap-4sm:py-4 ">
  <div className="space-y-2 text-center sm:text-left">
<Topics/>

  </div></div>
</div>
     <Divider className="my-8" />

{children}
     <Divider className="my-8" />

<h1>Source and Resources</h1>
{filteredReferences.length}---{selectedCategory}
  <ReferencesTable className={'-z-100'} columns={tableColumns} rows={filteredReferences}/>
  </div>);
}
//    console.log(referenceRecord,'----',(selectedCategory=='all'||referenceRecord.category==selectedCategory);

  /*<Select color={"primary"} color={"success"} variant={"bordered"} labelPlacement={'outside-left'}
            label="Filter By Type" placeholder="Select a Type"
            className="max-w-xs"
            onSelectionChange={setType}>
                      {REFERENCE_TYPES.map((type) => 
                          <SelectItem className="filter-select" key={type.key} value={type.label}>
                            {`${type.label}`}
                          </SelectItem>)
                      }
                </Select>*/
