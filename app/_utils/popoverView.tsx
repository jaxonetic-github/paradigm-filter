"use client"
import React from "react";
import  {Image, Link, Divider} from "@heroui/react";
import {Popover, PopoverTrigger, PopoverContent, Button} from "@heroui/react";
import {Card, CardHeader, CardBody, CardFooter} from "@heroui/react";
import  {PopoverType, ProfileType} from "./../src/constants/appTypes.ts";


export const SimplePopoverView =({ infoRecord, children}:{infoRecord:PopoverType, children:React.ReactNode})  =>{
 return (<Popover placement="right">
      <PopoverTrigger>
        <Button className={'underline'}>{infoRecord.title}</Button>
      </PopoverTrigger>
      <PopoverContent>
       
         <Card className="py-4 bg-[#deb887]">

      <CardBody className="overflow-visible py-2">
      
      <div className="mx-auto sm:max-w-md max-w-md overflow-hidden rounded-xl bg-[#eee] shadow-md md:max-w-4xl">
  <div className="md:flex">
        <div className="md:shrink-0"> 
          <Image className="p-4 h-[10%] object-cover sm:w-full md:h-full md:w-89"
                src={infoRecord.imgURL} 
                fallbackSrc={'/images/imagenotavailable.jpeg'}
                alt={`Default Image not found for [${infoRecord.imgURL}]`}
              />

     <div className="p-8">
      <p className="text-sm font-semibold tracking-wide text-indigo-500 uppercase">{infoRecord.title}</p>

    </div>

        </div>

    </div>    
 </div>
      </CardBody>


      <CardFooter>  
      {children}
      </CardFooter>
    </Card>
      </PopoverContent>
    </Popover>);
};


export const PopoverView =({ infoRecord, children}:{infoRecord:PopoverType, children:React.ReactNode})  =>{
 return (<Popover placement="right">
      <PopoverTrigger>
        <Button className={'underline'}>{infoRecord.title}</Button>
      </PopoverTrigger>
      <PopoverContent>
       
         <Card className="py-4 bg-[#deb887]">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold">{infoRecord.what}</p>
        <small className="text-default-500">{infoRecord.when}</small>
        <h4 className="font-bold text-large">{infoRecord.desc}</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src={infoRecord.imgURL}
          width={270}
        />
        <Divider/>
      </CardBody>
      <CardFooter>
      {children}
      
      </CardFooter>
    </Card>
      </PopoverContent>
    </Popover>);
};

