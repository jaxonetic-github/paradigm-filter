import React from "react";

import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Button, Link, Image} from "@heroui/react";
import {
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
} from "@heroui/react";
import {Breadcrumbs, BreadcrumbItem} from "@heroui/breadcrumbs";


//import {Tabs, Tab, Card, CardBody, Switch} from "@heroui/react";
import SessionComponent from '@/components/authentication/signup.tsx';


export default function MainNavBar() {

  return (<Navbar isBordered shouldHideOnScroll className='bg-white'>
    <NavbarBrand><Button as={Link} color={"primary"} href={"/"} variant={"flat"}> <Image className="content-division w-10"
            src={'/images/book-svgrepo-com.svg'} 
            fallbackSrc={'/images/imagenotavailable.jpeg'}
            alt={`Default Image not found for`}
          />Home</Button></NavbarBrand>

      <NavbarContent justify='center'>
         <NavbarItem><Button as={Link} color={"primary"} href={"/stripe"} variant={"flat"}>Donate</Button></NavbarItem>
 </NavbarContent>
      <NavbarContent justify='center'>

                <NavbarItem><SessionComponent/></NavbarItem>
 </NavbarContent>
    </Navbar>);
}

/*         <NavbarItem><Button as={Link} color={"primary"} href={"/api/auth/signin"} variant={"flat"}>Sign/Log In</Button></NavbarItem>

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