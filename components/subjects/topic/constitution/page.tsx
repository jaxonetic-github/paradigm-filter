"use client"
import React from "react";
import  {Image, Link, Button, Divider} from "@heroui/react";
import  {PopoverView} from "@/components/utils/popoverView.tsx";
import {Card, CardHeader, CardBody, CardFooter} from "@heroui/react";
import   "@/components/utils/modal_utility.css";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue, 
} from "@heroui/react";
import CustomDialog from './../../../../_utils/CustomDialog.tsx'
import {ExternalWindowButton} from './../../../../_utils/externalWindowButton.tsx';
import {YoutubeEmbed} from './../../../../_utils/youtubeEmbed.js';
import { referenceFilter, ReferencesGridView} from './../../references/referencesView.jsx';


 
export default function Constitution() {

const naturalizationact_Popover =
{key:0, title:'Naturalization Act', what:'H. R. 40, Naturalization Bill', when:'March 4, 1790', imgURL:'/images/naturalizationActP1.jpg',
 desc:'The First Congress (1789-1791) established federal procedures and criteria for foreign-born individuals to become U.S. citizens. These criteria permitted free whites of good character with two years&apos; residence in the United States to become naturalized citizens. Congress also allowed citizens’ children born outside the U.S. to be considered natural-born citizens. Over the following centuries, Congress readdressed the issue in a series of naturalization acts that sometimes excluded, but increasingly included, people of diverse races and origins.'
}

const congressrecord_fourteethAmmend_Popover =
{key:1, title:'14 Ammendment in the Congressional Record', what:'Admission of guilt?', when:'', imgURL:'/images/14th-Amendment-Unconstitutional-Congress-Record.jpg',
 desc:'The xyz Congress (19-19) showing how history and law go together...'
}

 const Footerhtml = ()=><div><p>Law Reviews</p><p>William &amp; Mary Law Review ::</p><Link showAnchorIcon target='_blank' href="https://scholarship.law.wm.edu/wmlr/vol65/iss5/3/">The "Free White Person" Clause of the Naturalization Act of 1790 as Super-Statute</Link></div>;      
 
  return (<div className='mx-5'>
    <div className='mx-auto'><h3 className="font-bold">The 1787 Constitution for the United States of America</h3>


<ReferencesGridView  rows={referenceFilter([142,141,137,138,139,140])}/>

<div className='my-2 '>

<h3>Citizenship and the 14th Amendment</h3>
  
<ReferencesGridView  rows={referenceFilter([144,145,146,72,149,148, 147])}/>

      <p >&quot;The federal and state governments are in fact but different agents and trustees of the people, 
      constituted with different powers, and designed for different purposes.&quot; -James Madison, Federalist No. 46.</p>
</div>

<div><p>There is often talk about the thoughts and ideas of the "Founding Fathers"</p>
<p>The Federalist and Anti-Federalists Papers</p>
</div>
          
    </div>
   
</div>);
}
