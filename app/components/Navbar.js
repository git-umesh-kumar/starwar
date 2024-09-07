"use client"

import {
 
  Box,
    Button,
    Divider,
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    Flex,
    IconButton,
    Image,
    Input,
 
    VStack,
 
    useDisclosure,
  } from "@chakra-ui/react";
import {FaBars} from "react-icons/fa"
import React from 'react'
import Link from "next/link";

export default function Navbar() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef();
    return (
      <>
        <Drawer 
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent bg={'black'} color={'white'}>
            <DrawerCloseButton size={'xl'} mt={4} mr={5} />
            <DrawerHeader>Menu Bar</DrawerHeader>
            <Divider/>
            <DrawerBody>
              <VStack  spacing={6} fontSize={18} w={'100%'}>
                <Link href={'/page/Allfavchar'} ><Box border={'2px'} borderColor={'black'}  as="div" _hover={{border:'2px solid white',
              
                }} p={4} >My Favourite</Box></Link>
                <Link href={'#'} ><Box border={'2px'} borderColor={'black'} as="div" _hover={{border:'2px solid white',
                 
                }} p={4} >All Character</Box></Link>
                <Link href={'#'} ><Box  border={'2px'} borderColor={'black'} as="div" _hover={{border:'2px solid white',
               
                }} p={4} >All Movies</Box></Link>
                <Link href={'#'} ><Box border={'2px'} borderColor={'black'} as="div" _hover={{border:'2px solid white',
                 
                }} p={4} >All Vehicle</Box></Link>
                
              </VStack>
            </DrawerBody>

          
          </DrawerContent>
        </Drawer>
        <Flex mb={7}
        borderBottom={'2px'} borderColor={'gray'}
          h="75px"
          bg="black"
          color={'white'}
          justify="space-between"
          align="center"
          px={4}
        >
           <Link href={'/'}>
            <Flex h={'50px'} w={'150px'}  ><Image h={'100%'} w={'200%'} src='https://lumiere-a.akamaihd.net/v1/images/sw_logo_stacked_2x-52b4f6d33087_7ef430af.png?region=0,0,586,254'></Image></Flex>
           </Link>
          
          <IconButton
            
            onClick={onOpen}
            ref={btnRef}
            variant="ghost"
            color="white"
            _hover={{ bg: "main.400" }}
            // fontSize="l"
          >
            <FaBars size={'30px'}/>
            
          </IconButton>
          
        </Flex>
        {/* <Divider/> */}
      </>
    );
}
