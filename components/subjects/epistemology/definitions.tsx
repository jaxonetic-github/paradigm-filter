'use client'
import React from "react";
import  {Image, Button} from "@heroui/react";
import {nzingaProfileRecord,  NO_PHOTO_ALTERNATIVE_URI, tableColumns,citationColumns,references} from '@/src/constants/references.js';
import {Tabs, Tab, Card, CardBody, Divider} from "@heroui/react";
import Link from 'next/link';
import  {SimplePopoverView} from "@/components/utils/popoverView.tsx";
import  {YoutubeEmbed} from "@/components/utils/youtubeEmbed.js";


 const Definitions  =()=> 
(<div className="flex">
  
<div className={'onion-etymon-dictionary'}>
<p>{'Onions Etymological Dictionary'}</p>
<dl className='onion-etymon-dictionary-entries max-w-sm'>
  <dt className='onion-etymon-dictionary-entries'><b>Opinions</b></dt>
  <dd>what one thinks, belief XIII (Cursor M.); estimate, estimation XIV. - (O)F. opinion- L. opinii5(n-), f. stem of opiniiri think, believe (whence opine oupai·n XVI), the sb. and vb. being used in philosophical language to repr. Gr. o6fa, oofa,£w</dd>
  <dt><b>Believe</b></dt>
  <dd>have faith (in). Late OE. belyfan, belefan, replacing, by prefix-substitution, earlier gelejan, (WS. geliefan) = OFris. geleva, OS. giloliian (Du. gelooven), OHG. gilouben (G.glauben), Goth.galaubjan :- CGerm. (exc. ON.) *galaulijan hold dear, cherish, trust in, f. *ga- Y--t- *laulJ- dear, lief. So belie·f, xu (bileafe), replacing OE. geleafa; the loss of the final syll. resulted in unvoicing of the final cons.</dd>
  <dt><b>Fact</b></dt>
  <dd>deed (now only in leg. use after, before the fact, etc.); something that has occurred, what has happened; truth, reality
      XVI; (pl.) circumstances and incidents of a case XVIII. - L. factum, sb. use of n. pp. of facere no1 • Hence (after ACTUAL) fa·ctual. XIX (Coleridge). Cf. EFFECTUAL.</dd>
</dl>
</div>
<div className={'websters-online-dictionary'}>
<p>{'Websters Online Etymological Dictionary'}</p>
<dl className='websters-online-dictionary-entries max-w-md'>
 <dt className='websters-online-dictionary-entry'><b>Discernment,</b> noun</dt>
  <dd> the quality of being able to comprehend what is obscure : skill in discerning</dd>
  <dd>an act of perceiving or discerning something</dd>
 
  <dt className='websters-online-dictionary-entry'><b>Opinions,</b>
  <span>[noun opin&apos;yon]</span></dt>
  <dd>[Latin opinio, from opinor, to thing, Gr., Latin suppono.]</dd>
  <dd>The judgment which the mind forms of any proposition, statement, theory or event, the truth or falsehood of which is supported by a degree of evidence that renders it probably, but does not produce absolute knowledge or certainty. It has been a received opinion that all matter is comprised in four elements. This opinion is proved by many discoveries to be false. From circumstances we form opinions respecting future events.</dd>
  <dd>OPINION is when the assent of the understanding is so far gained by evidence of probability, that it rather inclines to one persuasion than to another, yet not without a mixture of uncertainty or doubting.</dd>
  <dd></dd>
<dt className='websters-online-dictionary-entry'><b>Belief,</b> noun</dt>
  <dd> A persuasion of the truth, or an assent of mind to the truth of a declaration, proposition or alleged fact, on the ground of evidence, distinct from personal knowledge; as the belief of the gospel; belief of a witness. belief may also be founded on internal impressions, or arguments and reasons furnished by our own minds; as the belief of our senses; a train of reasoning may result in belief belief is opposed to knowledge and science.</dd>
  <dd>Religion; the body of tenets held by the professors of faith.</dd>
  <dd>In some cases, the word is used for persuasion or opinion, when the evidence is not so clear as to leave no doubt; but the shades of strength in opinion can hardly be defined, or exemplified. Hence the use of qualifying words; as a firm, full or strong belief</dd>
 <dt className='websters-online-dictionary-entry'><b>Fact,</b> noun</dt>
  <dd>[Latin factum, from facio, to make or do.]</dd>
  <dd> Any thing done, or that comes to pass; an act; a deed; an effect produced or achieved; an event. Witnesses are introduced into court to prove a fact Facts are stubborn things. To deny a fact knowingly is to lie.</dd>
  <dd>Reality; truth</dd>
</dl>
</div></div>);

export default  Definitions;





/**  
 * 
 <Button
      disableRipple
      className="relative overflow-visible rounded-full hover:-translate-y-1 px-12 shadow-xl bg-red/60 after:content-[''] after:absolute after:rounded-full after:inset-0 after:bg-background/40 after:z-[-1] after:transition after:!duration-500 hover:after:scale-150 hover:after:opacity-0"
      size="lg"
    >
      Press me
    </Button>
 * 
 *  <ReferencesTable references={references}/>
 * <ReferencesFilters handleDisciplineFilterChange={()=>console.log("Filter Changed");} />

 * <Topic />
        <Divider />
        <ProfileHome profileRecord={nzingaProfileRecord}/>
        <Divider />*/
