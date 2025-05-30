'use client';
import React from "react";
import {Tabs, Tab, Card, CardBody, Divider,Image, Link} from "@heroui/react";
import {YoutubeEmbed} from './../../../_utils/youtubeEmbed.js';

 
export default function ComponentsHome() {
   return (<div className='mx-5'>

<div className={'flex items-center space-x-2 text-base nota-bene border-1 '}>
  <div className='nota-bene mx-5'>
  <Divider />     

    <div className='flex max-w-sm'>
        <Image
        className=" p-1   "
        src={'/images/truth-sohom-one.jpeg'} 
        fallbackSrc={'/images/imagenotavailable.jpeg'}
        alt={`Default Image not found for ['images/imagenotavailable.jpeg']`}
      />
          <Image
        className=" p-1  "
        src={'/images/truth-sohom-two.jpg'} 
        fallbackSrc={'/images/imagenotavailable.jpeg'}
        alt={`Default Image not found for ['images/imagenotavailable.jpeg']`}
      />
              <Image
        className=" p-1  "
        src={'/images/truth-sohom-end.jpg'} 
        fallbackSrc={'/images/imagenotavailable.jpeg'}
        alt={`Default Image not found for ['images/imagenotavailable.jpeg']`}
      />
      </div>
      <p className='flex float-right'>(17)--Truth by Swami, Paramhangsa Sohom</p>

        <Divider />    
   </div>   
</div>
      


  <div className="flex w-full flex-col">
      <Tabs aria-label="Options">
        <Tab key="Vedanta" title="Vedanta">
          <Card>
            <CardBody>
              <Link target="_blank" href='https://www.indiadivine.org/'>The Bhaktivedanta Ashram</Link><p>::IndiaDivine.org,All things Vedanta</p>
              <Link target="_blank" href='https://www.satyamyogaprasad.net/'>Satyam Yoga Prasad</Link><p>a digital library of the entire collected publications of the Bihar Yoga tradition.</p>

              <Link target="_blank" href='https://www.biharyoga.net/ypt-books.php/'>Bihar Yoga Books</Link><p>especially, Tattwa Shuddhi</p>
            </CardBody>
          </Card>
        </Tab>
        <Tab key="Qabalah" title="Tree of Life">
          <Card>
            <CardBody>
 <Image
        className=" p-1   "
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
        <Tab key="sincretistic" title="Sincretism">
          <Card>
            <CardBody>
            <Link href='https://archive.org/details/StephenSkinner-TheCompleteMagiciansTables-2007' > Complete Magicians Table</Link>
              
              
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