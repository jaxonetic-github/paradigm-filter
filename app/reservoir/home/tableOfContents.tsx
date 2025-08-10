
import React from "react";
import Home from "./home.tsx";
import Introduction from "./introduction.tsx";
import {Image, Divider} from "@heroui/react";
import AccordionView from '@/components/utils/CustomAccordion.tsx';


export default function TableOfContents(){

  return (<section className='mx-5'>
<AccordionView title={'Propaganda'}>
          <div >
          <ul> Propaganda
          <li><p>Chapter : On the existence of Propaganda</p></li>
          <li><p>Chapter : On Epistomology and filtering external Propaganda</p></li>
          <li><p>Chapter : Examples of Colonial Propaganda and Modern Misconceptions</p></li>
          </ul>
          </div>
     </AccordionView>


<AccordionView title={'The Philosophy of Metaphysics and the Occult'}>
          <div >
          <ul> The Philosophy of Metaphysics and the Occult
          <li><p>Chapter : Divine Law - Hermetically speaking...</p></li>
          <li><p>Chapter : Spirit and Breath</p></li>
          <li><p>Chapter : The Light within</p></li>
          <li><p>Chapter : Intention and Focus</p></li>
          <li><p>Chapter : The bare naked truth and Shadow Work</p></li>
          </ul>
          </div>
     </AccordionView>

<AccordionView title={'Civics'}>
          <div >
          <ul> Civics
          <li><p>Chapter : Rights</p></li>
          <li><p>Chapter : Contracts</p></li>
          <li><p>Chapter : The Constitutions of the States</p></li>
          <li><p>Chapter : The Federal Constitution For the united states of America</p></li>
          <li><p>Chapter : The 6th Ammendment</p></li>

          <li><p>Chapter : The 13th Ammendment</p></li>

          <li><p>Chapter : The 14th Ammendment</p></li>
          <li><p>Chapter : Legal Fictions</p></li>

          <li><p>Chapter : The Organic Act of 1871</p></li>
          <li><p>Chapter : The Buck Act</p></li>
          <li><p>Chapter : The Federal Reserve</p></li>
          <li><p>Chapter : Social Security and the New Deal</p></li>
          </ul>
          </div>
     </AccordionView>

<AccordionView title={'Comparison of the Giants, Africa and America'}>
          <div >
          <ul> Comparison of the Giants, Africa and America
          <li><p>Chapter : America, the Old World</p></li>
          </ul>
          </div>
     </AccordionView>
<AccordionView title={'History'}>
          <div >
          <ul> The British Colonies
          <li><p>Chapter : Arrival</p></li>
          <li><p>Chapter : Virginia</p></li>
          <li><p>Chapter : Maryland</p></li>
          <li><p>Chapter : Carolina</p></li> 
         <li><p>Chapter : Delaware</p></li>
          <li><p>Chapter : New Amsterdam</p></li>
          <li><p>Chapter : Massachussetts</p></li>
          </ul>
          </div>
     </AccordionView>

</section>);
}


