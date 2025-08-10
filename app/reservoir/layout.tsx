
import React from "react";
import ContentMap from '@/components/subjects/subjects.tsx';

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
     <ContentMap/>   
    <div>{children}</div></section>
}