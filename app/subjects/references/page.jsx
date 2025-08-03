"use client"
import React from "react";
import {Table,TableHeader, TableColumn, TableBody, TableRow, TableCell,
        getKeyValue,  Button, Link, Image } from "@heroui/react";
import Options from './../media/options.js'
import {nzingaProfileRecord,  NO_PHOTO_ALTERNATIVE_URI, tableColumns,citationColumns,
            references as appRefs,categories, REFERENCE_TYPES} from './../../../src/constants/references.js';
import {Input, Select, SelectItem,Divider} from "@heroui/react";
import { FaFilter } from "react-icons/fa";
import Topics from './../topic/page.tsx';
import AccordionView from './../../../_utils/CustomAccordion.tsx';
import {ExternalWindowButton} from './../../../_utils/externalWindowButton.tsx';
import {Card, CardHeader, CardBody, CardFooter} from "@heroui/react";
import {Tabs, Tab} from "@heroui/react";



import {ReferencesTableView, ReferencesGridView} from './referencesView.jsx';



export default function ReferencesMain( ) {
    //const [filteredReferences, setFilteredReferences] = React.useState(references);
    const [selectedCategory, setSelectedCategory] = React.useState('All');
    const [selectedType, setType] = React.useState('All');
 

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };
    const handleTypeChange = (event) => {
    setType(event.target.value);
  };
     const handleDisciplineFilterChange = (e) => {
    setDiscispline(e.target.value);
    setFilteredTeachers(filterCategory(e.target.value))

  };


  const filteredReferences = (selectedCategory === "All")
    ? appRefs.filter((item) =>  (selectedType.toLowerCase()===item.type.toLowerCase() ||  selectedType.toLowerCase()==='all'))
    : appRefs.filter((item) => {
                                    //console.log("item--", item);
                                    //console.log(item.category, '<-->',selectedCategory, '---', (typeof item.category));
                                    return ( (
                                            selectedCategory.toLowerCase() ===item.category.toLowerCase()) &&
                                            selectedType.toLowerCase()===item.type.toLowerCase() ||  selectedType.toLowerCase()==='all'
                                          );
                                    });


  const filteredReferencesByType = (refsToFilter)=>refsToFilter.filter((item)=>(selectedType.toLowerCase() ===item.type.toLowerCase()));

/*
  const referencesFilter = ()=>
  {
    filteredReferencesByType()
  }
    ? appRefs
    : appRefs.filter((item) => {
                                    console.log("item--", item);
                                    console.log(item.category, '<-->',selectedCategory, '---', (typeof item.category));
                                    return (selectedCategory.toLowerCase() ===item.category.toLowerCase());
                                    });
*/



  return (<div>


    <div className="flex-row max-w-xl items-center mx-auto"> 
<AccordionView title={'Online Archives'}>
     <h2  className="my-2">Online Archives</h2>
    <div>
         <Link underline="always" href='https://fraser.stlouisfed.org/'>Fraser St Louis Fed</Link>
     <Link underline="always" href='https://welib.org'>https://welib.org/</Link>
     <Link underline="always" href='https://omnika.org/'>Omnika</Link>
     <Link underline="always" href='https://www.globalgreyebooks.com/'>Global Grey E-books</Link>
     <Link underline="always" href='https://books.openedition.org/'>Open Addition Books</Link>
     <Link underline="always" href='https://onlinebooks.library.upenn.edu'>The Online Books Page</Link>
     <Link underline="always" href='https://www.loc.gov/'>US Library of Congress</Link>
     <Link underline="always" href='https://eada.lib.umd.edu/'> Early Americas Digital Archive</Link>
     <Link underline="always" href='https://onlinebooks.library.upenn.edu/archives.html'>UPenn Online archives</Link>
     </div>
     </AccordionView>
     </div>
          <Divider className="my-8" />

<div className="sticky top-10 z-10 bg-white">
<span>Filters &gt;&gt;</span>
   <Select color={"success"} variant={"bordered"} labelPlacement={'outside-left'}
            placeholder="Select a Category"
            className=" max-w-xs"
            items={categories}
               selectedKey={["All"]}
               onChange={handleCategoryChange}
            >
    {item => <SelectItem className="filter-select"  >{item.label}</SelectItem>}
    </Select>
   <Select color={"success"} variant={"bordered"} labelPlacement={'outside-left'}
          placeholder="Select a Type"
            className=" max-w-xs"
            items={REFERENCE_TYPES}
               selectedKey={["All"]}
               onChange={handleTypeChange}
            >
    {item => <SelectItem className="filter-select"  >{item.label}</SelectItem>}
    </Select>
</div>

     <Divider className="my-2" />
       

<div>
{filteredReferences.length}<h1>Source and Resources</h1>

</div>

     <Tabs className='border-1' aria-label="Options" >
        <Tab className='' key="Table View" title="ReferencesTableView">
 <ReferencesTableView className={'-z-10'} columns={tableColumns} rows={filteredReferences}/>     
        </Tab>
        <Tab className='' key="Grid View" title="ReferencesGridView">
   <ReferencesGridView className={'-z-10'}  rows={filteredReferences}/>
        </Tab>        
     </Tabs>
    </div>);
}


