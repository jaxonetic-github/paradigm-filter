"use client"
import React from "react";
import {Table,TableHeader, TableColumn, TableBody, TableRow, TableCell,
        getKeyValue,  Button, Link, Image } from "@heroui/react";
import Options from '../media/options.js'
import {nzingaProfileRecord,  NO_PHOTO_ALTERNATIVE_URI, tableColumns,citationColumns,
            references as appRefs,categories, REFERENCE_TYPES} from './../../src/constants/references.js';
import {ReferencesFilters} from '../filters';
import {Input, Select, SelectItem} from "@heroui/react";
import { FaFilter } from "react-icons/fa";
import AppNavBar from './../appnavbar.js';

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

<div className="sticky top-10 py-2 z-10 bg-white">
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

{children}
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
