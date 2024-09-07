
import { Box, ChakraProvider } from '@chakra-ui/react';
import Navbar from './Navbar'; 
import React from 'react';
import Datalist from '@/app/context/Datalist';

const Layout = ({ children }) => {
  return (

    <ChakraProvider>
   <Datalist>

    <Box bg={'black' } color={'white'}>
      <Navbar /> 
      <main>
        {children} 
      </main>
      
    </Box>
   </Datalist>
    </ChakraProvider>
  );
};

export default Layout;
