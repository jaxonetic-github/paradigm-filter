import React from "react";
import {Button} from "@heroui/react";

 export const YoutubeEmbed = ( embedId) => (
  <div className="video-responsive">
    <iframe
      width="380"
      height="280"
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
);
 export const UniformButton = (buttonText, externalURL) => (
  <div className="video-responsive">
   <Button
      className="relative border-1 overflow-visible rounded-full hover:-translate-y-1 px-12 shadow-xl bg-background/30 after:content-[''] after:absolute after:rounded-full after:inset-0 after:bg-background/40 after:z-[-1] after:transition after:!duration-500 hover:after:scale-150 hover:after:opacity-0"
      size="md"
      variant="bordered"
      onPress={()=>openWindow(externalURL)}
      >{'buttonText'}</Button>
  </div>
);

  export const openWindow = (windowURL) => { window.open(windowURL, "_blank", 'left=100,top=100,width=320,height=420'); }
/**
  export const UniformButton = (buttonText, externalURL)=>  (<Button
      className="relative border-1 overflow-visible rounded-full hover:-translate-y-1 px-12 shadow-xl bg-background/30 after:content-[''] after:absolute after:rounded-full after:inset-0 after:bg-background/40 after:z-[-1] after:transition after:!duration-500 hover:after:scale-150 hover:after:opacity-0"
      size="md"
      variant="bordered"
      onPress={()=>openWindow(externalURL)}
    >
    {'buttonText'}
    </Button>);**/