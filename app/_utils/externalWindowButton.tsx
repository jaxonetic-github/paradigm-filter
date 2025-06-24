'use client';
import React from "react";
import {Button} from "@heroui/react";

 export  const ExternalWindowButton = ({buttonText, externalURL}: {buttonText:string, externalURL:string}) => {
console.log(buttonText,'----', externalURL);
return (<div className="video-responsive">
   <Button
      className="inlinebutton relative border-1 rounded-full hover:-translate-y-1 px-12 shadow-xl bg-background/30 after:content-[''] after:absolute after:rounded-full after:inset-0 after:bg-background/40 after:z-[-1] after:transition after:!duration-500 hover:after:scale-150 hover:after:opacity-0"
      size="md"
      variant="bordered"
      onPress={()=>{openWindow(externalURL);}}
      >{buttonText}</Button>
  </div>
);
};

   const openWindow = (windowURL : string) => { window.open(windowURL, "_blank", 'left=100,top=100,width=320,height=420'); }
/**
  export const UniformButton = (buttonText, externalURL)=>  (<Button
      className="relative border-1 overflow-visible rounded-full hover:-translate-y-1 px-12 shadow-xl bg-background/30 after:content-[''] after:absolute after:rounded-full after:inset-0 after:bg-background/40 after:z-[-1] after:transition after:!duration-500 hover:after:scale-150 hover:after:opacity-0"
      size="md"
      variant="bordered"
      onPress={()=>openWindow(externalURL)}
    >
    {'buttonText'}
    </Button>);**/