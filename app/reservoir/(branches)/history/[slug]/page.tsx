
import BritishColonies from '@/components/subjects/history/britishColonies.js';

import {britishcolonizers} from '@/src/constants/navigation.js';

   export default async function HistorySections({params}: {params: Promise<{ slug: string }>})  
   {

        const { slug } = await params;
        console.log(britishcolonizers.key,'slug--',slug);
var sectionComponent = null;
switch (slug) {
  case britishcolonizers.key:
   sectionComponent = <BritishColonies/>;
    break;
  default:

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