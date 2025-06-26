'use client';
import React from "react";
import {Tabs, Tab, Card, CardBody, Divider,Image, Link} from "@heroui/react";
import {YoutubeEmbed} from './../../../_utils/youtubeEmbed.js';
import CustomDialog from   './../../../_utils/CustomDialog.tsx';
import AccordionView from './../../../_utils/CustomAccordion.tsx';
import {ExternalWindowButton} from './../../../_utils/externalWindowButton.tsx';

 
export default function ComponentsHome() {
   return (<div className='mx-5'>

  <div className="flex w-full flex-col">
      <Tabs aria-label="Options" >
        <Tab key="Vedanta" title="Vedanta" className='content-division'>
          <Card>
            <CardBody className="grid-cols-2">
              <div><Link showAnchorIcon underline="always" target="_blank" href='https://www.indiadivine.org/'>The Bhaktivedanta Ashram</Link><span>::IndiaDivine.org,All things Vedanta</span></div>
              <div><Link showAnchorIcon underline="always" target="_blank" href='https://www.satyamyogaprasad.net/'>Satyam Yoga Prasad</Link><span>a digital library of the entire collected publications of the Bihar Yoga tradition.</span></div>
              <div><Link showAnchorIcon underline="always" target="_blank" href='https://www.sathyasai.org/devotional/gayatri'>Gayatri Mantra</Link><p></p></div>
             <Link showAnchorIcon underline="always" target="_blank" href='https://1024terabox.com/s/1hGHcDYdXTsiYEvZ-wfPhuA'>Meditation and Mantra</Link>
             <Link showAnchorIcon underline="always" target="_blank" href='https://1024terabox.com/s/1ejHhOXd2nbFifxfya3nQjg'>Tantra, Mantra, Yantra, The Tantra Psychology</Link>
             <Link showAnchorIcon underline="always" target="_blank" href='https://1024terabox.com/s/1hGHcDYdXTsiYEvZ-wfPhuA'>Tattwa Shuddhi</Link>
              <div><Link showAnchorIcon underline="always" target="_blank" href='https://www.biharyoga.net/ypt-books.php/'>Bihar Yoga Books</Link><span>especially, Tattwa Shuddhi</span></div>
            </CardBody>
          </Card>
        </Tab>

        <Tab key="Qabalah" title="Tree of Life" className='content-division'>
          <Card>
            <CardBody>
            
<CustomDialog title='What is Qabalah?' organization='A 30-Minute overview of the Mystical tree of life' source='Travis Magus | LVX777'>{YoutubeEmbed('iDCNPc1RyMg')}</CustomDialog>    
<CustomDialog title='Dr Phil Valentine - Tree of life KABBALAH metaphysical lecture (early 1990s)'><iframe width="560" height="315" src="https://www.youtube.com/embed/XGtRhRh4G60?si=4mVmoY3A7MfmsGTP" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe></CustomDialog>    
<CustomDialog title='Kamitic Tree of Life (image)'>
 <Image
        className="p-1"
        src={'/images/kamitictreeoflife.png'} 
        fallbackSrc={'/images/imagenotavailable.jpeg'}
        alt={`Default Image not found for ['images/imagenotavailable.jpeg']`}
      />
</CustomDialog>    

             Suggested Reading :: 
            <CustomDialog title='Dione Fortune - Mystical Qabalah'><iframe src="https://archive.org/embed/mysticalqabalah00fort_0" width="560" height="384" frameBorder="0"  allowFullScreen></iframe></CustomDialog>    
            <CustomDialog title='Mystical Qabalah Book Study (Editorial Update) | Travis Magus'>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/HhiBcF6QziQ?si=7i09NWGT6BDCFOFE" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </CustomDialog>    

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
    <CustomDialog title='Astrologigal Interview - Verifying techniques'><iframe width="560" height="315" src="https://www.youtube.com/embed/3H27_V3S4QE?si=DC8fnH5V0aJMN0il" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe></CustomDialog>    
<CustomDialog title='Why would a Vedic Astrologer use Tropical - Ryan Kurcak'><iframe width="560" height="315" src="https://www.youtube.com/embed/wkLcDk2fESk?si=Npvs4onhtZaSFURR" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe></CustomDialog>    
    <CustomDialog title='Tropical vs Sidereal in Vedic - Vic De Cara'><iframe width="560" height="315" src="https://www.youtube.com/embed/eiGrAwe78-A?si=u2Khm8ijq0J_0LBt" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe></CustomDialog>    
<ExternalWindowButton 
          buttonText = 'Vedic Astrology Course -Ryan Cursack'
          externalURL = 'https://www.youtube.com/playlist?list=PLoHfx_U4o06SYXKUgTmugg3VqYDsR1ud0' /> 

<CustomDialog title='Traditional Dignities and Debilitations' organization='' source=''>{YoutubeEmbed('pVz6xT7yHDs')}</CustomDialog>    
<CustomDialog title='Ancient House Divisions' organization='' source=''>{YoutubeEmbed('pVz6xT7yHDs')}</CustomDialog>    
<CustomDialog title='Vedic vs Tropical - Santos Bonacci' organization='' source=''>{YoutubeEmbed('ZrXHeOm_QPE')}</CustomDialog>    
<CustomDialog title='Differences in Western and Easter Astrology' organization='' source=''>{YoutubeEmbed('NRF2ledC7Io')}</CustomDialog>    

<CustomDialog title='Sidereal vs Tropical in Vedic' organization='' source=''>{YoutubeEmbed('bHN8HhV5NrQ')}</CustomDialog>    
<CustomDialog title='Sidereal and Tropical animated explanation' organization='' source=''>{YoutubeEmbed('iV0W26XDmrk')}</CustomDialog>    
<CustomDialog title='Tropical in Vedic - Vic De Cara' organization='' source=''>{YoutubeEmbed('GXXqddxfjUM')}</CustomDialog>    
<CustomDialog title='How Pluto and Outer planets got their meanings' organization='' source=''>{YoutubeEmbed('3kZlUQGj-1k')}</CustomDialog>    
<CustomDialog title='House  Divisions Explained' organization='' source=''>{<iframe width="560" height="315" src="https://www.youtube.com/embed/6ZmqOgdxkK4?si=O2AVtydetFKEqpck" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>}</CustomDialog>    
</CardBody>
          </Card>
        </Tab>       
        <Tab key="sincretistic" title="Sincretism" className='content-division'>
          <Card>
            <CardBody>
            
    <CustomDialog title='First Book of Azrael'><iframe src="https://archive.org/embed/firstbookofazrae0001unse" width="560" height="384" frameBorder="0"  allowFullScreen></iframe></CustomDialog>    
    <CustomDialog title='Complete Magicians Table'><iframe src="https://archive.org/embed/StephenSkinner-TheCompleteMagiciansTables-2007" width="560" height="384" frameBorder="0" allowFullScreen></iframe></CustomDialog>    
    <CustomDialog title='astral doorways j h brennan'><iframe src="https://archive.org/embed/astral-doorways-j-h-brennan" width="560" height="384" frameBorder="0"  allowFullScreen></iframe></CustomDialog>    

<CustomDialog title='Qabalistic Symbolism Vol 2 (24th path) | Travis Magus | Death Card' organization='' source=''>{YoutubeEmbed('BoqvoNLVy8k')}</CustomDialog>    
                         
              Flat Earth::== 
              {YoutubeEmbed('mhc8ydSFhxI')}28:03-- notice the reference about
              <Link href={'https://1024terabox.com/s/1MjULJ_5uNKDCitVWJS3v2A'}>Sevan</Link>
            </CardBody>
          </Card>
        </Tab>
      </Tabs>
    </div>


</div>);
}