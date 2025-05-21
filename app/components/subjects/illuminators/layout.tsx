
import React from "react";

/**
 * 
 * @param children : initialStoreState.resourcesData.youTubeResources
 * 
 */
  export default function IlluminatorLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <section>{children}</section>
}