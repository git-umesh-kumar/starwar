"use client"
import Image from "next/image";
import styles from "./page.module.css";
import { Box, ChakraProvider, Container, Divider, calc } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Allpeople from "./components/Allpeople";
import Charprofile from "./components/Charprofile";
import Flimprofile from "./components/Flimprofile";
import PlanetsProfile from "./components/PlanetsProfile";
import Species from "./components/Species";
import Datalist from "./context/Datalist";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



export default function Home() {
  return (

    

       <Datalist>
    <ChakraProvider>

      <Navbar/>
   
     
  
      {/* <Divider/> */}
      {/* <Routes> */}
      {/* <Route exact path="/" element={    <Allpeople/>} />
      <Route exact path="/charprofile" element={ <Charprofile/>} /> */}
      {/* </Routes> */}
      
      <Allpeople/>
         {/* <Charprofile/> */}
         {/* <Flimprofile/> */}
         {/* <PlanetsProfile/> */}
         {/* <Species/> */}

      {/* <Box minH={'80vh'} bg={'green'} color={'white'}>


</Box> */}
    
    </ChakraProvider>
</Datalist>

  );
}
