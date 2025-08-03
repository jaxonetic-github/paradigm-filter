'use client'
//import "../globals.css";
//import AppNavBar from './../appnavbar.js';
 import ReferencesView from './references/page.jsx';
import { Suspense } from 'react';

export default function Page() {


console.log('subject app/components/subject/page');
  return <>   
<Suspense fallback={<p>Loading feed...</p>}>
   <ReferencesView/>      </Suspense>


     </>;



}