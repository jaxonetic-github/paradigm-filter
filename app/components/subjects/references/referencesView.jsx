"use client"
import React from "react";
import {Table,TableHeader, TableColumn, TableBody, TableRow, TableCell,
        getKeyValue,  Button, Link, Image } from "@heroui/react";
import { tableColumns, REFERENCE_TYPES} from './../../../src/constants/references.js';

//      <ReferencesTable columns={tableColumns} rows={references}/>


 export default function ReferencesView({columns, rows}) {
  return (<><Table  aria-label="Example table with dynamic content">
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
    </Table></>);
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
