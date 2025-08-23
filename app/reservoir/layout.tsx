
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
  return <section><h3>Reservoir</h3>
  <NavigationMap/>
  
    <div>{children}</div></section>
}