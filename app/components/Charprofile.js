import { Box, Container, Flex, Heading, SimpleGrid, Wrap } from '@chakra-ui/react'
import React, { useCallback, useContext, useEffect, useState } from 'react'
import Peoplecard from './Peoplecard'
import FlimCard from './FlimCard'
import CharFlim from './CharFlim'
import SimpleCard from './SimpleCard'
import Datacontext from '../context/Datacontex'
import Link from 'next/link';

export default function Charprofile(props) {
  const context=useContext(Datacontext)
  const {profile,Charprofile,CharImg}= context
 
const fetchData = useCallback(async () => {
  await Charprofile(props.url);
}, [props.url]);

useEffect(() => {
  fetchData();
}, [fetchData]);

const getRandomKey = (obj) => {
  const keys = Object.keys(obj);
  const randomIndex = Math.floor(Math.random() * keys.length);
  return keys[randomIndex];
};

const randomKey = getRandomKey(CharImg);
  return (
    <>
    <Container  size={'lg'} h={'75vh'} maxW='85%' maxH={'80%'} >
      <Flex direction={['column','row']} width={'100%'}h={'100%'} >
        <Box  border={'1px'} height={'100%'} width={['100%','50%']}
        backgroundImage={`url(${CharImg[profile.name]||CharImg[randomKey]})`}
        backgroundSize='cover'
           backgroundPosition='center'
           backgroundRepeat='no-repeat'
        >
           
        </Box>
        <Box border={'1px'}   height={'100%'} width={['100%','50%']}>
            <Container mt={'10px'}>
             <Flex direction={'column'}>
                <Heading mb={5}>{profile.name}</Heading>
                <Heading as={'h2'} size={'sm'} color={'gray.300'} mb={3}>height: {profile.height}</Heading>
                <Heading as={'h2'} size={'sm'} color={'gray.300'} mb={3}>mass: {profile.mass} </Heading>
                <Heading as={'h2'} size={'sm'} color={'gray.300'} mb={3}>Hair color: {profile.hair_color}</Heading>
                <Heading as={'h2'} size={'sm'} color={'gray.300'} mb={3}>Skin color: {profile.skin_color}</Heading>
                <Heading as={'h2'} size={'sm'} color={'gray.300'} mb={3}>Eye color: {profile.eye_color}</Heading>
                <Heading as={'h2'} size={'sm'} color={'gray.300'} mb={3}>Birth Year: {profile.birth_year}</Heading>
                <Heading as={'h2'} size={'sm'} color={'gray.300'} mb={3}>Gender: {profile.gender}</Heading>
                <Heading as={'h2'} size={'sm'} color={'gray.300'} mb={3}>HomeWorld:  {profile.homeworld}</Heading>
                
             </Flex>

            </Container>
        </Box>

      </Flex>

    </Container>
    
   <CharFlim films={profile.films}/>



   <Container display={profile && profile.species && profile.species.length === 0 ? 'none' : 'block'} h={'100%'} maxW='85%' maxH={'70%'}  size={'lg'} mt={'20px'} bg={'black'}
  p={4} mb={6}
  >
   <Box fontSize={'45px'} borderBottom={'1px'} fontStyle={'oblique'} borderColor={'gray.200'} mb={'15px'}>
species
</Box>
   

<Wrap justify='center'>
          {profile && profile.species ? (
            profile.species.map((data) => (

              <Link key={data} href={`/page/species/${data.split('/').filter(Boolean).pop()}`}   passHref>
               
              <SimpleCard data={data} />
             </Link>
            ))
          ) : (
            <Box color={'white'}>Loading...</Box>
          )}
        </Wrap>
     
    
  
  
</Container> 
<Container  display={profile && profile.vehicles && profile.vehicles.length === 0 ? 'none' : 'block'} h={'100%'} maxW='85%' maxH={'70%'}  size={'lg'} mt={'20px'} bg={'black'}
  p={4} mb={6}
  >
   <Box fontSize={'45px'} borderBottom={'1px'} fontStyle={'oblique'} borderColor={'gray.200'} mb={'15px'}>
vehicles
</Box>
   



<Wrap justify='center'>
          {profile && profile.vehicles ? (
            profile.vehicles.map((data) => (

              <Link key={data} href={`/page/vehicle/${data.split('/').filter(Boolean).pop()}`}   passHref>
                {/* {{data}} */}
              <SimpleCard data={data} />
             </Link>
            ))
          ) : (
            <Box color={'white'}>Loading...</Box>
          )}
        </Wrap>

     
    
  
  
</Container> 
<Container display={profile && profile.starships && profile.starships.length === 0 ? 'none' : 'block'} h={'100%'} maxW='85%' maxH={'70%'}  size={'lg'} mt={'20px'} bg={'black'}
  p={4} mb={6}
  >
   <Box fontSize={'45px'} borderBottom={'1px'} fontStyle={'oblique'} borderColor={'gray.200'} mb={'15px'}>
starships
</Box>
   



<Wrap justify='center'>
          {profile && profile.starships ? (
            profile.starships.map((data) => (

              <Link key={data} href={`/page/starship/${data.split('/').filter(Boolean).pop()}`}   passHref>
                {/* {{data}} */}
              <SimpleCard data={data} />
             </Link>
            ))
          ) : (
            <Box color={'white'}>Loading...</Box>
          )}
        </Wrap>
     
    
  
  
</Container> 
    
    </>
  )
}
