//import {initialStoreState} from './src/constants/state.js';
//import {Accordion, AccordionItem, Avatar, Card, CardHeader, CardBody, CardFooter} from "@heroui/react";
//import {Divider, Image, Link, Tooltip,Button} from "@heroui/react";
import React from "react";
import {Image, Divider, Link} from "@heroui/react";
import CustomDialog from './../../../_utils/CustomDialog.tsx';
import {YoutubeEmbed} from './../../../_utils/youtubeEmbed.js';
import {ExternalWindowButton} from './../../../_utils/externalWindowButton.tsx';



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
      <Link underline="always" target={'_blank'} className='' href={'https://penelope.uchicago.edu/josephus/index.html'}>Works of Josephus</Link>
      <Link underline="always" target={'_blank'} className='' href={'https://penelope.uchicago.edu/josephus/index.html'}>Ibn Khaldun</Link> and the 
      <Link underline="always" target={'_blank'} className='' href={'https://penelope.uchicago.edu/josephus/index.html'}>Muqaddimah, by Ibn Khaldun</Link>
 

 <div  className='mx-8'>

	<div  className='my-4'>
	  <h2>Aspects of US Colonialism</h2>
	    <div className='flex-flow'>
      <div className='border-1'>
      <p>Overview and Summaries</p>
        <CustomDialog title='General Overview' organization='2 Milli interview with Mansa the Moor' source=''>{YoutubeEmbed('zXNJRAb5RbA')}</CustomDialog>    

       <ExternalWindowButton 
          buttonText = 'US Governmental Publishing Office Style Manual'
          externalURL = 'https://www.govinfo.gov/content/pkg/GPO-STYLEMANUAL-2016/pdf/GPO-STYLEMANUAL-2016-7.pdf' /> 

       <ExternalWindowButton
       buttonText='THE SUPPRESSION OF THE AFRICAN SLAVE-TRADE TO THE UNITED STATES OF AMERICA 1638–1870'
       externalURL='https://www.gutenberg.org/files/17700/17700-h/17700-h.htm' />  
		  </div>

      <div className='border-1'>
      <p>Details and Particulars</p>
      <CustomDialog title='The Buck Act' organization='High Frequency Radio (Yusef El)' source='video(32:13)'>{YoutubeEmbed('yPBTdzkf2Ak')}</CustomDialog>    

      <Link underline="always" target={'_blank'} className='' href={'https://1024terabox.com/s/18WLu6_dHYp3jHbaOBPPjaA'}>Creature From Jeykll Island</Link>
      <Link underline="always" target={'_blank'} className='' href={'https://1024terabox.com/s/15QDT0JB16946U_rZgXe4yQ'}>Secret Treaty of Verona p.6781</Link>

      <CustomDialog title='Origins of Lynching, Ida B Wells' organization='' source=''>{YoutubeEmbed('cYtOiGZUERs')}</CustomDialog>    
      <CustomDialog title='First Europeans, The Felons of Briton' organization='' source=''>{YoutubeEmbed('jDFPVc2kPvE')}</CustomDialog>    

      <ExternalWindowButton
          buttonText = 'Journal of Negro History- Carter G Woodson'
          externalURL = 'https://drive.proton.me/urls/4G8X564N68#gkZwifmRSbwm' /> 
        <CustomDialog title='Racial Integrity Acts (1824-1924)' organization='' source=''><iframe width="560" height="315" src="https://www.youtube.com/embed/AyatQ-5Kt58?si=hDuKqm9NRI_9uOT3" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe></CustomDialog>    

      <ExternalWindowButton
          buttonText = 'Indian Citizen Act'
          externalURL = 'https://www.loc.gov/item/today-in-history/june-02/' /> 
      <ExternalWindowButton
          buttonText = 'Civil War, fought over Union not Slavery'
          externalURL = 'https://backstory.newamericanhistory.org/episodes/why-they-fought/' /> 

     <ExternalWindowButton
          buttonText = 'US Dept of Education'
          externalURL = 'https://www.history.com/articles/department-education-andrew-johnson-reconstruction' /> 

    <ExternalWindowButton
          buttonText = 'US Indian Boarding Schools'
          externalURL = 'https://boardingschoolhealing.org/education/us-indian-boarding-school-history/' /> 

      </div>
      </div>
 	</div>
       

    <div className='my-4'>
    <h2>Christian History</h2>
	  	<div className='flex-flow'>
       <CustomDialog title='The Jesus Wars' organization='is essential for understanding the formation of christianity up until the end of the Counsels' source=''>{YoutubeEmbed('cYtOiGZUERs')}</CustomDialog>    
	  	</div>
          <ExternalWindowButton
          buttonText = 'The Bull Inter Caetera (Alexander VI)'
          externalURL = 'https://www.gilderlehrman.org/history-resources/spotlight-primary-source/doctrine-discovery-1493' /> 
        <CustomDialog title='The Popes, the Catholic Church and the Transatlantic Enslavement of Black Africans 1418-1839'><iframe src="https://library.oapen.org/bitstream/id/8aa95306-9256-443f-9e89-de5871874288/external_content.pdf" width="560" height="384" frameBorder="0"  allowFullScreen></iframe> </CustomDialog>
  	</div>
    
    <div className='my-4'>
      <h2>South American History</h2>
      <div className='flex-flow'>
        <CustomDialog title='The Masters and the Slaves(eng), Gilberto Freyre'><iframe src="https://ia802900.us.archive.org/15/items/in.ernet.dli.2015.176407/2015.176407.The-Masters-And-The-Slaves.pdf" width="560" height="384" frameBorder="0"  allowFullScreen></iframe> </CustomDialog>
        <CustomDialog title='The Mysteries of Ancient South America'><iframe src="https://archive.org/embed/mysteriesofancie035488mbp" width="560" height="384" frameBorder="0"  allowFullScreen></iframe></CustomDialog>
        <CustomDialog title='Brazilian Resources '><iframe src="http://www.interpretesdobrasil.org/" width="560" height="384" frameBorder="0"  allowFullScreen></iframe></CustomDialog>
        <CustomDialog title='Narrative of the 5 year expedition, against the revolted negros...'><iframe src="https://archive.org/embed/narrativeoffivey02sted" width="560" height="384" frameBorder="0"  allowFullScreen></iframe> </CustomDialog>
      </div>
    </div>


  <div className='my-4'>
  <h2>American History</h2>
  <div className='flex-flow'>
