'use client'
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Button} from "@heroui/react";
import Link from 'next/link'
import {Breadcrumbs, BreadcrumbItem} from "@heroui/breadcrumbs";

import React from "react";
import { useEffect, useState } from "react";

//import {Tabs, Tab, Card, CardBody, Switch} from "@heroui/react";


export default function MainNavBar() {

  return (<Navbar isBordered className='bg-white'>
      <NavbarBrand>
       <Button as={Link} color="primary" href="/components" variant="flat"> <p className="font-bold text-inherit"> Referencing Our Story</p></Button>
      </NavbarBrand>
      <NavbarContent justify='end'>
        <NavbarItem className='lg:flex'>
          <Link href='/components/epistemology'>Epistemology</Link></NavbarItem>
        <NavbarItem><Button as={Link} color="primary" href="/components/illuminators" variant="flat">Illuminators</Button></NavbarItem>
        <NavbarItem><Button as={Link} color="primary" href="/components/media" variant="flat">Media</Button></NavbarItem>
             <NavbarItem><Button as={Link} color="primary" href="/components/faqs" variant="flat">Faqs</Button></NavbarItem>
 </NavbarContent>
    </Navbar>);
}