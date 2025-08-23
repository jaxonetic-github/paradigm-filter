
import ExamplesOfDebates from '@/components/subjects/communication/debateExamples.tsx';
import Tricks from '@/components/subjects/communication/tricksOfTheTrade.tsx';
import {tricksOfTheTrade, debateExamples} from '@/src/constants/navigation.js';

   export default async function CommunicationSections({params}: {params: Promise<{ slug: string }>})  
   {

        const { slug } = await params;
      //  console.log(tricksOfTheTrade.key,'slug--',slug);
var sectionComponent = null;
switch (slug) {
  case tricksOfTheTrade.key:
   sectionComponent = <Tricks/>
    break;
  case debateExamples.key:
    sectionComponent = <ExamplesOfDebates/>
    break;
  default:
    console.log(`Sorry, we are out of...`);
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