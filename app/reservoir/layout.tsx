
import React from "react";
import NavigationMap from '@/components/subjects/navigationMap.tsx';

/**
 * 
 * @param children : initialStoreState.resourcesData.youTubeResources
 * 
 */
  export default function ReposLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <section >
  <div className="place-self-center w-full my-8 sm:w-3/4 md:w-3/4"> <NavigationMap/></div>
  

    <div className="place-self-center w-15/16 ">{children}</div></section>
}