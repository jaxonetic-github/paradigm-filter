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

 export default function money() {

  return (<div className='mx-5'>
        The Amazigh (Berbers) and the <Link underline="always" isExternal showAnchorIcon href='https://vocal.media/history/igudar-morocco-s-ancient-banking-system-and-the-story-of-communal-trust'>The First Banking System </Link>

    <div>
        <h1 className="font-bold text-lg">Context</h1>
        <div className='mx-5'><CustomDialog title='Money Masters'><iframe width="560" height="315" src="https://www.youtube.com/embed/AOk3wBuQNcE?si=68K3zqhgk87Xq0eA" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe></CustomDialog>:: This gives context and details on US banking history and the corruptions that has caused to be in the bankrupt state it currently is in (as of 2025).</div>
        <div className='mx-5'><CustomDialog title='Economic Dissonance'><iframe width="560" height="315" src="https://www.youtube.com/embed/g3kjQS8qh7E?si=QGSbgUExv3qkxneZ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe></CustomDialog>:: The American Dollar is currency but NOT money.  This early 2025 snippet gives an example of why it matters both locally and globally.</div>
        <div className='mx-5'><CustomDialog title='US Federal Foreign Aide (Thomas Sowell short)'><iframe width="560" height="315" src="/shorts/WhyAmericaShouldStopForeignAid-ThomasSowellTV.mp4" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe></CustomDialog>:: Us Foreign Aide :: Subsidizing irresponsability...</div>
        <div className='mx-5'><Link underline="always" isExternal showAnchorIcon href={'https://1024terabox.com/s/1DfuZObjQCtbdWu-vQ_t5Cg'} >Modern Money Mechanics</Link>:: Federal reserve Bank of Chicago</div>
    <div  className='mx-5'><Link underline="always" isExternal showAnchorIcon href='https://1024terabox.com/s/1G1jaK3081rfqEOmMRZ37rA'>The Creature from Jekyll Island</Link>:: The deception behind the Federal Reserve</div>
    </div>
</div>);
}
