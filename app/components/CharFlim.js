import { Box, Container, Wrap } from '@chakra-ui/react'
import React from 'react'
import FlimCard from './FlimCard'
import Link from 'next/link'

export default function CharFlim(props) {

  return (
    <Container h={'100%'} maxW='85%' maxH={'70%'}  size={'lg'} mt={'20px'} bg={'black'}
  
    >
  <Box fontSize={'50px'} borderBottom={'2px'} fontStyle={'oblique'} borderColor={'gray'} mb={'15px'}>
  films
  </Box>
     
  
  
  
  <Wrap justify='center'>
  {props.films && props.films ? (
           props.films.map((data) => (

            // <Link key={data} href={`/page/films/${data.split('/').filter(Boolean).pop()}`}   passHref>
               
            // {/* </Link> */}
              <FlimCard data={data}  />
            ))
          ) : (
            <Box color={'white'}>Loading...</Box>
          )}
 
  
  
  </Wrap>
  
       
      
    
    
  </Container> 
  )
}