<CustomDialog title='Worlds Largest Pyramids in America !!! - Origin of Civilization'><iframe width="560" height="315" src="https://www.youtube.com/embed/uT2DZlIR_TI?si=_q3Y5o9OHU5mPJdB" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe></CustomDialog>
  <CustomDialog title='History of America before Columbus, according to documents and...'><iframe src="https://ia904507.us.archive.org/27/items/historyofamerica01derouoft/historyofamerica01derouoft.pdf" width="560" height="384" frameBorder="0"  allowFullScreen></iframe> </CustomDialog>
  <ExternalWindowButton
          buttonText = 'American Indian Contribution to the World'
          externalURL = 'https://drive.proton.me/urls/74J66M625G#21bBhAfh8fXM' /> 

      <div className='border-1'>
      <p>Secret Societies - The Great Brotherhood</p>
      <CustomDialog title='First book of Azrael : teachings of the Great White Brotherhood'><iframe src="https://archive.org/details/firstbookofazrae0001unse/mode/2up" width="560" height="384" frameBorder="0"  allowFullScreen></iframe> </CustomDialog>
      <CustomDialog title='The Flashlights of Truth'><iframe src="https://archive.org/embed/flashlightsoftru00king" width="560" height="384" frameBorder="0"  allowFullScreen></iframe> </CustomDialog>
      <CustomDialog title='The Lotus Path'><iframe src="https://dn790007.ca.archive.org/0/items/lotuspath00kingrich/lotuspath00kingrich.pdf" width="560" height="384" frameBorder="0"  allowFullScreen></iframe> </CustomDialog>
      <CustomDialog title='Secret Societies: The Great School'><iframe src="https://archive.org/details/questionboxserie01chic/mode/2up" width="560" height="384" frameBorder="0"  allowFullScreen></iframe> </CustomDialog>
      </div>

      <div className='border-1'>
      <h2>Haitian Revolution (1793-1804)</h2>
      <CustomDialog title='Toussaint Louverture'><iframe src="https://ia801906.us.archive.org/18/items/oapen-20.500.12657-31609/626410.pdf" width="560" height="384" frameBorder="0"  allowFullScreen></iframe> </CustomDialog>
      </div>
  </div>
  </div>



  <div className='my-4'>
  <h2>Australian History</h2>

  <div className=''>
    
    <CustomDialog title='History of Tasmania' organization='Written By Truth' source=''><iframe src="https://archive.org/embed/b1252764" width="560" height="384" frameBorder="0" allowFullScreen></iframe></CustomDialog>    
  <ExternalWindowButton
          buttonText  = 'The Last Tasmanian, James Bonwick'
          externalURL = 'https://drive.proton.me/urls/7SFCEW2PZ8#fFxV2aHazlJ8' /> 

  </div>
  </div>


    <div className='my-4'>
  <h2>Asian History</h2>
  <div className=''>
     <CustomDialog title='A History of Egypt Under Ptolemy' organization='' source=''><iframe src="https://archive.org/embed/in.ernet.dli.2015.279352" width="560" height="384" frameBorder="0"  allowFullScreen></iframe></CustomDialog>    

     <CustomDialog title='African Origin of Civilization - Diope' organization='' source=''><iframe src="https://www.almendron.com/tribuna/wp-content/uploads/2019/10/african-origin-of-civilization-complete.pdf" width="560" height="384" frameBorder="0"  allowFullScreen></iframe></CustomDialog>    
     <CustomDialog title='Introduction to African Civilization, John G Jackson' organization='' source=''><iframe src="https://archive.org/embed/introductiontoaf00jack" width="560" height="384" frameBorder="0"  allowFullScreen></iframe></CustomDialog>    
     <CustomDialog title='Early Polynesians' organization='' source=''>{YoutubeEmbed('nCUkeHaqlM4')}</CustomDialog> 
     <CustomDialog title='Historia do Congo' organization='Written By Truth' source=''><iframe src="https://dn790007.ca.archive.org/0/items/historiadocongo00mansgoog/historiadocongo00mansgoog.pdf" width="560" height="384" frameBorder="0" allowFullScreen></iframe></CustomDialog>    
