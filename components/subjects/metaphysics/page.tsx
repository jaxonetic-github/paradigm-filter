'use client';
import React from "react";
import {Tabs, Tab, Card, CardHeader, CardBody, Divider,Image, Link} from "@heroui/react";
import {YoutubeEmbed} from '@/components/utils/youtubeEmbed.js';
import CustomDialog from   '@/components/utils/CustomDialog.tsx';
import AccordionView from '@/components/utils/CustomAccordion.tsx';
import {ExternalWindowButton} from '@/components/utils/externalWindowButton.tsx';
import {ReferenceView, referenceFilter, ReferencesGridView} from '@/components/subjects/references/referencesView.jsx';

 
export default function ComponentsHome() {
   return (<div className='mx-5'>

  <div className="flex w-full flex-col">
      <Tabs aria-label="Options" >
        <Tab key="Vedanta" title="Vedanta" className='content-division'>
          <Card>
          <CardHeader className=' py-2'><p>Recommended External Links</p> 
           <p>
 <Link isDisabled showAnchorIcon underline="always" target="_blank" href='https://1024terabox.com/s/1hGHcDYdXTsiYEvZ-wfPhuA'>Meditation and Mantra</Link>
             <Link isDisabled showAnchorIcon underline="always" target="_blank" href='https://1024terabox.com/s/1ejHhOXd2nbFifxfya3nQjg'>Tantra, Mantra, Yantra, The Tantra Psychology</Link>
             <Link  isDisabled showAnchorIcon underline="always" target="_blank" href='https://1024terabox.com/s/1hGHcDYdXTsiYEvZ-wfPhuA'>Tattwa Shuddhi</Link>
</p>
          </CardHeader>
            <CardBody className="">
<ReferencesGridView  rows={referenceFilter([175, 176,177,178])}/>
                        </CardBody>
          </Card>
        </Tab>

        <Tab key="Qabalah" title="Tree of Life" className='content-division'>
          <Card>
            <CardBody>
                        <ReferencesGridView  rows={referenceFilter([170,171,172,173,174])}/>


            </CardBody>
          </Card>
        </Tab>

         <Tab key="Breath" title="Spirit / Breath" className='content-division'>
          <Card>
            <CardBody className="grid-cols-2">

<div className={'flex items-center space-x-2 text-base nota-bene border-1 '}>
  <div className='nota-bene '>
  <Divider />     

    <div className='mx-20'>
    <p>Spirit is the breath of life.  All things may exist in our limited 3d  perceived  reality but 
    it is spirit that  gives earthlings the sense of movement, motion; or better yet, vibration. 
    An appropriate anology can be found in the Vedic metaphor of the interplay between Shiva and Shakti or
     Prakriti and Purusha.  Shiva the still Consciousness is "motivated" to action, to a change in awareness,
     arguably even the earthly concept of time by Shakti's dance.  Shakti, Mother Nature, the Divine Mother,
     Iyanna, Ishtar(Easter), Astarte, Asherath, The Holy Spirit, Baal, the Madonna,..., the Serpent Qabalah-ically
     zig zagging up the Tree, or the meditation of the breadth up the Sushunna, are all aspect of the adoration of Spirit, Our Mother.</p>


     <p>
       She, as Mother Nature acting through our biological mothers, provides the axiomatic biological Laws
        that allow us to be born and guarantee us an "end" to this human experience.  This Divine Mother is our Generator,
        Operator, and Destoyer; that Divine Trinity of truth that permeates the trivial differences between theists, athiests, and everyone in between.
     </p>


     <p>
     The divine fractal of the G.O.D. aspect of Spirit evidenced through human physiology is the act of breathing.  Breathing 
     involves inhaling (Generatoring), exhaling (Destroying), and in between those states, we are operating by holding our breath.
     Use a sprinkle of imagination to envision your spiritual self inspired into human experience/life by breath/spirit, 
      just as Shiva uses Shakti for inspiration. </p>
<p>Divine Fractals like Pranayama, Qi-gong, ..., Astrology are doorways onto the path of finding your so called Higher Self or Truer Self.</p>

      </div>
       <div className='mx-20'>
    <p>Occult 101</p>
    <p></p>
    </div>
      <p className='flex float-right'>------</p>

        <Divider />    
   </div>   
</div>
</CardBody>
          </Card>
        </Tab>
         <Tab key="Astrology" title="Astrology" className='content-division'>
          <Card>
            <CardBody className="grid-cols-2">
           Rashi, Yoga, Rashi Yoga, Parashara techniques,
            Jaimini Sutra (Who the person really is, What they are here for, how long they will leave, techniques for concrete things)
            Parashara takes the whole person into account.  Can be made for predictions,It gives pschological and spiritual insights.  
   
<ReferencesGridView  rows={referenceFilter([158,159,160,161,162,163,164,165,166,167,168,169])}/>
</CardBody>
          </Card>


        </Tab>       
        <Tab key="sincretistic" title="Sincretism" className='content-division'>
            <ReferencesGridView  rows={referenceFilter([153, 154, 53, 155, 156, 157])}/>
        </Tab>
      </Tabs>
    </div>


</div>);
}