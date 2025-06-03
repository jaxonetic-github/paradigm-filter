//import {initialStoreState} from './src/constants/state.js';
//import {Accordion, AccordionItem, Avatar, Card, CardHeader, CardBody, CardFooter} from "@heroui/react";
//import {Divider, Image, Link, Tooltip,Button} from "@heroui/react";
import React from "react";
import {Image, Divider, Link} from "@heroui/react";



/**
 * 
 * @Description This element displays a Card with information from @param dataArray
 * @param dataArray : initialStoreState.resourcesData.onlineMediaContent from initial state
 *  literally an arrary of 
 * 	
 * 
 */
//Franz Fernon--oppressed oppress themselves
//	{quoted: 'Declaration of Independance', quotersImage:'declaration-of-independence.jpg', extraInfo:'', quote:' ...that all men are created equal, that they are endowed by their Creator with certain unalienable Rights, that among these are Life, Liberty and the pursuit of Happiness.--That to secure these rights, Governments are instituted among Men, ...'},
export default function HistoryHome () {
	const PROFILE_IMG_PATH = '/images/profiles/';
	 const styles = {
        textInset:{ border:'3px solid rgba(0, 0, 0, 0.05)'}, 
   };


 return (
<div>
 <div  className='mx-8'>

	<div  className='my-4'>
	  <h2>Aspects of US Colonialism</h2>
	    <div className='flex-flow'>
		  <Link underline="always" target={'_blank'} className='' href={'https://youtu.be/cYtOiGZUERs?si=rzClcLD52ifda5K7'}>Origins of Lynching, Ida B Wells</Link>
		  <Link underline="always" target={'_blank'} className='' href={'https://www.loc.gov/item/today-in-history/june-02/'}>Indian Citizen Act</Link>
		  <Link underline="always" target={'_blank'} className='' href={'https://youtu.be/jDFPVc2kPvE?si=bF7DdpwU3-mzh4-M'}>European &quot;White&quot;  Slavery -- First Europeans, The Felons of Briton</Link>
		  <Link underline="always" target={'_blank'} className='' href={'https://www.loc.gov/item/today-in-history/june-02/'}>The Birth of the Second UNITED STATES- The Act of 1871</Link>
	    <Link underline="always" target={'_blank'} className='' href={'https://backstory.newamericanhistory.org/episodes/why-they-fought/'}>Civil War, fought over Union not Slavery</Link>
      </div>
 	</div>

    <div className='my-4'>
    <h2>Christian History</h2>
	  	<div className='flex-flow'>
	  	<Link underline="always" target={'_blank'} className='' href={'https://youtu.be/cYtOiGZUERs?si=rzClcLD52ifda5K7'}>The Jesus Wars</Link>is essential for understanding the formation of christianity up until the end of the Counsels.
	  	</div>
    <Link underline="always" target={'_blank'} className='' href={'https://drive.proton.me/urls/45YHBEMRYM#xqPGcR6qZrf9'}>Bull_Romanus_Pontifex_1455</Link>
    <Link underline="always" target={'_blank'} className='' href={'https://drive.proton.me/urls/DFWM4Q6ZYM#2utWN6ouTpuX'}>The Popes, the Catholic Church and the Transatlantic Enslavement of Black Africans 1418-1839</Link>
    <Link underline="always" target={'_blank'} className='' href={'https://drive.proton.me/urls/4G8X564N68#gkZwifmRSbwm'}>The Barbary Wars-Tangiers 1600s</Link>
  	</div>
    
    <div className='my-4'>
  <h2>South American History</h2>
  <div className='flex-flow'>
  <Link underline="always" target={'_blank'} className='' href={'https://drive.proton.me/urls/9SYHH6XKW8#3JeC0GNnT64Y'}>The Masters and the Slaves(eng), Gilberto Freyre</Link>
  <Link underline="always" target={'_blank'} className='' href={'https://drive.proton.me/urls/KA0EXQMD5M#GTDAC4d7BzLC'}>The Mysteries of Ancient South America</Link>
  <p className="justify-center  flex"> Brazilian Resources -- http://www.interpretesdobrasil.org/</p>
    <Link underline="always" target={'_blank'} className='' href={'https://1024terabox.com/s/1WemAs-pzW1OHGbEfd8yqIw'}>Narrative of the 5 year expedition, against the revolted negros...</Link>
  </div>
  </div>


  <div className='my-4'>
  <h2>American History</h2>
  <div className='flex-flow'>
  <Link underline="always" target={'_blank'} className='' href={'https://drive.proton.me/urls/74J66M625G#21bBhAfh8fXM'}>American Indian Contribution to the World</Link>
  <Link underline="always" target={'_blank'} className='' href={'https://ia904507.us.archive.org/27/items/historyofamerica01derouoft/historyofamerica01derouoft.pdf'}>History of America before Columbus, according to documents and...</Link>
  </div>
  </div>



  <div className='my-4'>
  <h2>Australian History</h2>
  <div className='flex'>
  <Link underline="always" target={'_blank'} className='' href={'https://drive.proton.me/urls/43NKY460V0#TmMBEMA8XFwy'}>The History of Tasmania</Link>
  <Link underline="always" target={'_blank'} className='' href={'https://drive.proton.me/urls/7SFCEW2PZ8#fFxV2aHazlJ8'}>The Last Tasmanian, James Bonwick</Link>
  </div>
  </div>


    <div className='my-4'>
  <h2>Asian History</h2>
  <div className='flex'>
     <Link underline="always" target={'_blank'} isDisabled className='disabled' href={'https://1024terabox.com/s/1BsqcYUuTnIF85DO2od1Htwz'}>A History of Egypt Under Ptolemy</Link>
  </div>
  </div>


<div className='my-4'>
  <h2>Al Andalusia</h2>
  <div>
     In 1492,  all non-christians were ordered to convert to Christianity or leave Al Andalusia.  By From 1609 and 1610, the rest of 
     the Moriscos (Crypto Moors) were expelled to North Alkebelan or France.
  </div>
  <div className='flex'>
  <Link underline="always" target={'_blank'} isDisabled className='disabled' href={''}>Ancient and Modern Brits, James Macritchie</Link>
  <Link underline="always" target={'_blank'} isDisabled className='disabled' href={''}>Nature Knows No ColorLine</Link>
  <Link underline="always" target={'_blank'} className='' href={'https://linguistics.osu.edu/herodotos/ethnonym/european/pelasgians'}>ThePelasgians</Link>
  </div>
</div>

    <div className='my-4'>
  <h2>Asian History</h2>
  <div className='flex'>
  <Link underline="always" target={'_blank'} isDisabled className='disabled' href={''}>Ancient and Modern Brits, James Macritchie</Link>
  </div>
  </div>


    <div className='my-4'>
  <h2>Pacific Slave Trade</h2>
  <div  className='flex'>
  <Link underline="always" target={'_blank'} className='' href={'https://youtu.be/9s0wce713iU?si=iO8Z0VUfo8SFmSMm'}>Pt. 3 - The Real Slave Trade / Asians Enslaved And Labeled As Chinos, Negros, Indians & Africans</Link>
  </div>
  </div>

  <div className='my-4'>
  <h2>The Moors</h2>
  <div></div>
  <div  className='flex'>
  <p className='support-sabir'>Avverroes</p>
  <Link underline="always" target={'_blank'} className='' href={'https://drive.proton.me/urls/2DXBNGX9SR#wnHth5oCVavx'}>History of the conquest of Spain by the Arab-Moors</Link>
  <Link underline="always" target={'_blank'} className='' href={'https://drive.proton.me/urls/2TG48QESJM#jYUPHyccuNJ5'}>Portuguese in West Africa</Link>
  <Link underline="always" target={'_blank'} className='' href={'https://drive.proton.me/urls/KHV5GPS964#k1ZRcUKVQll1'}>Expeditions into the valley of the Amazons, 1539, 1540, 1639</Link>
  <Link underline="always" target={'_blank'} className='' href={'https://1024terabox.com/s/1WemAs-pzW1OHGbEfd8yqIw'}>Narrative of the 5 year expedition, against the revolted negros...</Link>
  <Link underline="always" target={'_blank'} className='' href={'https://1024terabox.com/s/1WemAs-pzW1OHGbEfd8yqIw'}>vs. the christians</Link>
  <Link underline="always" target={'_blank'} className='' href={'https://1024terabox.com/s/1TqSki8fmkqYN5ua0uEUXrQ'}>The Mali Empire</Link>
  <Link underline="always" target={'_blank'} className='' href={'https://1024terabox.com/s/14Nw8kB_qvRkwzZHyL_LQ_A'}>The Moorish Empire</Link>
  <Link underline="always" target={'_blank'} className='' href={'https://1024terabox.com/s/1sF4ECAalPjZv82MP42JSkg'}>Life of Columbus</Link>
  <Link underline="always" target={'_blank'} className='' href={'https://1024terabox.com/s/1j_TE3wD2M51WKT31SYDmsQ'}>Chronicles of the Conquest of Granada</Link>
  <Link underline="always" target={'_blank'} className='' href={''}>CHRONICLE OF THE CONQUEST OF GRANADA</Link>

  </div>
  </div>

    <div className='my-4'>
  <h2>Religious History</h2>
  <div className='flex'>
  <Link underline="always" target={'_blank'} className='' href={'https://www.youtube.com/watch?v=a2YHzWi697c'}>Dr Smalls,History and Spirituality </Link>
  </div>
  </div>

</div>
</div>
);
}

	