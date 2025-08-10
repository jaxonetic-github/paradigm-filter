import react from 'react';
import { Divider, Image} from "@heroui/react";
import {YoutubeEmbed} from '@/components/utils/youtubeEmbed.js';


export default function Page() {
  return <>  <div className='my-4'>
  <h2>A Capoeira</h2>
  <p hidden>In 2006, Mestre Valmir da Bahia taught a Capoeira Angola workshop in little Five Points of Atlanta Georgia.  He 
  was thinner than his pictures because he had been recovering from an illness; in fact, I hadn't even recognized him while changing in the bathroom before the first 
  class of the workshop.  In the middle of one of the later classes, he was teaching how to walk on our hands.  Most of us had difficulties and we were
  amazed at the ease in which he would effortlessly pop into a bananeira(a hand stand) and literally start dancing walking and dancing on his hands 
  before slowly descending onto his feet. Afterwards he said something along the lines of, "In this modern colonial world one of the few things we can control is our bodies."
   (There was a Brazilian student named Olivia who was the undesrstandably designated tranlator. )  He also said later in the workshop,
    "Gente, if you want to learn this art you must do 2 things.  One you must learn my language and two you must go to Brazil and learn my culture."
    Two more Valmirisms said years later in his class in Dois de Julio.   The first is &quot;O meu objectivo e pra mostrar a abilidade de ver o mestre dentro de voce.&quot;.
    Finally, &quot;Voces estāo com faca e queijo na mão&quot;.</p>

  <div className='flex'>
  <p>Mestre Moraes</p>
  {YoutubeEmbed('Whvj-gZHR_g')}
   {YoutubeEmbed('E5GuFHKGovE')}
 </div>
  </div></>;

}

//https://youtube.com/shorts/zW9PhPxrDJE?si=vQyU2imrmU5cRlQi