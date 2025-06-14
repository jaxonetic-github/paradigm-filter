'use client';
import React from "react";
//import {specificallyCompiledVideos} from './../../../../src/constants/references.js';
import { Link,Button} from "@heroui/react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@heroui/react";
import CustomDialog from './../../../../_utils/CustomDialog.tsx'
import {ExternalWindowButton} from './../../../../_utils/externalWindowButton.tsx';

 export default function money() {

  return (<div className='mx-5'>
<ExternalWindowButton
          buttonText = 'The First Banking System'
          externalURL = 'https://vocal.media/history/igudar-morocco-s-ancient-banking-system-and-the-story-of-communal-trust' /> 

       Different concepts of banking 
    <div>
        <h1 className="font-bold text-lg">Context</h1>
        <div className='mx-5'><CustomDialog title='US Dual Banking System'><iframe width="560" height="315" src="https://fraser.stlouisfed.org/title/statements-speeches-william-m-isaac-5815/reflections-dual-banking-system-578307" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe></CustomDialog>:: Some Reflections on Our Dual Banking System : Address Before the Georgia Bankers Association, Jekyll Island, Georgia Date: May 7, 1979</div>
        <div className='mx-5'><CustomDialog title='Money Masters'><iframe width="560" height="315" src="https://www.youtube.com/embed/AOk3wBuQNcE?si=68K3zqhgk87Xq0eA" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe></CustomDialog>:: This gives context and details on US banking history and the corruptions that has caused to be in the bankrupt state it currently is in (as of 2025).</div>
        <div className='mx-5'><CustomDialog title='Economic Dissonance'><iframe width="560" height="315" src="https://www.youtube.com/embed/g3kjQS8qh7E?si=QGSbgUExv3qkxneZ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe></CustomDialog>:: The American Dollar is currency but NOT money.  This early 2025 snippet gives an example of why it matters both locally and globally.</div>
        <div className='mx-5'><CustomDialog title='US Federal Foreign Aide (Thomas Sowell short)'><iframe width="560" height="315" src="/shorts/WhyAmericaShouldStopForeignAid-ThomasSowellTV.mp4" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe></CustomDialog>:: Us Foreign Aide :: Subsidizing irresponsability...</div>
        <div className='mx-5'><CustomDialog title='Modern Money Mechanics'><iframe src="https://archive.org/embed/modern-money-mechanics" width="560" height="384" frameBorder="0"  allowFullScreen></iframe></CustomDialog>:: Federal reserve Bank of Chicago</div>
    <div  className='mx-5'><Link underline="always" isExternal showAnchorIcon href='https://1024terabox.com/s/1G1jaK3081rfqEOmMRZ37rA'>The Creature from Jekyll Island</Link>:: The deception behind the Federal Reserve</div>
    </div>
</div>);
}
