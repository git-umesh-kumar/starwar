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
 console.log(props.url)
  return (
    
    <>
    <Container size={'lg'} h={'75vh'} maxW='85%' maxH={'80%'} >
     

      <Flex direction={['column','row']} width={'100%'}h={'100%'} >
        <Box  height={'100%'} width={['100%','50%']}
        backgroundImage={'https://lumiere-a.akamaihd.net/v1/images/tie-whisper_ec973722.jpeg?region=289%2C0%2C720%2C720'}
        backgroundSize='cover'
           backgroundPosition='center'
           backgroundRepeat='no-repeat'
        >
           
        </Box>
        <Box  borderLeft={['none', '1px']}   borderTop={['1px', 'none']}   height={'100%'} width={['100%','50%']}>
            <Container mt={'10px'}>
             <Flex direction={'column'}>
                <Heading mb={5}>{data.name}</Heading>
                <Heading as={'h2'} size={'sm'} color={'gray'} mb={3}>Model: {data.model}</Heading>
                <Heading as={'h2'} size={'sm'} color={'gray'} mb={3}>Manufecturer: {data.manufecturer}</Heading>
                <Heading as={'h2'} size={'sm'} color={'gray'} mb={3}>Cost in Credits: {data.cost_in_credits}</Heading>
                <Heading as={'h2'} size={'sm'} color={'gray'} mb={3}>Length: {data.length}</Heading>
                <Heading as={'h2'} size={'sm'} color={'gray'} mb={3}>Max Atmosphering Speed: {data.max_atmosphering_speed}</Heading>
                <Heading as={'h2'} size={'sm'} color={'gray'} mb={3}>Crew: {data.crew}</Heading>
                <Heading as={'h2'} size={'sm'} color={'gray'} mb={3}>Passengers: {data.passengers}</Heading>
                <Heading as={'h2'} size={'sm'} color={'gray'} mb={3}>Cargo Capacity: {data.cargo_capacity}</Heading>
                <Heading as={'h2'} size={'sm'} color={'gray'} mb={3}>Consumables: {data.consumables}</Heading>
                <Heading as={'h2'} size={'sm'} color={'gray'} mb={3}>Hyperdrive_rating: {data.hyperdrive_rating}</Heading>
                <Heading as={'h2'} size={'sm'} color={'gray'} mb={3}>MGLT: {data.MGLT}</Heading>
                <Heading as={'h2'} size={'sm'} color={'gray'} mb={3}>Starship Class: {data.starship_class}</Heading>
              
                
             </Flex>

            </Container>
        </Box>

      </Flex>

    </Container>
    
    <Container display={data && data.pilots && data.pilots.length === 0 ? 'none' : 'block'} h={'100%'} maxW='85%' maxH={'70%'} border={'1px'} size={'lg'} mt={'20px'} bg={'black'}
  
  >
   <Box fontSize={'45px'} borderBottom={'1px'} fontStyle={'oblique'} borderColor={'gray.200'} mb={'15px'}>
Pilots
</Box>
   



<Wrap justify='center'>
          {data && data.pilots ? (
            data.pilots.map((data) => (

              <SimpleCard  data={data.url} />
              // <Link key={data.url} href={`/page/profile/${data.url.split('/').filter(Boolean).pop()}`}   passHref>
              
            //  </Link>
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
