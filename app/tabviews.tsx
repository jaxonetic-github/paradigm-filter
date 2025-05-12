import React from "react";
import {Tabs, Tab, Card, CardBody} from "@heroui/react";



export default function TabViews({children}) {
  return (

      <Tabs aria-label="Options">
        <Tab key="0" title="List View">
            {children[0]}
        </Tab>
       
        <Tab key="1" title="Treemap View">
           {children[1]}
        </Tab>
      </Tabs>
  );
}
