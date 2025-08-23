import Constitution from '@/components/subjects/civics/constitution.tsx';
import Rights from '@/components/subjects/civics/rights.tsx';
import Money from '@/components/subjects/civics/money.tsx';
import Freedom from '@/components/subjects/civics/freedom.js';
import Trials from '@/components/subjects/civics/blackandwhite/trialsAndcases.tsx';
import ColoredPeople from '@/components/subjects/civics/blackandwhite/page.js';

import {constitution, trials,money,coloredPeople,civics} from '@/src/constants/navigation.js';

   export default async function CivicsSections({params}: {params: Promise<{ slug: string }>})  
   {

        const { slug } = await params;
        console.log('slug--',slug);
var sectionComponent = null;
switch (slug) {
  case constitution.key:
        console.log('Constitution Components here');

   sectionComponent = <Constitution/>
    break;
  case trials.key:
    console.log('Trials Components here');
    sectionComponent = <Trials/>
    break;
  case money.key:
   sectionComponent = <Money/>
    break;
  case coloredPeople.key:
    sectionComponent = <ColoredPeople/>
    break;
  default:
    console.log(`Sorrrry,  we are out of... ${sectionComponent}`);
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