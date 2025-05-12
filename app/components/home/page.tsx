'use client'
import React from "react";
import Link from 'next/link';
import {Image} from "@heroui/react";

 export const _civicsFundamentalsArray=[{displayHeading:"The Money Master",pathName:"TheMoneyMasters.mp4", subject:'', comments:[' This gives context and details on US banking history and the corruptions that has caused to be in the bankrupt state it currently is in (as of 2025).','31 CFR 800.253 US NATIONAL, 8 usc 1101 22a and b, GPO Styles section 5.23, 8 Foreign Affaires manual section 505.2 (Passport Induction9)']},
                   {displayHeading:'dflt_What\'s the big deal about the Constitution?', markers:[{timestamp:"1:52:00- history of rights and British colonizers"}], pathName:"MichaelBadnarik-ConstitutionClass.mp4", subject:'', comments:['Michael Badnarik - Constitution Class (Complete), Michael has run for President a few times.','We are a Republic not a Democracy.Learn  the difference and the benefits of the rights of the republic verse the priveledges of a democracy.']},
                   {displayHeading:"Rights of private Citizens (state) vs Priveledges of US Citizens (Federal)",pathName:"ExLawEnforcementOfficerRichardMcDonaldonStateCitizenshipJune_17_2005.mp4", subject:'', comments:['A resident is an alien in relation to the state??? So many essential keys to understanding how the "System" works...  ','Jones vs Temmer 829 Fed Supp 1226  1993, Cal Gov code Section 242, K. Tashiro vs Jordan 256 Pacific 545 (CA Supreme Court Case), Crossey Vs Board 221 Atlantic 2nd 431 1966 ,Roberts vs Robert 81 Caleb 2nd 871 (marriage contracts), (Inray Johnson  Estate 73 specific 424 [31:15])... ']},
                  ];

 export const _moneyAndBankingArray=[{displayHeading:"US Economic Fraud in a Nutshell",pathName:"AmericanEconomics_MikeAdams.mp4", subject:'', comments:['A very nicely interwoven summary of the United States Foreign and Domestic economic policy...','']},
                   {displayHeading:"The Money Master",pathName:"TheMoneyMasters.mp4", subject:'', comments:[' This gives context and details on US banking history and the corruptions that has caused to be in the bankrupt state it currently is in (as of 2025).','31 CFR 800.253 US NATIONAL, 8 usc 1101 22a and b, GPO Styles section 5.23, 8 Foreign Affaires manual section 505.2 (Passport Induction9)']},
  ];

 export const _badWolf_Videos={
            videos:[{key:"James Lovett", displayHeading:"(Mr == mentally retar....)",pathName:"https://youtu.be/xY7Fu7k_bmM?si=RM21lQm9_WX10xzG", subject:'', markers:[{timestamp:'35:10', comments:'Necropan...Atlantis and the Law of One'},{timestamp:'21:14:00', comment:'How Mr. may carry hidden connotations'},{timestamp:'20:20:00',comment:'Notice the blend of law, history, and the occult ...- the esotoric significance of naming and the notion that he who creates has the "right" to control...'}],  comments:['Deep dive into the significance of Mr. in many venues','']},
                   {displayHeading:"More than one type of citizen?", pathName:"BIgBadWolf_USNAtional_codes.mp4", subject:'',  comments:['Do you know what type of citizen you are?  There are many types of citizens or ways to contract with the government.However when contracting it is important to know what role you play in the contract and the role any others must play in the execution of the contract.','31 CFR 800.253 US NATIONAL, 8 usc 1101 22a and b, GPO Styles section 5.23, 8 Foreign Affaires manual section 505.2 (Passport Induction9)']},
                  ]};
export const specificallyCompiledVideos={"Money Matters":_moneyAndBankingArray, 'Civics': _civicsFundamentalsArray};

// https://www.youtube.com/live/yLUKoXziuec?si=dMZUeyZT4JE0kUJ1   {displayHeading:"Real vs Artificial", pathName:"https://www.youtube.com/live/yLUKoXziuec?si=dMZUeyZT4JE0kUJ1", subject:'Deceptions',  comments:['Beware Chat GPT, 100 Facts about the Negro roots','']}
export default function Home() {
  const [matches, setMatches] = React.useState(false);

  const [isVertical, setIsVertical] = React.useState(false);
  //const [selectedView, setSelectedView] = React.useState(specificallyCompiledVideos);
  const [navIndex, setNavIndex] = React.useState(Object.keys(specificallyCompiledVideos)[0]);
  const navSetter = (newViewRecord)=>{setNavIndex(newViewRecord)};
  const query = '(min-width: 550px)';

  React.useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    console.log(media);

    const listener = () => setMatches(media.matches);
    window.addEventListener("resize", listener);
    return () => window.removeEventListener("resize", listener);
  }, [matches, query]);


  return (<div className="flex">
       
     
<div className="mx-auto flex max-w-sm items-center gap-x-4 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
  <Link  className={"hover:border-1 p-4" } href={`/components`}> 
    <div className="mt-3 flex -space-x-2 overflow-hidden">
    <Image className="inline-block h-12 w-12 rounded-full ring-2 ring-white" src="images/profiles/bobbyHemmitt.jpeg" alt="Bro Bobby" />
    <Image className="inline-block h-12 w-12 rounded-full ring-2 ring-white" src="images/profiles/malcom-x.webp" alt="" />
    <Image className="inline-block h-12 w-12 rounded-full ring-2 ring-white" src="images/profiles/DrBen.jpg" alt="" />
    <Image className="inline-block h-12 w-12 rounded-full ring-2 ring-white" src="images/profiles/drPhilValentine.webp" alt="" />
    <Image className="inline-block h-12 w-12 rounded-full ring-2 ring-white" src="images/profiles/Steve_Biko_Portrait_saho-900x900-1.jpg" alt="" />
 </div>
  <div>
    <div className="text-xl font-medium text-black dark:text-white">References and Sources</div>
    <p className="text-gray-500 dark:text-gray-400">E-Media Library</p>
  </div>
  </Link>
</div>


        </div>);
}