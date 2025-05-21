import React from "react";
import  {Image} from "@heroui/react";
import {faqs} from './../../src/constants/references.js';
import Link from 'next/link';
import { useRouter } from 'next/navigation'

import ReferencesTable from './../subjects/references/page.js';
import {Accordion, AccordionItem} from "@heroui/accordion";
  
export default async function faqsHome() {
 
  const items = await faqs;
console.log()
  return (<div className={'mx-5 bg-yellow-400'}>
    {items?.map((faq, index)=><div key={faq.key} >
      <p>{faq.question}</p>
      {faq.answers.map(answer=>answer.url)}


    </div>)}
  </div>);
}
