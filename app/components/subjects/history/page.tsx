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

 	
	
	  <Link target={'_blank'} className='' href={'https://drive.proton.me/urls/74J66M625G#21bBhAfh8fXM'}>American Indian Contribution to the World</Link>
	  <Link target={'_blank'} className='' href={'https://linguistics.osu.edu/herodotos/ethnonym/european/pelasgians'}>ThePelasgians</Link>
  <div>
  <h2>Aspects of US Colonialism</h2>
  <Link target={'_blank'} className='' href={'https://youtu.be/cYtOiGZUERs?si=rzClcLD52ifda5K7'}>Origins of Lynching, Ida B Wells</Link>
  <Divider/>
  <Link target={'_blank'} className='' href={'https://www.loc.gov/item/today-in-history/june-02/'}>Indian Citizen Act</Link>
  </div>

  <div>
  <h2>Christian History</h2>
  <div><Link target={'_blank'} className='' href={'https://youtu.be/cYtOiGZUERs?si=rzClcLD52ifda5K7'}>The Jesus Wars</Link>
 is essential for understanding the formation of christianity up until the end of the Counsels.
  </div>
  <Divider/>
    <Link target={'_blank'} className='' href={'https://drive.proton.me/urls/45YHBEMRYM#xqPGcR6qZrf9'}>Bull_Romanus_Pontifex_1455</Link>
    <Link target={'_blank'} className='' href={'https://drive.proton.me/urls/DFWM4Q6ZYM#2utWN6ouTpuX'}>The Popes, the Catholic Church and the Transatlantic Enslavement of Black Africans 1418-1839</Link>
  </div>

  <div>
  <h2>Australian History</h2>
  <div>
  <Link target={'_blank'} className='' href={'https://drive.proton.me/urls/43NKY460V0#TmMBEMA8XFwy'}>The History of Tasmania</Link>
  <Link target={'_blank'} className='' href={'https://drive.proton.me/urls/7SFCEW2PZ8#fFxV2aHazlJ8'}>The Last Tasmanian, James Bonwick</Link>
  </div>
  <Divider/>
  </div>

    <div>
  <h2>South American History</h2>
  <div>
  <Link target={'_blank'} className='' href={'https://drive.proton.me/urls/9SYHH6XKW8#3JeC0GNnT64Y'}>The Masters and the Slaves(eng), Gilberto Freyre</Link>
  <Link target={'_blank'} className='' href={'https://drive.proton.me/urls/KA0EXQMD5M#GTDAC4d7BzLC'}>The Mysteries of Ancient South America</Link>
  <p className="justify-center  flex"> Brazilian Resources -- http://www.interpretesdobrasil.org/</p>

  </div>
  <Divider/>
  </div>

  <div>
  <h2>The Moors</h2>
  <div>
  <p className='support-sabir'>Al Fustat.</p>
  <Link target={'_blank'} className='' href={'https://drive.proton.me/urls/2DXBNGX9SR#wnHth5oCVavx'}>History of the conquest of Spain by the Arab-Moors</Link>
  <Link target={'_blank'} className='' href={'https://drive.proton.me/urls/2TG48QESJM#jYUPHyccuNJ5'}>Portuguese in West Africa</Link>
  <Link target={'_blank'} className='' href={'https://drive.proton.me/urls/KHV5GPS964#k1ZRcUKVQll1'}>Expeditions into the valley of the Amazons, 1539, 1540, 1639</Link>
  </div>
  <Divider/>
  </div>

</div>
);
}

	