import { Box, Container, Flex, Heading, SimpleGrid, Wrap } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import Peoplecard from './Peoplecard'
import FlimCard from './FlimCard'
import CharFlim from './CharFlim'
import SimpleCard from './SimpleCard'
export default function Species(props) {

  const [data, setdata] = useState("");

  useEffect(() => {
    const fetchCharacterData = async () => {
      
        try {
          const response = await fetch(props.url);
          const jsonData = await response.json();
          setdata(jsonData);
        } catch (error) {
          console.error('Error fetching character data:', error);
        }
      
    };

    fetchCharacterData();
  }, [props.url]);

  console.log(data)
  return (
    <>
    <Container  size={'lg'} h={'75vh'} maxW='85%' maxH={'80%'} >
     

      <Flex direction={['column','row']} width={'100%'}h={'100%'} >
        <Box   height={'100%'} width={['100%','50%']}
        backgroundImage={'https://lumiere-a.akamaihd.net/v1/images/aki-aki-main_09f2d83b.jpeg?region=369%2C0%2C854%2C854'}
        backgroundSize='cover'
           backgroundPosition='center'
           backgroundRepeat='no-repeat'
        >
           
        </Box>
        <Box borderLeft={['none', '1px']}   borderTop={['1px', 'none']}   height={'100%'} width={['100%','50%']}>
            <Container mt={'10px'}>
             <Flex direction={'column'}>
                <Heading mb={5}>{data.name}</Heading>
                <Heading as={'h2'} size={'sm'} color={'gray'} mb={3}>Classification: {data.classification}</Heading>
                <Heading as={'h2'} size={'sm'} color={'gray'} mb={3}>Designation: {data.designation}</Heading>
                <Heading as={'h2'} size={'sm'} color={'gray'} mb={3}>Average Height: {data.average_height}</Heading>
                <Heading as={'h2'} size={'sm'} color={'gray'} mb={3}>Skin Colors: {data.skin_colors}</Heading>
                <Heading as={'h2'} size={'sm'} color={'gray'} mb={3}>Hair Colors: {data.hair_colors}</Heading>
                <Heading as={'h2'} size={'sm'} color={'gray'} mb={3}>Eye Colors: {data.eye_colors}</Heading>
                <Heading as={'h2'} size={'sm'} color={'gray'} mb={3}>Average Lifespan: {data.average_lifespan}</Heading>
                <Heading as={'h2'} size={'sm'} color={'gray'} mb={3}>HomeWorld: {data.homeworld}</Heading>
                <Heading as={'h2'} size={'sm'} color={'gray'} mb={3}>Language: {data.language}</Heading>
              
                
             </Flex>

            </Container>
        </Box>

      </Flex>

    </Container>
    
    <Container display={data && data.people && data.people.length === 0 ? 'none' : 'block'} h={'100%'} maxW='85%' maxH={'70%'} border={'1px'} size={'lg'} mt={'20px'} bg={'black'}
  
  >
<Box fontSize={'50px'} borderBottom={'2px'} fontStyle={'oblique'} borderColor={'gray'} mb={'15px'}>
People
</Box>
   


<Wrap justify='center'>
          {data && data.people ? (
            data.people.map((data) => (

              <Peoplecard  data={data.url} />
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
