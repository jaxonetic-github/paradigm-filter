
import React from "react";
import {specificallyCompiledVideos, BLACKVWHITE_VIDEOLIST_KEY} from '@/src/constants/references.js';
import HonorableMentionVideos from '@/components/subjects/media/honorableMentionVideos.js';
import {YoutubeEmbed} from '@/components/utils/youtubeEmbed.js';
import CustomDialog from '@/components/utils/CustomDialog.tsx';
import {ReferenceView, referenceFilter, ReferencesGridView} from '@/components/subjects/references/referencesView.jsx';

import { Image, Divider, Link} from "@heroui/react";
import AccordionView from '@/components/utils/CustomAccordion.tsx';


export default function BritishColonies(){

    return (<section>
            <div><p>
            The evolution of the uncivilized criminal modern British culture, that still festers and corrupts British North America is evident in the celebration 
            of British heros and celebrities going farther than the 1500&apos;s.  The infamous brutality of Henry XIII as he forces the Catholics to give up their churches and faiths or face being hanged, drawned and quartered , as was done at Westminster Abby in the 1530s is an example.
            During the reign of Queen Elizabeth I, Francis Drake was knighted and celebrated, after return from a four year voyage around the world, on the Golden Hind, with more than enough stolen/pirated treasures taken from Spanish Conquistadores to satisfy the British National debt.
            Ignoble acts like these catapulted the British to spread their infamous uncivilized criminal culture into the Americas.</p>
            <p>Seeds like this easily explain why the current North American colony of the United States so easily accepts criminals as heros. The colonizers celebrate Hawkins, and Drake, Columbus, Andrew Jackson, the Roosevelts, Rockefellers, Chase, and institutions like the brutal Catholic and Protestant churches, just to name a few.
            The schools in the North American colonies champion criminals and their culture over the extradorinary contributions of the Olmecs, Queen Nzinga, Fatima and he Fatima al-Fihri, ...
            </p></div>


  <div>
<p>The From Colonizer to Enslaved, The Whitewash, Paper Genocide</p>  
{YoutubeEmbed('5I_qy8wcYjE')}
<Divider/>

</div>

<div>   
    <p>US Colonists ...British Felons</p>
      <AccordionView title="Felons of Virginia">

    {YoutubeEmbed('i2yREDMg5SY')}
    20:00::"White" Servitude in The Colony Of Virginia / European Servants & Slaves
     </AccordionView>
</div>
<div>   
    <p>US Colonists ...British Felons</p>
    <AccordionView title="Felons of Maryland">
    {YoutubeEmbed('W-aRUJlHd4I')}
    20:00::"White" Servitude in The Colony Of Maryland / European Servants & Slaves
    </AccordionView>
</div>
<div>   
    <p>US Colonists ...British Felons</p>
    <AccordionView title="Felons of South Carolina">
    {YoutubeEmbed('dPdkia69Y7k')}
    20:00::"White" Servitude in Colonial South Carolina / European Servants & Slaves
    </AccordionView>
</div>
<div>   
    <p>US Colonists ...British Felons</p>
    <AccordionView title="Felons of North Carolina">
    {YoutubeEmbed('96qN4dkut4w')}
    20:00::"White" Servitude in Colonial North Carolina / European Servants & Slaves
    </AccordionView>
</div>
<div>   
    <p>US Colonists ...Moorish Quakers</p>
    <AccordionView title="Felons of Pennsylvania">
    {YoutubeEmbed('A-jUu5z1Q8c')}
    Pennsylvania's Colonial Sephardic Moorish Quakers...
    </AccordionView>
</div>

            </section>
        )
}