</div>
  </div>


<div className='my-4'>
  <h2>Iberia, Al Andalusia, España(Spain)</h2>
<div>
     In 1492,  all non-christians were ordered to convert to Christianity or leave Al Andalusia.  By From 1609 and 1610, the rest of 
     the Moriscos (Crypto Moors) were expelled to North Alkebelan or France.
  </div>
  <div className=''>

     <CustomDialog title='Ancient and Modern Brits, James Macritchie' organization='' source=''><iframe src="https://archive.org/embed/ancientmodernbri0000macr" width="560" height="384" frameBorder="0" allowFullScreen></iframe></CustomDialog> 

   <ExternalWindowButton
          buttonText  = 'La política indigenista de Isabel La Catolica'
          externalURL = 'https://hdl.handle.net/20.500.12285/mdcte/2297' /> 
   <ExternalWindowButton
          buttonText  = 'The Pelasgians'
          externalURL = 'https://linguistics.osu.edu/herodotos/ethnonym/european/pelasgians' /> 
     <CustomDialog title='History of the Reign of Ferdinand and Isabella' organization='' source=''><iframe src="https://archive.org/embed/historyreignferd01pres" width="560" height="384" frameBorder="0" allowFullScreen></iframe></CustomDialog>
  </div>
</div>


    <div className='my-4'>
  <h2>Pacific Slave Trade</h2>
  <div  className=''>
    <CustomDialog title='The Buck Act' organization='High Frequency Radio (Yusef El)' source='video(32:13)'>{YoutubeEmbed('yPBTdzkf2Ak')}</CustomDialog>    
    <CustomDialog title='Pt. 3 - The Real Slave Trade' organization='Asians Enslaved And Labeled As Chinos, Negros, Indians & Africans' source='video(32:13)'>{YoutubeEmbed('9s0wce713iU')}</CustomDialog>    
  </div>
  </div>

  <div className='my-4'>
  <h2>The Moors</h2>
  <div></div>
  <div className=''>
  <p className='support-sabir'>Avverroes</p>
  <p className='support-sabir'>Ibn Battuta</p>
