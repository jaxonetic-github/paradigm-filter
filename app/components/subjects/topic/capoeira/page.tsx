import react from 'react';
import { Divider, Image} from "@heroui/react";
import {YoutubeEmbed} from './../../../../_utils/youtubeEmbed.js';


export default function Page() {
  return <>  <div className='my-4'>
  <h2>A Capoeira</h2>
  A Capoeira é aprendido nos pés e palavras dos Mestres
  <div className='flex'>
  {YoutubeEmbed('Whvj-gZHR_g')}
 </div>
  </div></>;

}

//https://youtube.com/shorts/zW9PhPxrDJE?si=vQyU2imrmU5cRlQi