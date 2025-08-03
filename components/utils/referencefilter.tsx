import {references} from './../../src/constants/references.js';


export const referenceFilter = (arrayToDisplay:number[]) => {
  const a2d = arrayToDisplay||[];

 let filtered = references.filter((reference:any)=>(a2d.includes(reference.id) ));
// if (filtered.length==1) 
//   filtered=[filtered];

return filtered;
};