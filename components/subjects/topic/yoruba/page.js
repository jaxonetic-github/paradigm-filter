import React from "react";
import  {Link, Button,Image,Divider} from "@heroui/react";

import {ReferencesView} from './../../references/referencesView.jsx';

import {references} from '@/src/constants/references.js';
import CustomDialog from '@/components/utils/CustomDialog.tsx';


export default function YorubaPage() {

  return (   <div className="mx-auto sm:max-w-md max-w-md overflow-hidden rounded-xl bg-[#eee] shadow-md md:max-w-4xl">
<CustomDialog title='The history of the Yorubas'>
<iframe src="https://archive.org/embed/historyofyorubas00john" width="560" height="384" frameborder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowfullscreen></iframe>
</CustomDialog>    
<Divider className="my-1" />
  <div className="md:flex">
      <p className="text-sm font-semibold text-indigo-500 uppercase"> Kojoda Calendar</p>
      <p>The Yoruba traditional calendar, called Kójódá starts the new year on June 3rd and ends on June 2nd the following year.  It's
      a lunar calendar with a 4-day week(each day honoring different Orisa), 7 weeks in a month, and 13 months in a year-- so their year
       is 364 days long. The months and weeks ar deeply tied to farming cycles, moon phases, and religious rituals.</p>
       <p>For the Ifá New Year, the biggest celebration happens in Ile Ifé at the Oke Itase temple.  There, people gather for prayers, music, 
       drumming, and the all important Ifá divination, where the year's spiritual forecast is revealed.  It's a time for reconnecting with 
       community, honoring ancestors, and celebrating with lots of food and festivities!</p>
       <p>According to the Yoruba traditional calendar, as of June 3, 2025, it will be the year 10,067 in Yoruba.</p>
        </div>
        <p>--written by Ifawaleola(Facebook handle)</p>

</div>);
}
