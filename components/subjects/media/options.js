//import {initialStoreState} from './src/constants/state.js';
//import {Accordion, AccordionItem, Avatar, Card, CardHeader, CardBody, CardFooter} from "@heroui/react";
//import {Divider, Image, Link, Tooltip,Button} from "@heroui/react";
import React from "react";
//import styles from './animatedoptions.module.css'



/**
 * 
 * @Description This simple element displays a List of Strings and returns the index of a user's selection (onClick)
 * @param dataArray : initialStoreState.resourcesData.onlineMediaContent from initial state
 *  literally an arrary of 
 * [{
    navIndexUpdater: function,
 * 
 */


export default function Options ({navIndexUpdater, optionsArray}) {
  const _navIndexUpdater = navIndexUpdater;
	 const styles = {
        textInset:{ border:'3px solid rgba(0, 0, 0, 0.05)'}, 
   };
	

 let optionItems =optionsArray.map((optionRecord, index) =>{

return (<li key={'options'+index} 
        onClick={()=>{  _navIndexUpdater(optionRecord) }}
             className="origin-center hover:bg-sky-100"><button ><p className="-rotate-z-[.2rad] ">{optionRecord}</p></button></li>)});

 return (<><ul className="py-5 flex justify-center bg-default-100 shadow-large rounded-large" >{optionItems}</ul></>);
}

