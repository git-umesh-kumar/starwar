// pages/index.js




import { Box, ChakraProvider, Container, Divider, calc } from "@chakra-ui/react";
import Navbar from "@/app/components/Navbar";
import Allpeople from "@/app/components/Allpeople";
import Charprofile from "@/app/components/Charprofile";
import Flimprofile from "@/app/components/Flimprofile";
import PlanetsProfile from "@/app/components/PlanetsProfile";
import Species from "@/app/components/Species";
import Datalist from "@/app/context/Datalist";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



export default function Home() {
  return (

    
<Box bg={'black'} color={'white'}>

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

</Box>
  );
}
