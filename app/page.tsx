
import React from 'react';
import BookformButton from '@/components/bookform/bookformButton.tsx';
import ReservoirEntryButton from '@/components/bookform/reservoirEntryButton.tsx';
import SessionComponent from '@/components/authentication/session.tsx';
import AppNavButton from '@/components/utils/NavButton.tsx';

import {Button, Link,Image} from "@heroui/react";

export default function ClientLayout() {

  //const session = await auth0.getSession();

  //<Auth0Provider user={session?.user}>

  return (
    <div  >
     
        <main className="bg-red-800  @Container ">
<div className="place-self-center  md:w-3/4 lg:w-full">
        <div className=""><ReservoirEntryButton/></div>


        <div className=""><BookformButton/></div> 
  </div>
        </main>
     
    </div>
  );
}
