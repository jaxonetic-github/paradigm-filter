//import {initialStoreState} from './src/constants/state.js';
//import {Accordion, AccordionItem, Avatar, Card, CardHeader, CardBody, CardFooter} from "@heroui/react";
//import {Divider, Image, Link, Tooltip,Button} from "@heroui/react";
import React from "react";
import {Image, Divider} from "@heroui/react";
import CustomDialog from './../../../_utils/CustomDialog.tsx';
import {YoutubeEmbed} from './../../../_utils/youtubeEmbed.js';
import {ExternalWindowButton} from './../../../_utils/externalWindowButton.tsx';
import {ReferenceView,referenceFilter, ReferencesGridView} from './../references/referencesView.jsx';
import AccordionView from './../../../_utils/CustomAccordion.tsx';



/**
 * 
 * @Description This element displays a Card with information from @param dataArray
 * @param dataArray : initialStoreState.resourcesData.onlineMediaContent from initial state
 *  literally an arrary of 
 * 	
 * 
 */
//Franz Fernon--oppressed oppress themselves
//	{quoted: 'Declaration of Independance', quotersImage:'declaration-of-independence.jpg', extraInfo:'', quote:' ...that all men are created equal, that they are endowed by their Creator with certain unalienable Rights, that among these are Life, Liberty and the pursuit of Happiness.--That to secure these rights, Governments are instituted among Men, ...'},
export default function HistoryHome () {
	const PROFILE_IMG_PATH = '/images/profiles/';
	 const styles = {
        textInset:{ border:'3px solid rgba(0, 0, 0, 0.05)'}, 
   };



 return (
<div>


 <div  className='mx-2 md:mx-12'>

       <div className='my-8'>

  <AccordionView title={'Atlan(tis)'}>
    <div>
       <ReferencesGridView  rows={referenceFilter([44])}/>
    </div>
  </AccordionView>
  </div>




  <div className='my-8'>
    <AccordionView title={'American History'}>

  <div className='flex-flow border-2'>
  <AccordionView title={'General'}>
    <div>
       <ReferencesGridView  rows={referenceFilter([46,47,48,49,50])}/>
    </div>
  </AccordionView>


      <div className='border-1'>
      
        <AccordionView title={'Secret Societies - The Great Brotherhood'}> 
              <ReferencesGridView  rows={referenceFilter([53,54,55,56])}/>
        </AccordionView>
        </div>

      <div className='border-1'>
          <AccordionView title={'Haitian Revolution (1793-1804)'}> 
              <ReferencesGridView  rows={referenceFilter([57])}/>
        </AccordionView>    
      </div>

          <div className='border-1'>    
      <AccordionView title={'South American History'}> 
       <ReferencesGridView  rows={referenceFilter([58, 59, 28, 60])}/>
       </AccordionView> 
    </div>

        <div  className='border-1 my-2'>
         <AccordionView title={'Aspects of US Colonialism'}> 

        <div className='flex-flow'>
          <div className='border-1'>
          <h3>Overview and Summaries</h3>
           <ReferencesGridView  rows={referenceFilter([61,62,63,64,65])}/>
          </div>
          <div className='border-1'>
          <h3>Details and Particulars</h3>
                 <ReferencesGridView  rows={referenceFilter([66,67,68,69,70,71,72,73,74,75,76,35,77,78,79])}/>
          </div>
      </div>
   </AccordionView> 
    </div>
  </div>
    </AccordionView>
  </div>




    <div  className='my-8'>

  <AccordionView title={'Australian'}>
    <div>
           <div className='flex-flow'>
      <div className='border-1'>
      <p>Overview and Summaries</p>
       <ReferencesGridView  rows={referenceFilter([51])}/>
   </div>
      <div className='border-1'>
      <p>Details and Particulars</p>
       <ReferencesGridView  rows={referenceFilter([52,30,3])}/>
  </div>
      </div>   
    </div>
  </AccordionView>
    </div>



<div className='my-8'>
  <AccordionView title={'Iberia, Al Andalusia, España(Spain)'}>
  <h2>Iberia, Al Andalusia, España(Spain)</h2>
<div>
     In 1492,  all non-christians were ordered to convert to Christianity or leave Al Andalusia.  By From 1609 and 1610, the rest of 
     the Moriscos (Crypto Moors) were expelled to North Alkebelan or France.
  </div>
  <div className=''>
       <ReferencesGridView  rows={referenceFilter([82, 83,85,86,87])}/>

     </div>
      </AccordionView>
</div>


  <div className='my-8'>
    <AccordionView title={'The Moors'}>

  <h2>The Moors</h2>
  
  <div className=''>
  <div className="border-1">

         <ReferencesGridView  rows={referenceFilter([88, 89,90,91])}/>
  </div>


  <p className='support-sabir'>Ibn Assina (Avverroes)</p>
  <p className='support-sabir'>Ibn Battuta</p>
<div className="border-1">
  <p className='support-sabir'>Ibn Jubayr</p>
         <ReferencesGridView  rows={referenceFilter([95,96])}/>
   </div>
 <ReferencesGridView  rows={referenceFilter([97,98,99,100,101,102,103,104,105,106])}/>
  </div>
  </AccordionView>
  </div>


    <div className='my-8'>
        <AccordionView title={'Religious History'}>

        <div className='border-1'>
         <p>Overview and Summaries</p>
          <ReferencesGridView  rows={referenceFilter([107,108])}/>

</div>
      <div className='border-1'>
 <ReferencesGridView  rows={referenceFilter([109,110,111,112,113,114])}/>

  <p>The Dogon say that in the beginning there was Sirius B. The Etruscians (Greeks) say that before the creation of the universe was Gaia.  But Gaia is
  also earth.  Before the universe was created, Earth existed. It just wasn't in the physical...</p >
  </div>
    </AccordionView>
  </div>

</div>
</div>
);
}

	