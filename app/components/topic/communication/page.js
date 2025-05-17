"use client";
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ReferenceSnippet;
var react_1 = require("react");
var react_2 = require("@heroui/react");
function ReferenceSnippet() {
    return (<div className='mx-5'>

  <div>
    <h2>Tricks of the Trade and Rules of the Game</h2>
    <p>One of our goals is to be able to have our interactions (discussion, debate,...) honorably and admirably. We can use as examples Brother Malcom and  Dr Francis Wessley on shows like Donahue or Dr Ben lecturing in the Bible Belt (Alabama</p>

 <react_2.Divider />
    <div className="flex ">
   <div className=" flex-row ">
    <react_2.Image className="my-auto p-4 h-[12%] w-48 object-cover sm:w-full md:h-full md:w-48" src={'images/profiles/DrBen.jpg'} fallbackSrc={'images/imagenotavailable.jpeg'} alt={"Default Image not found for ['images/imagenotavailable.jpeg']"}/>
      <p className=" w-[220px]">{'Truth is a continuous examination, and Fact... always supersedes belief'}</p>
   </div>
    <ul className='border-r-1 border-t-1 border-b-1 max-w-xs list-disc'>
      <li>{"Avoid, Cognitive Dissonance at all costs. Don't continue to defend or hold a belief that denies the facts."}</li>
      <li>{"In the spirit of Dr Clarck's, \"I debate my equals, everyone else I teach\", unless your \"opponent\" has facts, don't poke the emotional hornets nest of beliefs unless they are open or receptive"}</li>      
      <li>{"Cite your sources and stand on your square with facts not beliefs."}</li>
      <li><span>{"Epistemology is important, research your researchers</span hidden>, and their sources, and even their sources' sources, if necessary."}</span></li>
      <li>{"Be ware of monologuing. Do checkins to ensure the other is still engaged.  "}</li>
      <li>{""}</li>
    </ul>
    </div>

    </div>
    <react_2.Divider />
          
    </div>);
}
