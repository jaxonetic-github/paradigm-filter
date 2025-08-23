'use client';
import React from "react";
import  {Image, Button} from "@heroui/react";
import {nzingaProfileRecord,  NO_PHOTO_ALTERNATIVE_URI, tableColumns,citationColumns,references} from '@/src/constants/references.js';
import {Tabs, Tab, Card, CardFooter, CardBody, Divider, Link} from "@heroui/react";
import {ExternalWindowButton} from '@/components/utils/externalWindowButton.tsx';
import AccordionView from '@/components/utils/CustomAccordion.tsx';
import {ReferenceView,referenceFilter, ReferencesGridView} from '@/components/subjects/references/referencesView.jsx';

import  {SimplePopoverView} from "@/components/utils/popoverView.tsx";
import  {YoutubeEmbed} from "@/components/utils/youtubeEmbed.js";
import CustomDialog from '@/components/utils/CustomDialog.tsx';
import Definitions from '@/components/subjects/epistemology/definitions.tsx';
import CriticalThinking from '@/components/subjects/epistemology/criticalthinking.tsx';
import SocialControl from '@/components/subjects/epistemology/socialcontrol.tsx';
import Introduction from '@/components/subjects/epistemology/introduction.tsx';

export default function Dissonance() {

  return (<div className=''>
   
         <h3>Appendix of Dissonnance</h3>
          <div >
          <Card>
            <CardBody>
            <ExternalWindowButton
          buttonText =  'Oneness in Diversity'
          externalURL = 'https://youtube.com/shorts/8Ycz1ptRI7Q?si=0cRz5zhSP4r_6Opx' /> 

          <ExternalWindowButton
          buttonText =  'Powerful Truth by Joshua Maponga | Cultural Identity'
          externalURL = 'https://youtube.com/shorts/YYqbPL1kznA?si=788QDFayJE9UcHij' /> 
          <ExternalWindowButton
          buttonText =  'Challenging Who Decides Nuclear Weapon Rights '
          externalURL = 'https://youtube.com/shorts/bJ-dq8xkigs?si=23dSQ9nh8o3tmnoR' /> 

           <ExternalWindowButton
          buttonText =  ' The West Against African Interests'
          externalURL = 'https://youtube.com/shorts/Yxi32ORSs4I?si=aWI1hGrYetZUVBAk' /> 
           <ExternalWindowButton
          buttonText =  'James McCune Smithe'
          externalURL = 'https://youtube.com/shorts/aSITRF4SRNI?si=_qjCZce8iFrePD1A' /> 

          <ExternalWindowButton
          buttonText =  'Orlando Brown'
          externalURL = 'https://youtube.com/shorts/ncrfxR6Kuok?si=PcvMmqHof1yR8JXc' /> 
          <ExternalWindowButton
          buttonText =  'all black national convention'
          externalURL = 'https://youtube.com/shorts/j4aI-eMY790?si=MRFLt_gh_7azDmRP' /> 

            </CardBody>
          </Card>

          </div>


        <Divider />

        <Divider />
</div>);
}


/**  
 * 



 <p hidden>d{`Words are one of the most common and powerful forms of magick. You can shape other people&apos;s reality
      with the spell your words or other symbolic expressions or gestures which communicate to us.  We might say that bad 
      magick is akin to an untruth because it imposes a false or artificial idea, an illusion, in the perception of your victim.`}</p> 
    <p hidden>d{`<!-- 
       After over a millenia of <SimplePopoverView infoRecord={bookburnings_Popover}> <iframe width="560" height="315" src="https://1024terabox.com/s/1P-DsBMK9ZJ7a8YhdLhMZlA" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe></SimplePopoverView> 
       and a willfull transplantation of education into indoctrination(@See <SimplePopoverView infoRecord={cgwoodsonact_Popover}> <ul><li> ** Miseducation Of the Negro</li><li> ** Education of the Negro</li></ul></SimplePopoverView>, @See <SimplePopoverView infoRecord={osage_Popover}> Osage schools</SimplePopoverView>), it seems wise to audit and verify what we think we know to be true with facts.  The alternative is to risk following the paradigm, the wish or even spell of someone else, instead of your purpose.
-->`}</p> 


 <Button
      disableRipple
      className="relative overflow-visible rounded-full hover:-translate-y-1 px-12 shadow-xl bg-red/60 after:content-[''] after:absolute after:rounded-full after:inset-0 after:bg-background/40 after:z-[-1] after:transition after:!duration-500 hover:after:scale-150 hover:after:opacity-0"
      size="lg"
    >
      Press me
    </Button>
 * 
 *  <ReferencesTable references={references}/>
 * <ReferencesFilters handleDisciplineFilterChange={()=>console.log("Filter Changed");} />

 * <Topic />
        <Divider />
        <ProfileHome profileRecord={nzingaProfileRecord}/>
        <Divider />*/
