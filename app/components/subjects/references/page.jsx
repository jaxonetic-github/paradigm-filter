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

//      <ReferencesTable columns={tableColumns} rows={references}/>


import ReferencesView from './referencesView.jsx';

/*({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  return <h1>My Page</h1>
}
*/

export default function ReferencesMain( ) {
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
    ? appRefs
    : appRefs.filter((item) => {
                                    console.log("item--", item);
                                    console.log(item.category, '<-->',selectedCategory, '---', (typeof item.category));
                                    return (selectedCategory.toLowerCase() ===item.category.toLowerCase());
                                    });


  return (<div> 
<AccordionView title={'Online Archives'}>
     <h2  className="my-2">Online Archives</h2>
    <div>
         <Link underline="always" href='https://fraser.stlouisfed.org/'>Fraser St Louis Fed</Link>
     <Link underline="always" href='https://welib.org'>https://welib.org/</Link>
     <Link underline="always" href='https://omnika.org/'>Omnika</Link>
     <Link underline="always" href='https://books.openedition.org/'>Open Addition Books</Link>
     <Link underline="always" href='https://onlinebooks.library.upenn.edu'>The Online Books Page</Link>
     <Link underline="always" href='https://www.loc.gov/'>US Library of Congress</Link>
     <Link underline="always" href='https://eada.lib.umd.edu/'> Early Americas Digital Archive</Link>
     <Link underline="always" href='https://onlinebooks.library.upenn.edu/archives.html'>UPenn Online archives</Link>
     </div>
     </AccordionView>
          <Divider className="my-8" />

<div className="sticky top-10 z-10 bg-white">
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

     <Divider className="my-2" />
       

<div>
{filteredReferences.length}<h1>Source and Resources</h1>
</div>
  <ReferencesView className={'-z-100'} columns={tableColumns} rows={filteredReferences}/>
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
