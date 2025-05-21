'use client'
import React from "react";

import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Button} from "@heroui/react";
import Link from 'next/link'
import {Breadcrumbs, BreadcrumbItem} from "@heroui/breadcrumbs";

import { useEffect, useState } from "react";

//import {Tabs, Tab, Card, CardBody, Switch} from "@heroui/react";


export default function MainNavBar() {

  return (<Navbar isBordered className='bg-white'>
      <NavbarBrand><Button as={Link} color={"primary"} href={"/components/subjects/references"} variant={"flat"}> <p className={"font-bold text-inherit"}>Referencing Our Story</p></Button></NavbarBrand>
      <NavbarContent justify='end'>
        <NavbarItem><Button as={Link} color={"primary"} href={'/components/subjects/illuminators'} variant={"flat"}>Illuminators</Button></NavbarItem>
         <NavbarItem><Button as={Link} color={"primary"} href={"/components/subjects/media"} variant={"flat"}>Media</Button></NavbarItem>
 </NavbarContent>
    </Navbar>);
}