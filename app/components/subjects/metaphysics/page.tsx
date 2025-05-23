'use client';
import React from "react";
import {Tabs, Tab, Card, CardBody, Divider,Image} from "@heroui/react";


 
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
              Advaita Vedanta
              Tattwa Shuddhhi
            </CardBody>
          </Card>
        </Tab>
        <Tab key="Qabalah" title="Qabalah">
          <Card>
            <CardBody>
             Suggested Reading :: Dione Fortune - Mystical Qabalah
             Travis Magus Book Reading
            </CardBody>
          </Card>
        </Tab>
        <Tab key="sincretistic" title="Sincretic">
          <Card>
            <CardBody>
              [Complete Magicians Table]
              Flat Earth::== <video key={'sevanbomarflatearth'} width="320" height="240" controls preload="none"><source src={'https://1024terabox.com/s/1MjULJ_5uNKDCitVWJS3v2A'} type="video/mp4" />Your browser does not support the video tag.</video>
            </CardBody>
          </Card>
        </Tab>
      </Tabs>
    </div>



</div>);
}