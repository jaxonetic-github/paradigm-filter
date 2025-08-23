
import Definitions from '@/components/subjects/epistemology/definitions.tsx';
import CriticalThinking from '@/components/subjects/epistemology/criticalthinking.tsx';
import SocialControl from '@/components/subjects/epistemology/socialcontrol.tsx';
import All from '@/components/subjects/epistemology/introduction.tsx';
import Dissonance from '@/components/subjects/epistemology/dissonance.tsx';

import {dissonance, definitions,socialControl,criticalThinking,epistemology} from '@/src/constants/navigation.js';

   export default async function EpistemologySections({params}: {params: Promise<{ slug: string }>})  
   {

        const { slug } = await params;
      //  console.log(tricksOfTheTrade.key,'slug--',slug);
var sectionComponent = null;
switch (slug) {
  case criticalThinking.key:
   sectionComponent = <CriticalThinking/>;
    break;
  case socialControl.key:
    sectionComponent = <SocialControl/>;
    break;
  case dissonance.key:
    sectionComponent = <Dissonance/>;
    break;
  case definitions.key:
    sectionComponent = <Definitions/>;
    break;
  default:
    console.log(`Sorry, we are out of...`);
    sectionComponent = <All/>
     break;
}
//        const resources:ProfilesDictionary = await profiles;
  //      const subSection= decodeURIComponent(ExamplesOfDebates);
//        const profileRecord:ProfileType = resources[profileKey];
       return(<div className="mx-auto sm:max-w-md max-w-md overflow-hidden rounded-xl bg-[#eee] shadow-md md:max-w-4xl">
  <div className="md:flex">
  {sectionComponent}
</div>
</div>);
    
}