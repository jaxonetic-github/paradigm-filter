//import {initialStoreState} from './src/constants/state.js';
//import {Accordion, AccordionItem, Avatar, Card, CardHeader, CardBody, CardFooter} from "@heroui/react";
//import {Divider, Image, Link, Tooltip,Button} from "@heroui/react";
import React from "react";
import {Image, Divider, Link} from "@heroui/react";
import CustomDialog from './../../../_utils/CustomDialog.tsx';
import {YoutubeEmbed} from './../../../_utils/youtubeEmbed.js';
import {ExternalWindowButton} from './../../../_utils/externalWindowButton.tsx';
import {ReferenceView, ReferencesGridView} from './../references/referencesView.jsx';
import { references, tableColumns, REFERENCE_TYPES} from './../../../src/constants/references.js';
import AccordionView from './../../../_utils/CustomAccordion.tsx';



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

const referenceFilter = (arrayToDisplay:number[]) => {
  const a2d = arrayToDisplay;
 let filtered = references.filter((reference)=>(a2d.includes(reference.id) ));
// if (filtered.length==1) 
//   filtered=[filtered];

return filtered;
};

 return (
<div>
      <Link underline="always" target={'_blank'} className='' href={'https://penelope.uchicago.edu/josephus/index.html'}>Works of Josephus</Link>
      <Link underline="always" target={'_blank'} className='' href={'https://penelope.uchicago.edu/josephus/index.html'}>Ibn Khaldun</Link> and the 
      <Link underline="always" target={'_blank'} className='' href={'https://penelope.uchicago.edu/josephus/index.html'}>Muqaddimah, by Ibn Khaldun</Link>
 

 <div  className='mx-2 md:mx-12'>

       <div className='my-8'>

  <AccordionView title={'Atlan(tis)'}>
    <div>
       <ReferencesGridView  rows={referenceFilter([44])}/>
    </div>
  </AccordionView>
  </div>




  <div className='my-8'>
  <h3>American History</h3>
  <div className='flex-flow'>
  <AccordionView title={'General'}>
    <div>
       <ReferencesGridView  rows={referenceFilter([46,47,48,49,50])}/>
    </div>
  </AccordionView>


      <div className='border-1'>
      
        <AccordionView title={'Secret Societies - The Great Brotherhood'}> 
              <ReferencesGridView  rows={referenceFilter([53,54,55,56])}/>
        </AccordionView>
        </div>

      <div className='border-1'>
          <AccordionView title={'Haitian Revolution (1793-1804)'}> 
              <ReferencesGridView  rows={referenceFilter([57])}/>
        </AccordionView>    
      </div>

          <div className='border-1'>    
      <AccordionView title={'South American History'}> 
       <ReferencesGridView  rows={referenceFilter([58, 59, 28, 60])}/>
       </AccordionView> 
    </div>

        <div  className='border-1 my-2'>
         <AccordionView title={'Aspects of US Colonialism'}> 

        <div className='flex-flow'>
          <div className='border-1'>
          <h3>Overview and Summaries</h3>
           <ReferencesGridView  rows={referenceFilter([61,62,63,64,65])}/>
          </div>
          <div className='border-1'>
          <h3>Details and Particulars</h3>
                 <ReferencesGridView  rows={referenceFilter([66,67,68,69,70,71,72,73,74,75,76,35,77,78,79])}/>
          </div>
      </div>
   </AccordionView> 
    </div>

  </div>
  </div>




    <div  className='my-8'>

  <AccordionView title={'Australian'}>
    <div>
           <div className='flex-flow'>
      <div className='border-1'>
      <p>Overview and Summaries</p>
       <ReferencesGridView  rows={referenceFilter([51])}/>
   </div>
      <div className='border-1'>
      <p>Details and Particulars</p>
       <ReferencesGridView  rows={referenceFilter([52,30,3])}/>
  </div>
      </div>   
    </div>
  </AccordionView>
    </div>



<div className='my-8'>
  <h2>Iberia, Al Andalusia, España(Spain)</h2>
<div>
     In 1492,  all non-christians were ordered to convert to Christianity or leave Al Andalusia.  By From 1609 and 1610, the rest of 
     the Moriscos (Crypto Moors) were expelled to North Alkebelan or France.
  </div>
  <div className=''>

     <CustomDialog title='Ancient and Modern Brits, James Macritchie' organization='' source=''><iframe src="https://archive.org/embed/ancientmodernbri0000macr" width="560" height="384" frameBorder="0" allowFullScreen></iframe></CustomDialog> 
     <CustomDialog title='The conquest of America : the question of the other' organization='' source=''><iframe src="https://archive.org/embed/conquestofameric00todo" width="560" height="384" frameBorder="0" allowFullScreen></iframe></CustomDialog> 

   <ExternalWindowButton
          buttonText  = 'La política indigenista de Isabel La Catolica'
          externalURL = 'https://hdl.handle.net/20.500.12285/mdcte/2297' /> 
   <ExternalWindowButton
          buttonText  = 'The Pelasgians'
          externalURL = 'https://linguistics.osu.edu/herodotos/ethnonym/european/pelasgians' /> 
     <CustomDialog title='History of the Reign of Ferdinand and Isabella' organization='' source=''><iframe src="https://archive.org/embed/historyreignferd01pres" width="560" height="384" frameBorder="0" allowFullScreen></iframe></CustomDialog>
  </div>
</div>


    <div className='my-8'>
  <h2>Pacific Slave Trade</h2>
  <div  className=''>
    <CustomDialog title='Pt. 3 - The Real Slave Trade' organization='Asians Enslaved And Labeled As Chinos, Negros, Indians & Africans' source='video(32:13)'>{YoutubeEmbed('9s0wce713iU')}</CustomDialog>    
  </div>
  </div>

  <div className='my-8'>
  <h2>The Moors</h2>
  
  <div className=''>
  <div className="border-1">
  <p className='font-bold'>Moorish Science</p>
  <CustomDialog title='Constitution of Man (Lecture)' organization='' source=''>{YoutubeEmbed('TtbgBRhIX0E')}</CustomDialog>    
  <CustomDialog title='Constitution of Man (separate Lecture)' organization='' source=''>{YoutubeEmbed('lw__aR2tQac')}</CustomDialog>    
  <CustomDialog title='Taj Tarik Bey and RV Bey &apos;Lets Talk Estate&apos; Part 1 of 4' organization='' source=''>{YoutubeEmbed('DcLosSXehq8')}</CustomDialog>    
  <CustomDialog title='Zodeakus El Roundtable Etymology, Astronomy and Biblica' organization='' source=''>{YoutubeEmbed('Tg37mtaouvw')}</CustomDialog>    
  </div>

 <CustomDialog title='Who Were We Before 1492? Sabir Bey Breaks Down Moorish History' organization='' source=''>{YoutubeEmbed('drjUMOnQ5kk')}</CustomDialog>      
 <CustomDialog title='Truth about the Moors - Dana Marniche' organization='' source=''>{YoutubeEmbed('1lju1EPYseY')}</CustomDialog>    

  <CustomDialog title='Judeus e Mouros em Portugal em tempos passados' organization='' source=''><iframe src="https://archive.org/embed/lusitana341" width="560" height="384" frameBorder="0" allowFullScreen></iframe></CustomDialog>

  <p className='support-sabir'>Ibn Assina (Avverroes)</p>
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

  <CustomDialog title='The Great Siege of Malta' organization='The Epic Battle Between The Ottoman Empire And The Knights of St. John' source=''><iframe width="560" height="315" src="https://archive.org/embed/the-great-siege-of-malta-the-epic-battle-between-the-ottoman-empire-and-the-knights-of-st.-john" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe></CustomDialog>    

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

 <CustomDialog title='Slaver Kings, Amazon Queens and the Brazilian Spartacus: The African Kingdom of Kongo' organization='' source=''>
 <iframe width="560" height="345" src="https://www.youtube.com/embed/w6P4KNEBbMQ?si=Z7HItIXfg9Wg9CFZ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
 </CustomDialog>    

  </div>
  </div>

    <div className='my-8'>
  <h2>Religious History</h2>
        <div className='border-1'>
         <p>Overview and Summaries</p>
    <CustomDialog title='Dr Smalls, History and Spirituality' organization='' source=''>{YoutubeEmbed('a2YHzWi697c')}</CustomDialog>    
    <CustomDialog title='Phil Valentine the Quintessence of African Spirituality' organization='' source=''>{YoutubeEmbed('RFI52XYmTD0')}</CustomDialog>    


</div>
      <div className='border-1'>

<CustomDialog title='Life of Constantine - Eusebius' organization='' source=''>  <iframe src="https://archive.org/embed/eusebiuschurchhi0001euse" width="560" height="384" frameBorder="0" allowFullScreen></iframe></CustomDialog>

    <CustomDialog title='Oldest God in WRITTEN History' organization='' source=''>{YoutubeEmbed('HSXZnbHstKY')}</CustomDialog>    
    <CustomDialog title='Yahwism to Judaism : What Really Happened? (332-175 BCE)' organization='' source=''>{YoutubeEmbed('bV6j3NR6iPg')}</CustomDialog>    
    <div className='border-1'>
    <p>Christian History</p>
        <div className='flex-flow'>
       <CustomDialog title='The Jesus Wars' organization='is essential for understanding the formation of christianity up until the end of the Counsels' source=''>{YoutubeEmbed('cYtOiGZUERs')}</CustomDialog>    
        </div>
          <ExternalWindowButton
          buttonText = 'The Bull Inter Caetera (Alexander VI)'
          externalURL = 'https://www.gilderlehrman.org/history-resources/spotlight-primary-source/doctrine-discovery-1493' /> 
        <CustomDialog title='The Popes, the Catholic Church and the Transatlantic Enslavement of Black Africans 1418-1839'><iframe src="https://library.oapen.org/bitstream/id/8aa95306-9256-443f-9e89-de5871874288/external_content.pdf" width="560" height="384" frameBorder="0"  allowFullScreen></iframe> </CustomDialog>
    </div>
  <p>The Dogon say that in the beginning there was Sirius B. The Etruscians (Greeks) say that before the creation of the universe was Gaia.  But Gaia is
  also earth.  Before the universe was created, Earth existed. It just wasn't in the physical...</p >
  </div>
  </div>

</div>
</div>
);
}

	