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
import {ReferenceView,referenceFilter, ReferencesGridView} from './../../references/referencesView.jsx';

 export default function money() {

  return (<div className='mx-5'>

       Different concepts of banking 
        <ReferencesGridView  rows={referenceFilter([123, 124])}/>
    <div>
        <h1 className="font-bold text-lg">Context</h1>
                     <ReferencesGridView  rows={referenceFilter([125, 126, 127,128,129,130])}/>

    </div>
</div>);
}
