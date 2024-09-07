import { Box, Container, Flex, Heading, SimpleGrid, Wrap } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import Peoplecard from './Peoplecard'
import FlimCard from './FlimCard'
import CharFlim from './CharFlim'
import SimpleCard from './SimpleCard'
export default function PlanetsProfile(props) {
  const [data, setdata] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      
        try {
          const response = await fetch(props.url);
          const jsonData = await response.json();
          setdata(jsonData);
        } catch (error) {
          console.error('Error fetching character data:', error);
        }
      
    };

    fetchData();
  }, [props.url]);
 console.log(data)
  return (
    
    <>
    <Container size={'lg'} h={'75vh'} maxW='85%' maxH={'80%'} >
   

      <Flex direction={['column','row']} width={'100%'}h={'100%'} >
        <Box   height={'100%'} width={['100%','50%']}
        backgroundImage={'https://lumiere-a.akamaihd.net/v1/images/lola-sayu_e41867d8.jpeg?region=69%2C0%2C1422%2C800'}
        backgroundSize='cover'
           backgroundPosition='center'
           backgroundRepeat='no-repeat'
        >
           
        </Box>
        <Box borderLeft={['none', '1px']}   borderTop={['1px', 'none']}   height={'100%'} width={['100%','50%']}>
            <Container mt={'10px'}>
             <Flex direction={'column'}>
                <Heading mb={5}>{data.name}</Heading>
                <Heading as={'h2'} size={'sm'} color={'gray'} mb={3}>Rotation Period: {data.rotational_period}</Heading>
                <Heading as={'h2'} size={'sm'} color={'gray'} mb={3}>Orbital Period: {data.orbital_period}</Heading>
                <Heading as={'h2'} size={'sm'} color={'gray'} mb={3}>Diameter: {data.diameter}</Heading>
                <Heading as={'h2'} size={'sm'} color={'gray'} mb={3}>Climate: {data.climate}</Heading>
                <Heading as={'h2'} size={'sm'} color={'gray'} mb={3}>Gravity: {data.gravity}</Heading>
                <Heading as={'h2'} size={'sm'} color={'gray'} mb={3}>Terrain: {data.terrain}</Heading>
                <Heading as={'h2'} size={'sm'} color={'gray'} mb={3}>Surface Water: {data.surface_water}</Heading>
                <Heading as={'h2'} size={'sm'} color={'gray'} mb={3}>Population: {data.population}</Heading>
              
                
             </Flex>

            </Container>
        </Box>

      </Flex>

    </Container>
    
    <Container  display={data && data.residents && data.residents.length === 0 ? 'none' : 'block'}h={'100%'} maxW='85%' maxH={'70%'} border={'1px'} size={'lg'} mt={'20px'} bg={'black'}
  
  >
   <Box fontSize={'45px'} borderBottom={'1px'} fontStyle={'oblique'} borderColor={'gray.200'} mb={'15px'}>
Residents
</Box>
   



<Wrap justify='center'>
          {data && data.residents ? (
            data.residents.map((data) => (

              <Peoplecard  data={data.url} />
            
            ))
          ) : (
            <Box color={'white'}>Loading...</Box>
          )}
        </Wrap>

     
    
  
  
</Container> 

<CharFlim films={data.films}/>


 
    
    </>
  )
}
