'use client';
//import "../globals.css";
import React from "react";

import { Divider, Link, Button, Image} from "@heroui/react";
import {Popover, PopoverTrigger, PopoverContent} from "@heroui/react";


export default function Moorish() {
  const macritchie=
{what:'H. R. 40, Naturalization Bill', when:'March 4, 1790', imgURL:'/images/naturalizationActP1.jpg',
 desc:'The First Congress (1789-1791) established federal procedures and criteria for foreign-born individuals to become U.S. citizens. These criteria permitted free whites of good character with two years&apos; residence in the United States to become naturalized citizens. Congress also allowed citizens’ children born outside the U.S. to be considered natural-born citizens. Over the following centuries, Congress readdressed the issue in a series of naturalization acts that sometimes excluded, but increasingly included, people of diverse races and origins.'
}

  return <>
  <p>
    Thanks to the primary source of Benjamin Franklin
    <Popover placement="right">
      <PopoverTrigger>
        <Button>Open Popover</Button>
      </PopoverTrigger>
      <PopoverContent>
        <div className="px-1 py-2">
          <div className="text-small font-bold">Popover Content</div>
          <div className="text-tiny">This is the popover content</div>
        </div>
      </PopoverContent>
    </Popover>(Observations Concerning the Increase of Mankind, 1751), it can safely be said that Europe was full os swarty people until
    the 18th century.   Armed with a few facts thanks to JA Rodgers and James Mcritchie, and perhaps a few videos, it
    might be logical to NOT automatically think "white skinned" or "caucasion".</p>
  <div>
  <h2></h2>
  <div>
  <Link target={'_blank'} className='' href={'https://drive.proton.me/urls/43NKY460V0#TmMBEMA8XFwy'}>The History of Tasmania</Link>
  </div>
  <Divider/>
  </div>

  </>;
}


 function PopoverView() {
  return (
    <Popover placement="right">
      <PopoverTrigger>
        <Button>Open Popover</Button>
      </PopoverTrigger>
      <PopoverContent>
        <div className="px-1 py-2">
          <div className="text-small font-bold">Popover Content</div>
          <div className="text-tiny">This is the popover content</div>
        </div>
      </PopoverContent>
    </Popover>
  );
}