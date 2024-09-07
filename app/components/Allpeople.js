
"use client"
import { Box, Button, Center, Container, Divider, Flex, Grid, GridItem, Image, SimpleGrid, Wrap } from '@chakra-ui/react'
import React, { useCallback, useContext, useEffect, useState } from 'react'
import Peoplecard from './Peoplecard'
import { IoIosArrowRoundBack, IoIosArrowRoundForward,PiGreaterThan,PiLessThan } from "react-icons/io";
import Datacontext from '../context/Datacontex';
// import { Link } from 'react-router-dom';
import Link from 'next/link';
export default function Allpeople() {
  const context=useContext(Datacontext)
  const {data,getAllchar,setdata}= context
  const [url,seturl] = useState('https://swapi.dev/api/people/');
const fetchData = useCallback(async () => {
  await getAllchar(url);
}, [url]);

useEffect(() => {
  fetchData();
}, [fetchData]);
const handleNextClick = () => {
  if (data.next) {
    seturl(data.next);
  }
};

const handlePrevClick = () => {
  if (data.previous) {
    seturl(data.previous);
  }
};
  return (


    <>
   
   <Container h={'60vh'} maxW='85%' maxH={'70%'}  size={'lg'} mt={5}
   backgroundImage={'https://lumiere-a.akamaihd.net/v1/images/star-wars-outlaws-gameplay_article-feature_01bb1e67.jpeg?region=0,0,1600,900&width=768'}
   backgroundSize='cover'
      backgroundPosition='center'
      backgroundRepeat='no-repeat'
      >
       
    </Container> 
    

   <Container h={'100%'} maxW='85%' maxH={'70%'}  size={'lg'} mt={'20px'} bg={'black'}
  
      >
   <Box fontSize={'45px'} borderBottom={'1px'} fontStyle={'oblique'} borderColor={'gray.200'} mb={'15px'}>
    All charcters ({data.count})
</Box>
       



<Wrap justify='center'>
          {data && data.results ? (
            data.results.map((data) => (

              <Peoplecard  data={data.url} />
             
            ))
          ) : (
            <Box color={'white'}>Loading...</Box>
          )}
        </Wrap>

<Box h={'70px'} m={5}    > 
  <Flex  h={'100%'} direction={'row'} justify={'space-between'}>
  <Button  isDisabled={data.previous == null}  onClick={handlePrevClick} leftIcon={<IoIosArrowRoundBack />} w={'100px'} h={'50px'} colorScheme='white' alignItems={'center'} _hover={{background:'white',color:'black',transition:'1.5s'}} variant='outline'>
    Prev.
  </Button>
  <Flex  fontSize={'small'}  justifyItems={'center'} alignItems={'center'} color={'white'}>
 Page No. {`${data&&data.next.split('=').filter(Boolean).pop()-1}`||"0"}

  </Flex>
  <Button isDisabled={data.next == null}  onClick={handleNextClick} rightIcon={<IoIosArrowRoundForward />} w={'100px'} h={'50px'} colorScheme='white' alignItems={'center'} _hover={{background:'white',color:'black',transition:'1.5s'}} variant='outline'>
    Next
  </Button>

  </Flex>
</Box>
      
      
    </Container> 


  
    
    </>
  )
}
