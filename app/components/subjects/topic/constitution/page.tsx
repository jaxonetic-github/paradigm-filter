"use client"
import React from "react";
import  {Image, Link, Button, Divider} from "@heroui/react";
import  {PopoverView} from "./../../../../_utils/popoverView.tsx";
import {Card, CardHeader, CardBody, CardFooter} from "@heroui/react";
import   "./../../../../_utils/modal_utility.css";
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

const naturalizationact_Popover =
{key:0, title:'Naturalization Act', what:'H. R. 40, Naturalization Bill', when:'March 4, 1790', imgURL:'/images/naturalizationActP1.jpg',
 desc:'The First Congress (1789-1791) established federal procedures and criteria for foreign-born individuals to become U.S. citizens. These criteria permitted free whites of good character with two years&apos; residence in the United States to become naturalized citizens. Congress also allowed citizens’ children born outside the U.S. to be considered natural-born citizens. Over the following centuries, Congress readdressed the issue in a series of naturalization acts that sometimes excluded, but increasingly included, people of diverse races and origins.'
}

const congressrecord_fourteethAmmend_Popover =
{key:1, title:'14 Ammendment in the Congressional Record', what:'Admission of guilt?', when:'', imgURL:null,
 desc:'The xyz Congress (19-19) showing how history and law go together...'
}

 const Footerhtml = ()=><div><p>Law Reviews</p><p>William &amp; Mary Law Review ::</p><Link target='_blank' href="https://scholarship.law.wm.edu/wmlr/vol65/iss5/3/">The "Free White Person" Clause of the Naturalization Act of 1790 as Super-Statute</Link></div>;      
 
  return (<div className='mx-5'>
    <div className='mx-auto'><h3 className="font-bold">The 1787 Constitution for the United States of America</h3>
    
  <p>View Michael Badnarik's 6 hour class on the Civic principles of principles, rights, and the <Link target={'_b'} href='https://www.youtube.com/embed/wp-48d_jSb4?si=DDK3NUmwLY3QzqYI'>US Constitution</Link> </p>
<p></p>
<p>University of Montana School of Law Review ::<Link target='_blank' href="https://scholarworks.umt.edu/cgi/viewcontent.cgi?article=1018&context=faculty_lawreviews">The Constitution and the Public Trust</Link></p>

<p></p>
<p></p>
<div className='my-2 '>
    <ol className='border-1 '><h3>Citizenship and the 14th Amendment</h3>

    <li><p className='my-2  indent-12'>The <PopoverView  infoRecord={naturalizationact_Popover}> <Footerhtml/></PopoverView>sheds light on the early recognized citizenship</p></li>
      <li><p className='my-2  indent-12'>The first lowercase instance of the word "citizen" in the U.S. Constitution is found in the 14th Amendment. <Link  target='_blank' href={'http://www.pulj.org/the-roundtable/the-influence-of-grammar-upon-law'}>(@See The Influence of Grammer Upon Law</Link></p></li>
      <li><p className='my-2  indent-12'>The United States of America, and the Republic for which it stands, only recognized citizens or property owners of one of the states of the Union before the 14th Amendment<Link target='_blank' href={'https://1024terabox.com/s/1lFKs0OECUS_zg80BITw2Zg'}>(@See Dred Scott case)</Link></p></li>
    
      <li><p className='my-2 indent-12'>For example, George Washington was a Citizen of Virginia; he was Virginian, not a US citizen which did not exist 1868</p></li>
      <li><p>Ummm, the Congressional Record is supposed to be a primary source so there will be a branch about </p>
      <Button id="showNumber" >this</Button> 
      <dialog id="favDialog">
  <form method="dialog">
    <button>Close dialog</button>
  </form>
 </dialog><p> in the future.</p>
        
      </li>
      </ol>
      <p >&quot;The federal and state governments are in fact but different agents and trustees of the people, constituted with different powers, and designed for different purposes.&quot; -James Madison, Federalist No. 46.</p>
</div>

<div><p>There is often talk about the thoughts and ideas of the "Founding Fathers"</p>
<p>The Federalist and Anti-Federalists Papers</p>
</div>
          
    </div>
</div>);
}
