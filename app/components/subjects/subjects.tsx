import React from "react";
import Link from 'next/link';
import {Button, Divider} from "@heroui/react";


 
export default function ContentMap() {
   return (<div className='content top-25 py-2 z-10 bg-white mx-5'>
<h1>Content Map</h1>
<div className={'flex items-center space-x-2 text-base nota-bene border-1 '}>
<div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 '>
<div className=" border-1 flex flex-col gap-2 p-1 sm:flex-row sm:items-center sm:gap-4 ">
  <div className="space-y-2 text-center sm:text-left">
    <div className="space-y-0.5">
        <Button as={Link} color={"primary"} href={"/components/subjects/epistemology"} variant={"flat"}> <p className={"font-bold text-inherit"}>Epistemology</p></Button>
    </div>
    <Divider className="my-1" />
<Link className="border-purple-200 text-purple-600 hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700" href='/components/subjects/epistemology'>Epistemology</Link>

  </div>
</div><div className=" border-1 flex flex-col gap-2 p-1 sm:flex-row sm:items-center sm:gap-4 ">
  <div className="space-y-2 text-center sm:text-left">
    <div className="space-y-0.5">
        <Button as={Link} color={"primary"} href={"/components/subjects/history"} variant={"flat"}> <p className={"font-bold text-inherit"}>History</p></Button>
    </div>
<Divider className="my-1" />
     <Link className="border-purple-200 text-purple-600 hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700" href='/components/subjects/topic/bible'>Bible</Link> 
  </div>
</div><div className="border-1 flex flex-col gap-2 p-1 sm:flex-row sm:items-center sm:gap-4 ">
  <div className="space-y-2 text-center sm:text-left">

    <div className="space-y-0.5">
        <Button as={Link} color={"primary"} href={"/components/subjects/civics"} variant={"flat"}> <p className={"font-bold text-inherit"}>Civics and Law</p></Button>
    </div>
<Divider className="my-1" />
    <Link className="border-purple-200 text-purple-600 hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700 "
        href='/components/subjects/topic/constitution'>Constitution</Link>,
    <Link className="border-purple-200 text-purple-600 hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700 "
        href={'/components/subjects/topic/money'}>Money</Link>,
    <Link className="border-purple-200 text-purple-600 hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700 "
        href={'/components/subjects/topic/blackandwhite'}>Black</Link>
  </div>
</div>

<div className=" border-1 flex flex-col gap-2 p-1 sm:flex-row sm:items-center sm:gap-4 ">
  <div className="space-y-2 text-center sm:text-left">
    <div className="space-y-0.5">
    <Button as={Link} color={"primary"} href={"/components/subjects/metaphysics"} variant={"flat"}> <p className={"font-bold text-inherit"}>Occult and Metaphysics</p></Button>
      <p className="hidden font-medium text-gray-500">Where reality and spirituality diverge or converge depending on what you know or what your beliefs hinder you from knowing.</p>
    </div>
    <Divider className="my-1" />
<Link className="disabled  hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700 "
        href='/components/subjects/metaphysics'>Astrology</Link>
<Link className="disabled hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700 "
        href='/components/subjects/metaphysics'>Vedanta</Link>
<Link className="disabled hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700 "
        href='/components/subjects/metaphysics'>Qabalah</Link>
  </div>
</div>

<div className=" border-1 flex flex-col gap-2 p-1 sm:flex-row sm:items-center sm:gap-4 ">
  <div className="space-y-2 text-center sm:text-left">
    <div className="space-y-0.5">
    <Button as={Link} color={"primary"} href={"/components/subjects/metaphysics"} variant={"flat"}> <p className={"font-bold text-inherit"}>Health</p></Button>
    </div>
    <Divider className="my-1" />
<Link className="disabled  hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700 "
        href='/components/subjects/metaphysics'><p>What are you eating?</p></Link>
  </div>
</div>


<div className="border-1 flex flex-col gap-2 p-1 sm:flex-row sm:items-center sm:gap-4sm:py-4 ">
  <div className="space-y-2 text-center sm:text-left">
    <div className="space-y-0.5">
        <Button as={Link} color={"primary"} href={"/components/subjects/topic/communication"} variant={"flat"}> <p className={"font-bold text-inherit"}>Communication</p></Button>
    </div>   
  </div></div>
  <div className="border-1 flex flex-col gap-2 p-1 sm:flex-row sm:items-center sm:gap-4sm:py-4 ">
  <div className="space-y-2 text-center sm:text-left">
  <Button as={Link} color={"primary"} href={"/components/subjects"} variant={"flat"}> <p className={"font-bold text-inherit"}>References</p></Button>
   <Divider className="my-1" />
     <Link className="border-purple-200 text-purple-600 hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700 "
        href={'/components/subjects/illuminators'}>Illuminators</Link>,
             <Link className="border-purple-200 text-purple-600 hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700 "
        href={'/components/subjects/media'}>Media</Link>,
     <Link className="border-purple-200 text-purple-600 hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700 "
        href={'/components/subjects/topic/blackandwhite'}>Frequently Asked Questions</Link>
  </div></div>
</div> 
</div>
      

</div>);
}