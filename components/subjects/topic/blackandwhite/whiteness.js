
import React from "react";
import {specificallyCompiledVideos, BLACKVWHITE_VIDEOLIST_KEY} from '@/src/constants/references.js';
import HonorableMentionVideos from './../../media/honorableMentionVideos.js';
import {YoutubeEmbed} from '@/components/utils/youtubeEmbed.js';
import CustomDialog from '@/components/utils/CustomDialog.tsx';
import {ReferenceView, referenceFilter, ReferencesGridView} from './../../references/referencesView.jsx';

import { Image, Divider, Link} from "@heroui/react";

//https://www.youtube.com/live/bA9-pwts4Tg?si=uguefX7v935svwDA&t=3159
//export function Video({videoSource}:AppProps) { return (<video key={videoSource.path} width="320" height="240" controls preload="none"><source src={ videoSource.path} type="video/mp4" />Your browser does not support the video tag.</video>)}
/**       <div className='mx-5'>
                <HonorableMentionVideos  dataArray={specificallyCompiledVideos[BLACKVWHITE_VIDEOLIST_KEY]}  /> 
      </div>
   */
export default function Whiteness(){
   const theodoreAllenQuote0 = 'When the first Africans arrived in Virginia in 1619 there were no white people, nor according to the colonial records, would there be for another 60 years';
 const browderSnippet1Quote = 'The first step, the first step we want to focus on, is the step that you must be actively engaged be actively in the process of freeing your mind.  You must work to free your mind. You have to do that, begin the process of freeing your mind by  evaluating everything that you&apos;ve been taught. Everything. And develop a discriminating eye so that you can ultimately learn what not to  believe. You don&apos;t want to believe what everyone tells you. You want to get some information to reinforce that, to validate. that information to determine  whether or not it should be programmed within your consciousness';

 const browderSnippet0Quote ='All of these things are done in order to manipulate the images which will ultimates affect and influence your consciousness. Now we need to realize that racism is an unavoidable fact of life in America. We need to understand how racist images attack us  constantly 24 hours a day. We need to understand that whoever is responsible for craeting images will ultimately determine  your level of consciousness.  How you feel about yourself[personal note: like feeling dependent on the government or feeling unable to     make change] is determined by how you see yourself. And if the images that are constantly projected around you say that you are less  than human,  then you will act less than human. Others will regard you as less than human.  Carter G Woodson said it best, when he said  &quot;when you control a Man*apos;s thinking you don&apos;t have to worry about his actions, you don&apos;t have to  tell him to stand here or there for he will find his proper place and will stay in it.  A person who has been miseducated does not have to be ordered to the back door in any society for they will go  without being told.  In fact, if there is no back door, there very nature is to demand one.  Why? Because their miseducation makes it necessary[like falling under someon&apos;s spell].&quot;';
 const browderSnippits = [{url:'https://youtu.be/fRAHawFgNE4?si=iUzU95VYl6uBTa1h&t=1498', transcription:browderSnippet1Quote},{url:'https://youtu.be/fRAHawFgNE4?si=1gb5qHpt4D9iZSgo&t=1388', transcription: browderSnippet0Quote}];

 const snippet = {src:'The Invention of the White Race, Vol 1. 1994',
                      quote:theodoreAllenQuote0,
                      commentaries:['videos/history/commentaries/TheInventionOfTheWhiteRacebyTheodoreWAllenPresentationbyJeffreyBPerry.mp4']};

 const kurimeo_evidenseofblack_snippet = {src:'Africans and Native Americans',
                      quote:'&quot;It is apparent from the evidence that the term negro or its equivalent was not used for a race or a single stock of people or to point to ancestry or ethnicity. It was usually a simple description for perceived color.&quot;',
                      commentaries:['https://www.youtube.com/live/a3GaFbkRwYo?si=XBuVTNUSI6_Fys7o']};

  return (<><div className='mx-5'>

    <p>Most whites, meanwhile, believed that science proved that there were
biologically distinct human races, and that Europeans were members of the
superior one.   <span>242-xvi Introduction</span></p>

  <p>Between the arrival of the first Africans in 1619 and the outbreak of Revolution in 1775, slavery had been one of the engines of colonial economic
growth. The number of Africans brought to Maryland and Virginia before
the late 166os was a trickle-a few dozen per year. But along with white
indentured servants, these enslaved Africans built a massive tobacco production complex along the Chesapeake Bay and its tributaries. Over those formative fifty years, settlers imported concepts of racialized slavery from other
colonies (such as those in the Caribbean, where enslaved Africans already
outnumbered other inhabitants by the mid-seventeenth century). By 1670,
custom and law insisted that children were slaves if their mothers were slaves,
that enslaved Africans were to be treated as rights-less, perpetual outsiders
(even if they converted to Christianity), that they could be whipped to labor,
and that they could be sold and moved. They were chattel property. And
everyone of visible African descent was assumed to be a slave.
          <span>
242-p3
          </span></p>

 <p> Petitions flooded northern state legislatures
in the 1770s and 1780s, charging that slavery violated natural rights. And
Thomas Jefferson, who admitted that "the Almighty has no attribute which
can take a side with us" against the demands ofthe enslaved, was not the only
prominent southerner who acknowledged the contradictions.
 <span>
242-p3</span></p>
          <div>
        <h3 className="font-bold text-lg">The colorable "White" Construct</h3>
        <p></p>
        <p></p>

<div>   
    <p><ReferencesGridView  rows={referenceFilter([195])}/></p>
</div>
<div>   
   <ReferencesGridView  rows={referenceFilter([57])}/>
</div>

<div>   
 <ReferencesGridView  rows={referenceFilter([196])}/>
</div>

      {/**<ReferencesTable columns={citationColumns} rows={[references[10]]}/>**/}
    </div>

        <CustomDialog title='Taming Cannibals' organization='Race and the Victorians' source=''>
        <Image  width={450} height={600} src="/images/blackandwhite/tamingcannibals-preview/0e32aa6b-eba2-469d-b34e-05549ea6cf73-11.jpg" />
  <Image width={450} height={600}  src="/images/blackandwhite/tamingcannibals-preview/0e32aa6b-eba2-469d-b34e-05549ea6cf73-12.jpg" />
  <Image  width={450} height={600} src="/images/blackandwhite/tamingcannibals-preview/0e32aa6b-eba2-469d-b34e-05549ea6cf73-13.jpg" />
  <Image  width={450} height={600} src="/images/blackandwhite/tamingcannibals-preview/0e32aa6b-eba2-469d-b34e-05549ea6cf73-14.jpg" />
  <Image  width={450} height={600} src="/images/blackandwhite/tamingcannibals-preview/0e32aa6b-eba2-469d-b34e-05549ea6cf73-15.jpg" />
  <Image  width={450} height={600} src="/images/blackandwhite/tamingcannibals-preview/0e32aa6b-eba2-469d-b34e-05549ea6cf73-16.jpg" />
  <Image  width={450} height={600} src="/images/blackandwhite/tamingcannibals-preview/0e32aa6b-eba2-469d-b34e-05549ea6cf73-17.jpg" />
  <Image  width={450} height={600} src="/images/blackandwhite/tamingcannibals-preview/0e32aa6b-eba2-469d-b34e-05549ea6cf73-18.jpg" />
  <Image  width={450} height={600} src="/images/blackandwhite/tamingcannibals-preview/0e32aa6b-eba2-469d-b34e-05549ea6cf73-19.jpg" />
  <Image  width={450} height={600} src="/images/blackandwhite/tamingcannibals-preview/0e32aa6b-eba2-469d-b34e-05549ea6cf73-20.jpg" />
  <Image  width={450} height={600} src="/images/blackandwhite/tamingcannibals-preview/0e32aa6b-eba2-469d-b34e-05549ea6cf73-21.jpg" />
  <Image  width={450} height={600} src="/images/blackandwhite/tamingcannibals-preview/0e32aa6b-eba2-469d-b34e-05549ea6cf73-22.jpg" />
  <Image  width={450} height={600} src="/images/blackandwhite/tamingcannibals-preview/0e32aa6b-eba2-469d-b34e-05549ea6cf73-23.jpg" />
  <Image  width={450} height={600} src="/images/blackandwhite/tamingcannibals-preview/0e32aa6b-eba2-469d-b34e-05549ea6cf73-24.jpg" />
  <Image  width={450} height={600} src="/images/blackandwhite/tamingcannibals-preview/0e32aa6b-eba2-469d-b34e-05549ea6cf73-25.jpg" />
  <Image  width={450} height={600} src="/images/blackandwhite/tamingcannibals-preview/0e32aa6b-eba2-469d-b34e-05549ea6cf73-26.jpg" />
  <Image  width={450} height={600} src="/images/blackandwhite/tamingcannibals-preview/0e32aa6b-eba2-469d-b34e-05549ea6cf73-27.jpg" />
  <Image  width={450} height={600} src="/images/blackandwhite/tamingcannibals-preview/0e32aa6b-eba2-469d-b34e-05549ea6cf73-28.jpg" />
  </CustomDialog>  
  <Divider className="my-4" />
 
            <p><ReferencesGridView  rows={referenceFilter([197])}/></p>

   
     <Divider className="my-4" />
<div>
        <span>Takeaways</span>
    <p>*** (13:28) An example of researching the researchers...  </p>
    <p>***Back in the 16th century negro was used with an uppercase N.</p>
    <p>***A system of racial priviledge was deliberately instituted in the 17th Century by Anglo-American borgoisie in order to define and establish a &quot;white race&quot; and establish a system of racial oppression.</p>
    <p>***The invention of the white race was political and no part of genetic evolution</p>
    <p>***{snippet.quote}</p>
    <p>***It took 100 years after the British&apos;s 1st North American colonial attempt at Roanoke before any record of a white person
         was ever found.</p>
     </div>
          
<div>   
   
</div>
          
</div></>);
}
/**
   <ul>
    <li>Chapter 3 of Africans and Native Americans talks illustrates how the terms negro and black has been applied to people of American decent.  (28)[https://www.youtube.com/live/a3GaFbkRwYo?si=XBuVTNUSI6_Fys7o]</li>
    <li>&quot;It is apparent from the evidence that the term negro or its equivalent was not used for a race or a single stock of people or to point to ancestry or ethnicity. It was usually a simple
    description for perceived color.</li>
    <li>Negro or its functional equivalent mohr, moor, more (German Dutch French) in a very  broad sense.  The Portuguese also tended to use the term negro to encompass non Africans, people whose skin colow was a shade of brown... Negro or more almost  becomes equivalent to non-white or third-world in recent usage. </li>
</ul>**/

