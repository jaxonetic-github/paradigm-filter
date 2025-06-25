import React from "react";
import CustomDialog from './../../../../_utils/CustomDialog.tsx';
import {YoutubeEmbed,} from './../../../../_utils/youtubeEmbed.js';
import AccordionView from './../../../../_utils/CustomAccordion.tsx';
import {ExternalWindowButton} from './../../../../_utils/externalWindowButton.tsx';

 export default function Trials() {
     
  const PROFILE_GRID_CSS = "grid grid-cols-1 sm:grid-cols-3 gap-5";

     return (<div id="linksdiv" className={ PROFILE_GRID_CSS } >   
 	<ol className={'max-w-md'}>Race and Slavery Trials
<li>
	 <CustomDialog title='American state trials; a collection ...' organization='' source=''><iframe src="https://archive.org/embed/americanstatetri14laws" width="560" height="384" frameBorder="0" allowFullScreen></iframe></CustomDialog>    
</li>
<li>
	 <CustomDialog title='Judicial cases concerning American slavery and the Negro' organization='Vol I' source=''><iframe src="https://archive.org/embed/volume1judicialc00unse" width="560" height="384" frameBorder="0" allowFullScreen></iframe></CustomDialog>    
	 <CustomDialog title='Judicial cases concerning American slavery and the Negro' organization='Vol III' source=''><iframe src="https://archive.org/embed/volume2judicialc00unse" width="560" height="384" frameBorder="0" allowFullScreen></iframe></CustomDialog>    

	 <CustomDialog title='Judicial cases concerning American slavery and the Negro' organization='Vol III' source=''><iframe src="https://archive.org/embed/volume3judicialc00unse" width="560" height="384" frameBorder="0" allowFullScreen></iframe></CustomDialog>    
</li>
<li>
	 <CustomDialog title='Race law stories' organization='' source=''><iframe src="https://archive.org/embed/isbn_9781599410012" width="560" height="384" frameBorder="0" allowFullScreen></iframe></CustomDialog>    
</li>
<li>
     <ExternalWindowButton
          buttonText = 'Yellow By Law : Ozawa v. United States (1922)'
          externalURL = 'https://www.dismantlingracism.org/uploads/4/3/5/7/43579015/yellow_by_law.pdf' /> 
</li>
  	</ol>	
     </div>);
}
