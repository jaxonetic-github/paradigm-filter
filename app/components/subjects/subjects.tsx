import React from "react";
//import Link from 'next/link';
import {Button, Divider, Link} from "@heroui/react";


 
export default function ContentMap() {
   return (<div className='content top-25 py-2 z-10 bg-[#eee] mx-5'>
<h1>Content Map</h1>
<div className={'space-x-2 '}>
<div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 '>


<div className="content-division  flex flex-col sm:flex-row sm:items-center sm:gap-4 ">
  <div className="space-y-2 text-center sm:text-left">
    <div className="space-y-0.5">
        <Button as={Link} color={"primary"} href={"/components/subjects/epistemology"} variant={"flat"}> <p className={"font-bold text-inherit"}>Epistemology</p></Button>
    </div>

  </div>
</div>

<div className="content-division flex flex-col sm:flex-row sm:items-center sm:gap-4 ">
  <div className="space-y-2 text-center sm:text-left">
    <div className="space-y-0.5">
        <Button as={Link} color={"primary"} href={"/components/subjects/history"} variant={"flat"}> <p className={"font-bold text-inherit"}>History</p></Button>
    </div>
<Divider className="my-1" />
     <Link className="border-purple-200  hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700" href='/components/subjects/topic/bible'>The Bible(s)</Link> 
     <Link className="border-purple-200  hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700 " href={'/components/subjects/illuminators'}>Characters and Bios</Link>
  </div>
</div>


<div className="content-division flex flex-col sm:flex-row sm:items-center sm:gap-4 ">
  <div className="space-y-2 text-center sm:text-left">
 
        <Button as={Link} color={"primary"} href={"/components/subjects/civics"} variant={"flat"}> <p className={"font-bold text-inherit"}>Civics and Law</p></Button>

<Divider className="my-1" />
 <Link className="border-purple-200  hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700 "
        href='/components/subjects/topic/rights'>Rights</Link>
    <Link className="border-purple-200  hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700 "
        href='/components/subjects/topic/constitution'>Constitution</Link>
    <Link className="border-purple-200  hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700 "
        href={'/components/subjects/topic/money'}>Money</Link>
    <Link className="border-purple-200  hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700 "
        href={'/components/subjects/topic/blackandwhite'}>Colorable People</Link>
  </div>
</div>

<div className=" content-division flex flex-col sm:flex-row sm:items-center sm:gap-4 ">
  <div className="space-y-2 text-center sm:text-left">
    <div className="space-y-0.5">
    <Button as={Link} color={"primary"} href={"/components/subjects/metaphysics"} variant={"flat"}> <p className={"font-bold text-inherit"}>Occult and Metaphysics</p></Button>
      <p className="hidden font-medium text-gray-500">Where reality and spirituality diverge or converge depending on what you know or what your beliefs hinder you from knowing.</p>
    </div>

  </div>
</div>

<div className="content-division hidden  flex flex-col sm:flex-row sm:items-center sm:gap-4 ">
  <div className="space-y-2 text-center sm:text-left">
    <div className="space-y-0.5">
    <Button as={Link} color={"primary"} href={"/components/subjects/metaphysics"} variant={"flat"}> <p className={"font-bold text-inherit"}>Health</p></Button>
    </div>

  </div>
</div>

<div className="content-division flex flex-col sm:flex-row sm:items-center sm:gap-4 ">
  <div className="space-y-2 text-center sm:text-left">
    <div className="space-y-2">
     <p className={"font-bold text-inherit"}>Cultures &amp; Arts</p>
    </div>
    <Divider className="my-1" />
        <Link className="border-purple-200  hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700 "
        href={'/components/subjects/topic/capoeira'}>Capoeira</Link>

  </div>
</div>


<div className="content-division flex flex-col sm:flex-row sm:items-center sm:gap-4 ">
  <div className="space-y-2 text-center sm:text-left">
    <div className="space-y-0.5">
    <Button as={Link} color={"primary"} href={"/components/subjects/topic/communication"} variant={"flat"}> <p className={"font-bold text-inherit"}>Communication</p></Button>
    </div>

  </div>
</div>


  <div className="content-division flex flex-col sm:flex-row sm:items-center sm:gap-4 sm:py-4 ">
  <div className="space-y-2 text-center sm:text-left">
   <p className={"font-bold text-inherit"}>Misc</p>
   <Divider className="my-1" />
             <Link className="border-purple-200  hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700 "
        href={'/components/subjects/media'}>Media</Link>
     <Link className="border-purple-200  hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700 "
        href={'/components/subjects/topic/blackandwhite'}>Frequently Asked Questions</Link>
  </div></div>


<div className="content-division  flex flex-col sm:flex-row sm:items-center sm:gap-4 ">
  <div className="space-y-2 text-center sm:text-left">
    <div className="space-y-0.5">
        <Button as={Link} color={"primary"} href={"/components/subjects"} variant={"flat"}> <p className={"font-bold text-inherit"}>Table of Sources and Resources</p></Button>
    </div>

  </div>
</div>

</div> 
</div>
      </div>);
}