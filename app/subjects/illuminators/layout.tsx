
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
  return <section><h3>If you don't study the masters, how do you know your culture</h3><div>{children}</div></section>
}