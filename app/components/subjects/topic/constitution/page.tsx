"use client"
import React from "react";
import  {Image} from "@heroui/react";

import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue, 
} from "@heroui/react";



 
export default function Constitution() {
  const columns = [
    { key: 'republic', label: "Republic" },
    { key: 'democracy', label: "Democracy" },
  ];



const rows = [
  {
    key: "1",
    republic: "Creater",
    democracy:'X'
  },
  {
    key: "2",
    republic: "Individual",
    democracy:'Individual'
  },
  {
    key: "3",
   republic: "Constitution",
    democracy:'Government'
  },
  {
    key: "4",
    republic: "Public Servants",
    democracy:'Governemnt'
  },
];


  return (<div className='mx-5'>
    <div className='mx-5'><h3 className="font-bold">The 1787 Constitution as a contract</h3>
  <p>The US Constitution of 1787 is a contract much like a trust in which the Trustee, the Federal or State government will protect and secure the human rights of it&apos;s Beneficiaries, The People or citizens of one of  the states of the Union,
  in exchange for their allegiance and participation.</p>
<p>The historically, laws are enacted to protect and allow the free use of one&apos;s property and to ensure that everyone is unhindered (as much as possible) by the the exercise of rights (usage of property). </p>
    
    <Table aria-label="Example table with dynamic content">
      <TableHeader>
        {columns.map((column) =>
          <TableColumn key={column.key}>{column.label}</TableColumn>
        )}
      </TableHeader>
      <TableBody>
        {rows.map((row) =>
          <TableRow key={row.key}>
            {(columnKey) => <TableCell>{getKeyValue(row, columnKey)}</TableCell>}
          </TableRow>
        )}
      </TableBody>
    </Table>

    <ul><h3>N.B.</h3>
      <li>
          <p className='my-2  indent-12'>
          One of the biggest rights the Constitution protects is the right to contract unlimited.
           This right is superior to even the Bill of Rights because all the rights secured by the
           Bill of Rights can be contracted away.  You are free to give up your rights or simply 
           not defend or assert them.
           </p>
          
          <p className='my-2  indent-12'>
&quot;The federal and state governments are in fact but different agents and trustees of the people, constituted with different powers, and designed for different purposes.&quot; -James Madison, Federalist No. 46.
           </p></li>
      </ul>
    </div>
</div>);
}
