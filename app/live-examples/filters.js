import React from "react";
import {Input,Button, Select, SelectItem} from "@heroui/react";
import { FaFilter } from "react-icons/fa";


export const  Filters = ({handleDisciplineFilterChange, categories}) => {

  return (<><div>
         
      
        <div className="flex flex-wrap    justify-center justify-evenly">
  
          <Select color={"primary"}
                  variant={"faded"}
                  label="Filter By Discipline"
                  placeholder="Select a Discispline"
                  className="max-w-xs"
                  onChange={handleDisciplineFilterChange}
                >
                <SelectItem key={'all'} value={'all'}>All</SelectItem>
                {categories.map((category) => 
                    <SelectItem key={category.title} value={category.title}>
                      {category.title}
                    </SelectItem>)
                }
          </Select>
          <Input
              isClearable
              label="By Name"
              variant="bordered"
              placeholder="Search By Name"
              defaultValue=""
              onClear={() => console.log("input cleared")}
              className="max-w-xs"
            />
         </div>
         </div>
  </>);
}
//                        onChange={handleDisciplineFilterChange}

  function ReferencesFilters({handleDisciplineFilterChange, categories}) {

  return (<><div>
         
              <div className="flex flex-wrap    justify-center justify-evenly">
                <Select color={"primary"}
                        variant={"faded"}
                        label="Filter By Category"
                        placeholder="Select a Category"
                        className="max-w-xs"
                      >
                      <SelectItem key={'all'} value={'all'}>All</SelectItem>
                      {categories.map((category) => 
                          <SelectItem key={category.title} value={category.title}>
                            {category.title}
                          </SelectItem>)
                      }
                </Select>
                <Select
                      className="max-w-xs"
                      label="Filter by Type"
                      placeholder="Select a Type"
                      selectionMode="multiple"
                    >
                <SelectItem key={'all'} value={'all'}>All</SelectItem>
                {referenceTypes.map((referenceOption) => (<SelectItem key={animal.key}>{animal.label}</SelectItem>))}
              </Select>
               </div>
             </div>
  </>);
}

