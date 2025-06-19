"use client";
import React from "react";
import {Table,TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue,  Button, Link, Image } from "@heroui/react";
import { tableColumns, REFERENCE_TYPES} from './../../../src/constants/references.js';
import CustomDialog from './../../../_utils/CustomDialog.tsx';
import {YoutubeEmbed, openWindow} from './../../../_utils/youtubeEmbed.js';
//      <ReferencesTable columns={tableColumns} rows={references}/>
import {Card, CardHeader, CardBody, CardFooter, Divider} from "@heroui/react";
import {ExternalWindowButton} from './../../../_utils/externalWindowButton.tsx';


/**
 * Tabular View
 */
 export const ReferencesTableView = ({columns, rows}) => {
    console.log(columns,'-----',rows);

  return (<><Table  aria-label="Example table with dynamic content">
      <TableHeader columns={columns}>
        {(column) => <TableColumn className={((column.key=='category' ||column.key=='subtitle') ?'hidden md:block':'')} key={column.key}>{column.label}</TableColumn>}
      </TableHeader>
      <TableBody items={rows} emptyContent={"No rows to display."}>
        {(item) => (
          <TableRow key={item.id}>
            {(columnKey) => <TableCell className={((columnKey =='category' || columnKey=='subtitle') ?'hidden md:block':'')}>
                              {(columnKey=='url') ? 
                                    <Button   className="relative border-1 overflow-visible rounded-full hover:-translate-y-1 px-12 shadow-xl bg-background/30 after:content-[''] after:absolute after:rounded-full after:inset-0 after:bg-background/40 after:z-[-1] after:transition after:!duration-500 hover:after:scale-150 hover:after:opacity-0"
                                     variant='solid' onPress={()=> openWindow(getKeyValue(item, columnKey))}>{`View ${(item.type=='book')?'reviews':item.type}`}</Button>
                              :     getKeyValue(item, columnKey)}</TableCell>}
          </TableRow>
        )}
      </TableBody>
    </Table></>);
}


/**
 * Grid View
 */
 export const ReferencesGridView = ({columns, rows}) => {
  console.log(columns,'=======',rows);
  return (<>
    <div id="linksdiv" className={ "grid grid-cols-1 sm:grid-cols-3 gap-3" } >

{rows.map((reference) => 
  <Card key={reference.id}  className="max-w-[400px] border-1">
      <CardHeader className="flex gap-3">  
        <div className="flex flex-col">
          <p className="text-md">{reference.title}</p>
          <p className="text-small text-default-500">{reference.subtitle}</p>
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
        <p>{reference.authors}</p>
      </CardBody>
      <Divider />
      <CardFooter>
       <ExternalWindowButton
       buttonText={'view'}
       externalURL={reference.url} />  
      </CardFooter>
    </Card>)}</div>
  </>);
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
