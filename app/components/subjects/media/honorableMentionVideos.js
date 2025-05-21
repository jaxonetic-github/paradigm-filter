'use client' 

import React from "react";

const VIDEOS_PATH = "/videos/";
/**
 const _civicsFundamentalsArray=[{displayHeading:"The Money Master",pathName:"TheMoneyMasters.mp4", subject:'', comments:[' This gives context and details on US banking history and the corruptions that has caused to be in the bankrupt state it currently is in (as of 2025).','31 CFR 800.253 US NATIONAL, 8 usc 1101 22a and b, GPO Styles section 5.23, 8 Foreign Affaires manual section 505.2 (Passport Induction9)']},
                   {displayHeading:'What\'s the big deal about the Constitution?', markers:[{timestamp:"1:52:00- history of rights and British colonizers"}], pathName:"MichaelBadnarik-ConstitutionClass.mp4", subject:'', comments:['Michael Badnarik - Constitution Class (Complete), Michael has run for President a few times.','We are a Republic not a Democracy.Learn  the difference and the benefits of the rights of the republic verse the priveledges of a democracy.']},
                   {displayHeading:"Rights of private Citizens (state) vs Priveledges of US Citizens (Federal)",pathName:"ExLawEnforcementOfficerRichardMcDonaldonStateCitizenshipJune_17_2005.mp4", subject:'', comments:['A resident is an alien in relation to the state??? So many essential keys to understanding how the "System" works...  ','Jones vs Temmer 829 Fed Supp 1226  1993, Cal Gov code Section 242, K. Tashiro vs Jordan 256 Pacific 545 (CA Supreme Court Case), Crossey Vs Board 221 Atlantic 2nd 431 1966 ,Roberts vs Robert 81 Caleb 2nd 871 (marriage contracts), (Inray Johnson  Estate 73 specific 424 [31:15])... ']},
                  ];

 const _moneyAndBankingArray=[{displayHeading:"US Economic Fraud in a Nutshell",pathName:"AmericanEconomics_MikeAdams.mp4", subject:'', comments:['A very nicely interwoven summary of the United States Foreign and Domestic economic policy...','']},
                   {displayHeading:"The Money Master",pathName:"TheMoneyMasters.mp4", subject:'', comments:[' This gives context and details on US banking history and the corruptions that has caused to be in the bankrupt state it currently is in (as of 2025).','31 CFR 800.253 US NATIONAL, 8 usc 1101 22a and b, GPO Styles section 5.23, 8 Foreign Affaires manual section 505.2 (Passport Induction9)']},
  ];

 const _badWolf_Videos=
 						[{displayHeading:"(Mr == mentally retar....)",pathName:"https://youtu.be/xY7Fu7k_bmM?si=RM21lQm9_WX10xzG", subject:'', markers:[{timestamp:'35:10', comments:'Necropan...Atlantis and the Law of One'},{timestamp:'21:14:00', comment:'How Mr. may carry hidden connotations'},{timestamp:'20:20:00',comment:'Notice the blend of law, history, and the occult ...- the esotoric significance of naming and the notion that he who creates has the "right" to control...'}],  comments:['Deep dive into the significance of Mr. in many venues','']},
                                {displayHeading:"More than one type of citizen?", pathName:"BIgBadWolf_USNAtional_codes.mp4", subject:'',  comments:['Do you know what type of citizen you are?  There are many types of citizens or ways to contract with the government.However when contracting it is important to know what role you play in the contract and the role any others must play in the execution of the contract.','31 CFR 800.253 US NATIONAL, 8 usc 1101 22a and b, GPO Styles section 5.23, 8 Foreign Affaires manual section 505.2 (Passport Induction9)']},
                  ];
const DFLT = {displayHeading:"More than one type of citizen?", pathName:"images/imagenotavailable", subject:'',  comments:['','']}
*/
export default function HonorableMentionVideos ({dataArray}) {

 const [_dataArray, setDataArray] = React.useState(dataArray);

 React.useEffect(() => {
  setDataArray(dataArray);
  }, [dataArray]);


 let videoArray =_dataArray?.map((videoRecord, index) =>{
 	console.log(videoRecord, index);
	return (<div key={'hmv_key_' + index} className="md:flex">
	    <div className="p-8">
	      <div className="md:shrink-0 flex justify-center">
	      	<Video videoSource={{path:videoRecord.pathName}}/>
	      </div>     
	      <div className="text-sm font-semibold tracking-wide text-indigo-500 uppercase">{videoRecord.displayHeading}</div>
	      <a href="#" className="mt-1 block text-lg leading-tight font-medium text-black hover:underline">
	      {videoRecord.displayHeading}
	      </a>
	      <p className="mt-2 text-gray-500">
	      {videoRecord.comments[0]}
	      </p>
	    </div>
	</div>)});
 return (<div className="mx-auto max-w-md overflow-hidden rounded-xl bg-white shadow-md md:max-w-2xl">                
                  {videoArray}
            </div>)
}


export function Video({videoSource}) { return (<video key={videoSource.path} width="320" height="240" controls preload="none"><source src={VIDEOS_PATH + videoSource.path} type="video/mp4" />Your browser does not support the video tag.</video>)}
