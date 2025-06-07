'use client';
import React from "react";
import {Tabs, Tab, Card, CardBody, Divider,Image, Link} from "@heroui/react";
import {YoutubeEmbed} from './../../../_utils/youtubeEmbed.js';

 
export default function ComponentsHome() {
   return (<div className='mx-5'>

<div className={'flex  space-x-2 text-base nota-bene '}>
  <div className='nota-bene mx-5'>
  <Divider />     

    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 '>
        <Image
        className=""
        src={'/images/truth-sohom-one.jpeg'} 
        fallbackSrc={'/images/imagenotavailable.jpeg'}
        alt={`Default Image not found for ['images/imagenotavailable.jpeg']`}
        width={360}
      />
          <Image
        className=""
        src={'/images/truth-sohom-two.jpg'} 
        fallbackSrc={'/images/imagenotavailable.jpeg'}
        alt={`Default Image not found for ['images/imagenotavailable.jpeg']`}
                width={360}
      />
              <Image
        className=""
        src={'/images/truth-sohom-end.jpg'} 
        fallbackSrc={'/images/imagenotavailable.jpeg'}
        alt={`Default Image not found for ['images/imagenotavailable.jpeg']`}
                width={360}
      />
      </div>
      <p className='flex float-right'>(17)--Truth by Swami, Paramhangsa Sohom</p>

        <Divider />    
   </div>   
</div>
      

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
      <p className='flex float-right'>------</p>

        <Divider />    
   </div>   
</div>
      
  <div className="flex w-full flex-col">
      <Tabs aria-label="Options">
        <Tab key="Vedanta" title="Vedanta" className='content-division'>
          <Card>
            <CardBody className='content-division'>
              <Link target="_blank" href='https://www.indiadivine.org/'>The Bhaktivedanta Ashram</Link><p>::IndiaDivine.org,All things Vedanta</p>
              <Link target="_blank" href='https://www.satyamyogaprasad.net/'>Satyam Yoga Prasad</Link><p>a digital library of the entire collected publications of the Bihar Yoga tradition.</p>
              <Link target="_blank" href='https://www.sathyasai.org/devotional/gayatri'>Gayatri Mantra</Link><p>a digital library of the entire collected publications of the Bihar Yoga tradition.</p>
             <Link target="_blank" href='https://1024terabox.com/s/1hGHcDYdXTsiYEvZ-wfPhuA'>Meditation and Mantra</Link>
             <Link target="_blank" href='https://1024terabox.com/s/1ejHhOXd2nbFifxfya3nQjg'>Tantra, Mantra, Yantra, The Tantra Psychology</Link>
             <Link target="_blank" href='https://1024terabox.com/s/1hGHcDYdXTsiYEvZ-wfPhuA'>Tattwa Shuddhi</Link>
              <Link target="_blank" href='https://www.biharyoga.net/ypt-books.php/'>Bihar Yoga Books</Link><p>especially, Tattwa Shuddhi</p>
            </CardBody>
          </Card>
        </Tab>

        <Tab key="Qabalah" title="Tree of Life" className='content-division'>
          <Card>
            <CardBody>
 <Image
        className="p-1"
        src={'/images/kamitictreeoflife.png'} 
        fallbackSrc={'/images/imagenotavailable.jpeg'}
        alt={`Default Image not found for ['images/imagenotavailable.jpeg']`}
      />
             Suggested Reading :: 
             <Link target="_blank" href='https://1024terabox.com/s/1YOZNeZR5ACjCAU8OOs65Ig'>Dione Fortune - Mystical Qabalah</Link>

             Travis Magus Book Reading
            </CardBody>
          </Card>
        </Tab>
        <Tab key="sincretistic" title="Sincretism" className='content-division'>
          <Card>
            <CardBody>
            <iframe src="https://archive.org/embed/firstbookofazrae0001unse" width="560" height="384" frameBorder="0"  allowFullScreen></iframe>

            <Link  target="_blank" href='https://archive.org/details/StephenSkinner-TheCompleteMagiciansTables-2007' > Complete Magicians Table</Link>
             
                          <Link  target="_blank" href='https://1024terabox.com/s/1-S0-P1qszSCSRTADFXRjHQ' >Astral Doorways</Link>
              Flat Earth::== 
              {YoutubeEmbed('mhc8ydSFhxI')}28:03-- notice the reference about
              <Link href={'https://1024terabox.com/s/1MjULJ_5uNKDCitVWJS3v2A'}>Sevan </Link>
            </CardBody>
          </Card>
        </Tab>
      </Tabs>
    </div>


</div>);
}