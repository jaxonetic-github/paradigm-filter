import React from "react";
import Link from 'next/link';
import {Button} from "@heroui/react";


 
export default function Subjects() {
   return (<div className='content top-25 py-2 z-10 bg-white mx-5'>
<h1>Content Map</h1>
<div className={'flex items-center space-x-2 text-base nota-bene border-1 '}>
<div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 '>
<div className=" border-1 flex flex-col gap-2 p-1 sm:flex-row sm:items-center sm:gap-4 ">
  <div className="space-y-2 text-center sm:text-left">
      <Link className="border-purple-200 text-purple-600 hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700"    href='/components/subjects/epistemology'>
    <div className="space-y-0.5">
      <p className="text-lg font-semibold text-black">Epistemology</p>
      <p className="font-medium text-gray-500">Are your sure? Why? How do you know?</p>
    </div>
    </Link>
<Link className="border-purple-200 text-purple-600 hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700" href='/components/subjects/epistemology'>Epistemology</Link>

  </div>
</div><div className=" border-1 flex flex-col gap-2 p-1 sm:flex-row sm:items-center sm:gap-4 ">
  <div className="space-y-2 text-center sm:text-left">
    <Link className="border-purple-200 text-purple-600 hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700"    href='/components/subjects/history'>
    <div className="space-y-0.5">
      <p className="text-lg font-semibold text-black">History</p>
      <p className="font-medium text-gray-500">Bios, Events, &amp; Religous</p>
    </div>
    </Link>

     <Link className="border-purple-200 text-purple-600 hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700" href='/components/subjects/topic/bible'>Bible</Link>
    
  </div>
</div><div className="border-1 flex flex-col gap-2 p-1 sm:flex-row sm:items-center sm:gap-4 ">
  <div className="space-y-2 text-center sm:text-left">
      <Link className="border-purple-200 text-purple-600 hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700"    href='/components/subjects/civics'>

    <div className="space-y-0.5">
      <p className="text-lg font-semibold text-black">Civics and Law</p>
      <p className="font-medium text-gray-500">Law and History go together.</p>
    </div>
        </Link>

    <Link className="border-purple-200 text-purple-600 hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700 "
        href='/components/subjects/topic/constitution'>Constitution</Link>,
    <Link className="border-purple-200 text-purple-600 hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700 "
        href={'/components/subjects/topic/money'}>Money</Link>,
    <Link className="border-purple-200 text-purple-600 hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700 "
        href={'/components/subjects/topic/blackandwhite'}>Black</Link>

  </div>
</div><div className=" border-1 flex flex-col gap-2 p-1 sm:flex-row sm:items-center sm:gap-4 ">
  <div className="space-y-2 text-center sm:text-left">
        <Link className="border-purple-200 text-purple-600 hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700"    href='/components/subjects/civics'>

    <div className="space-y-0.5">
      <p className="text-lg font-semibold text-black">Occult and Metaphysics</p>
      <p className="font-medium text-gray-500">Where reality and spirituality diverge or converge depending on what you know or what your beliefs hinder you from knowing.</p>
    </div>
    </Link>
<Link className="border-purple-200 text-purple-600 hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700 "
        href='/components/subjects/metaphysics'>Metaphysics</Link>
  </div>
</div>
<div className="border-1 flex flex-col gap-2 p-1 sm:flex-row sm:items-center sm:gap-4sm:py-4 ">
  <div className="space-y-2 text-center sm:text-left">
    <div className="space-y-0.5">
      <p className="text-lg font-semibold text-black">Communication</p>
      <p className="font-medium text-gray-500">Law and History go together.</p>
    </div>
    <Link className="border-purple-200 text-purple-600 hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700 "
        href='/components/subjects/topic/communication'>Communication</Link>
  </div></div>
  <div className="border-1 flex flex-col gap-2 p-1 sm:flex-row sm:items-center sm:gap-4sm:py-4 ">
  <div className="space-y-2 text-center sm:text-left">
  <Button as={Link} color={"primary"} href={"/components/subjects"} variant={"flat"}> <p className={"font-bold text-inherit"}>References</p></Button>
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