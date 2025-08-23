import React from "react";

import {ReferenceView,referenceFilter, ReferencesGridView} from '@/components/subjects/references/referencesView.jsx';

 export default function Trials() {
     
  const PROFILE_GRID_CSS = "grid grid-cols-1 sm:grid-cols-3 gap-5";

     return (<div id="linksdiv"  >   
 	Race and Slavery Trials
  	       <ReferencesGridView  rows={referenceFilter([131,132,133,134,135,136])}/>
	
     </div>);
}
