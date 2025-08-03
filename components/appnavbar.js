'use client'
import React from "react";

import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Button, Link, Image} from "@heroui/react";
import {
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
} from "@heroui/react";
import {Breadcrumbs, BreadcrumbItem} from "@heroui/breadcrumbs";

import { useEffect, useState } from "react";

//import {Tabs, Tab, Card, CardBody, Switch} from "@heroui/react";


export default function MainNavBar() {

  return (<Navbar isBordered shouldHideOnScroll position="" className='bg-white'>
      <NavbarBrand><Button as={Link} color={"primary"} href={"/"} variant={"flat"}> <Image className="content-division w-10"
            src={'/images/book-svgrepo-com.svg'} 
            fallbackSrc={'/images/imagenotavailable.jpeg'}
            alt={`Default Image not found for`}
          />Home</Button></NavbarBrand>

      <NavbarContent justify='center'>

        
         <NavbarItem><Button as={Link} color={"primary"} href={"/components/subjects/media"} variant={"flat"}>Donate</Button></NavbarItem>
 </NavbarContent>
      <NavbarContent justify='end'>

        
         <NavbarItem><Button as={Link} color={"primary"} href={"/components/subjects/media"} variant={"flat"}>Sign/Log In</Button></NavbarItem>
 </NavbarContent>
    </Navbar>);
}

/*
 <Navbar>
       <Link   underline="always"   href='/'><Image className="content-division w-10"
            src={'/images/book-svgrepo-com.svg'} 
            fallbackSrc={'/images/imagenotavailable.jpeg'}
            alt={`Default Image not found for`}
          />Home
</Link>
            <ContentMap/>
             <Navbar>
*/