<div className="border-1">
  <p className='support-sabir'>Ibn Jubayr</p>
   <ExternalWindowButton
          buttonText  = 'An Andalusian Traveller for Penance'
          externalURL = 'https://www.aramcoworld.com/articles/2015/travelers-of-alandalus-part-1-the-travel-writer-ibn-jubayr' />
     <ExternalWindowButton
          buttonText  = 'About Ibn Jubayr'
          externalURL = 'https://www.aramcoworld.com/articles/2015/travelers-of-alandalus-part-1-the-travel-writer-ibn-jubayr' />
   
   <ExternalWindowButton
          buttonText  = 'The Rihla'
          externalURL = 'https://repository.digital.georgetown.edu/handle/10822/557913' />
   </div>
   <ExternalWindowButton
          buttonText  = 'History of the conquest of Spain by the Arab-Moors'
          externalURL = 'https://drive.proton.me/urls/2DXBNGX9SR#wnHth5oCVavx' />
   <ExternalWindowButton
          buttonText  = 'Portuguese in West Africa'
          externalURL = 'https://drive.proton.me/urls/2TG48QESJM#jYUPHyccuNJ5' />
   <ExternalWindowButton
          buttonText  = 'Expeditions into the valley of the Amazons, 1539, 1540, 1639'
          externalURL = 'https://drive.proton.me/urls/KHV5GPS964#k1ZRcUKVQll1' />
   <ExternalWindowButton
          buttonText  = 'Narrative of the 5 year expedition, against the revolted negros...'
          externalURL = 'https://1024terabox.com/s/1WemAs-pzW1OHGbEfd8yqIw' />
   <ExternalWindowButton
          buttonText  = 'The Mali Empire'
          externalURL = 'https://1024terabox.com/s/1TqSki8fmkqYN5ua0uEUXrQ' />
   <ExternalWindowButton
          buttonText  = 'The Moorish Empire'
          externalURL = 'https://1024terabox.com/s/14Nw8kB_qvRkwzZHyL_LQ_A' />
   <ExternalWindowButton
          buttonText  = 'Life of Columbus'
          externalURL = 'https://1024terabox.com/s/1sF4ECAalPjZv82MP42JSkg' />
   <ExternalWindowButton
          buttonText  = 'Chronicles of the Conquest of Granada'
          externalURL = 'https://1024terabox.com/s/1j_TE3wD2M51WKT31SYDmsQ' />
  </div>
  </div>

    <div className='my-4'>
  <h2>Religious History</h2>
  <div className=''>
  
    <CustomDialog title='Dr Smalls, History and Spirituality' organization='' source=''>{YoutubeEmbed('a2YHzWi697c')}</CustomDialog>    

<CustomDialog title='Life of Constantine - Eusebius' organization='' source=''>  <iframe src="https://archive.org/embed/eusebiuschurchhi0001euse" width="560" height="384" frameBorder="0" allowFullScreen></iframe>
</CustomDialog>

    <CustomDialog title='Oldest God in WRITTEN History' organization='' source=''>{YoutubeEmbed('HSXZnbHstKY')}</CustomDialog>    

  <p>The Dogon say that in the beginning there was Sirius B. The Etruscians (Greeks) say that before the creation of the universe was Gaia.  But Gaia is
  also earth.  Before the universe was created, Earth existed. It just wasn't in the physical...</p >
  </div>
  </div>

</div>
</div>
);
}

	