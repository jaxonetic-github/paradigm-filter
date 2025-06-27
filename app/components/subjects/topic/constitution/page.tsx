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
import CustomDialog from './../../../../_utils/CustomDialog.tsx'
import {ExternalWindowButton} from './../../../../_utils/externalWindowButton.tsx';
import {YoutubeEmbed} from './../../../../_utils/youtubeEmbed.js';


 
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
    
  <p>View Michael Badnarik's 6 hour class on the Civic principles of principles, rights, and the <Link showAnchorIcon underline="always"  isExternal href='https://www.youtube.com/embed/wp-48d_jSb4?si=DDK3NUmwLY3QzqYI'>US Constitution</Link> </p>
<p></p>
<p>University of Montana School of Law Review ::<Link showAnchorIcon underline="always"  target='_blank' href="https://scholarworks.umt.edu/cgi/viewcontent.cgi?article=1018&context=faculty_lawreviews">The Constitution and the Public Trust</Link></p>

<p>
<CustomDialog title='Constitutional Law'><iframe src="https://archive.org/embed/constitutionalla0000morr" width="560" height="384" frameBorder="0" allowFullScreen></iframe></CustomDialog>
<CustomDialog title='Principles of constitutional law'><iframe src="https://archive.org/embed/principlesofcons0000rotu" width="560" height="384" frameBorder="0" allowFullScreen></iframe></CustomDialog>

</p>
<p></p>

<div className='my-2 '>
    <ol className='border-1 '><h3>Citizenship and the 14th Amendment</h3>

    <li><p className='my-2  indent-12'>The <CustomDialog  title={naturalizationact_Popover.title}> 
    
      <div className='flex justify-center'>
        <Image 
          alt="Card background"
          className="rounded-xl align-center"
          src={naturalizationact_Popover.imgURL}
          width={550} height={700}
        />
      </div></CustomDialog>
    sheds light on the early recognized citizenship</p></li>
       <li>


<CustomDialog  title='Analizing Nationality and Citizenship through Statutes and Codes.'> 
    
      {YoutubeEmbed('WYoWu5Hr_Ks')}</CustomDialog>


    </li>
    <li>
      <ExternalWindowButton
      buttonText = '14 video Youtube playlist'
      externalURL = 'https://youtube.com/playlist?list=PL-DGnkOdP-k3ChNwDLSf7hfnqT5XvefK0&si=n6y9u_Xa7Wfo6E5N' /> 
of Richard McDonald speaking on the multiple citizenships in the "US States".
       </li>
      <li><p className='my-2  indent-12'>The first lowercase instance of the word "citizen" in the U.S. Constitution is found in the 14th Amendment. <Link  underline="always"  isExternal showAnchorIcon  href={'http://www.pulj.org/the-roundtable/the-influence-of-grammar-upon-law'}>(@See The Influence of Grammer Upon Law</Link></p></li>
      <li><p className='my-2  indent-12'>The United States of America, and the Republic for which it stands, only recognized citizens or property owners of one of the states of the Union before the 14th Amendment<Link  underline="always"  showAnchorIcon isExternal href={'https://1024terabox.com/s/1lFKs0OECUS_zg80BITw2Zg'}>(@See Dred Scott case)</Link></p></li>
    
      <li><p className='my-2 indent-12'>For example, George Washington was a Citizen of Virginia; he was Virginian, not a US citizen which did not exist 1868</p></li>
    <li>
      <ExternalWindowButton
      buttonText = 'US Governmental Publishing Office Style Manual'
      externalURL = 'https://www.govinfo.gov/content/pkg/GPO-STYLEMANUAL-2016/pdf/GPO-STYLEMANUAL-2016-7.pdf' /> 
    </li>

      <li>
      <p>The sneaky 14th Ammendment according to the <CustomDialog title={'Congressional Record'}>
        
      <Card className="py-4 bg-[#deb887]">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold">{congressrecord_fourteethAmmend_Popover.what}</p>
        <small className="text-default-500">{congressrecord_fourteethAmmend_Popover.when}</small>
        <h4 className="font-bold text-large">{congressrecord_fourteethAmmend_Popover.desc}</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2 flex ">
      <div className='flex justify-center'>
        <Image 
          alt="Card background"
          className="rounded-xl align-center"
          src={congressrecord_fourteethAmmend_Popover.imgURL}
          width={460}
          height={350}
        />
      </div>
      </CardBody>
      <CardFooter>
      
      </CardFooter>
    </Card>

      </CustomDialog> is supposed to be a primary source so there will be a branch about </p>
     
        
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
