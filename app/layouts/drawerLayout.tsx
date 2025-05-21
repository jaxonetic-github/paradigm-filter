'use client';
//import "../globals.css";
import AppNavBar from './../components/appnavbar.js';
 import ReferencesTable from './../components/subjects/references/page.js';
import Subjects from './../components/subjects/subjects.tsx';
import { FaFilter } from "react-icons/fa";
import { FaExpandArrowsAlt } from "react-icons/fa";

import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  Button,
  useDisclosure,
Divider,
  Link,
} from "@heroui/react";

export default function SharedNavDrawerLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const {isOpen, onOpen, onOpenChange,onClose} = useDisclosure();

  const handleDrawerChange = () => {
    onOpen();
  };

  return <>
<Button onPress={onOpen}>{`${isOpen}`}Navigation</Button>
            <Divider/>
            <Subjects/>
{children}
      <Drawer className={'bg-yellow-800 min-h-2xl min-w-2xl'}   isOpen={isOpen} onOpenChange={onOpenChange} shouldBlockScroll={false}>
         <DrawerContent>
          {(onClose) => (
            <>
              <DrawerHeader className="flex flex-col gap-1">Drawer Title</DrawerHeader>
              <DrawerBody >
                         <div  className={"flex-row bg-red-200"}>
          <FaFilter/>
            <a href='/' className=''>** Pre-Beta Home**</a>
            <AppNavBar/>

          </div>
              </DrawerBody>
              <DrawerFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Action
                </Button>
              </DrawerFooter>
            </>
          )}
        </DrawerContent>
      </Drawer>
         </>
}

