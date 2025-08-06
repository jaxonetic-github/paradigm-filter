import React from "react";
import  {Link, Button,Image} from "@heroui/react";
import HonorableMentionVideos from '@/components/subjects/media/honorableMentionVideos.js';
import {Accordion, AccordionItem} from "@heroui/react";
import CustomDialog from '@/components/utils/CustomDialog.tsx';

import {ReferencesView} from '@/components/subjects/references/referencesView.jsx';
import  {YoutubeEmbed} from "@/components/utils/youtubeEmbed.js";

import {references, nzingaProfileRecord} from '@/src/constants/references.js';


export default function FreedomPage() {

  const profileRecord = nzingaProfileRecord;
  return ( <div>  <div className="mx-auto sm:max-w-md max-w-md overflow-hidden rounded-xl bg-[#eee] shadow-md md:max-w-4xl">
  
  <div className="">
  <div><p>There is no evidence that Harriet Tubman ever said,&quot;I freed thousands of slaves, and could have freed thousands more, if only they knew they were slaves&quot;; nonetheless,  the message rings true.</p></div>
    <div className="md:shrink-0"> 
     <iframe width="560" height="315" src="https://www.youtube.com/embed/8ecAeq62qmA?si=e4pKZ_U4GSUgPuM4" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
    <div className="p-8">
      <div className="text-sm font-semibold tracking-wide text-indigo-500 uppercase">Freedom vs Slavery</div>
        </div>
   </div>
</div>



  <CustomDialog title='The Wonder Twins: Message To The Moors, The Israelites And The Kemetics.' organization='' source=''>{YoutubeEmbed('kGI6LNu-Vgk')}</CustomDialog>    

  <div><p className="indent-8">What does freedom mean to you?  Take some time to think about this because it is not a trivial question.
  Is freedom simply not being called a slave or not having chains, or having civil rights or...? </p>


<p className="indent-8">What did freedom mean to the Sephardic Moors(Jews and Mohamedans) who were expelled from Al Andalusia?</p>
 <p className="indent-8">What about those British colonists who wanted to run themselves independent of the British monarchy?</p>
 <p className="indent-8">How does your concept of freedom compare to theirs?</p> 

 <p className="indent-8">These type of questions are important because if you don't have clarity on the concept of freedom, how could you judge whether you were free or not.
  Furthermore, if you are unable to accurately discern your freedoms, how do you know you are really free. </p> </div>

<div>

<div>  <p>Under  EXECUTIVE ORDER 11490, the President can declare that a national emergency exists and the Executive Branch can:</p>
<dl>Executive Orders
  <dt>10990</dt>
  <dd>allows the government to take over all modes of transportation and
control of highways and seaports.</dd>

  <dt>10995</dt>
  <dd>allows the government to seize and control the communication
media.</dd>
  <dt>10997</dt>
  <dd>allows the government to take over all electrical power, gas,
petroleum, fuels and minerals.</dd>
  <dt>10995</dt>
  <dd>allows the government to seize and control the communication
media.</dd>
  <dt>10998</dt>
  <dd>allows the government to seize all means of transportation,
including personal cars, trucks or vehicles of any kind and total control over all highways,
seaports, and waterways.</dd>
  <dt>10999</dt>
  <dd>allows the government to take over all food resources and farms.</dd>
  <dt>11000</dt>
  <dd>allows the government to mobilize civilians into work brigades
under government supervision.</dd>
  <dt>11001</dt>
  <dd>allows the government to take over all health, education and
welfare functions.</dd>
<dt>11647</dt>
  <dd>??</dd>
</dl>
</div>
</div>
<Link show="true" isExternal underline="always" target={'_blank'}  href='https://www.federalregister.gov/executive-order/10997'>Federal Register</Link>
<p>
Did reading this affect your sense of freedom? Do you still feel free and in control of your life. Or do you just feel 
comfortable enough to not be apart of or set up , if necessary, a network of communities that are able to function
independently of the kleptocrats in the Federal Government.</p>

</div>);
}
