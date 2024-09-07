import FlimCard from '@/app/components/FlimCard';
import Layout from '@/app/components/Layout'
import Navbar from '@/app/components/Navbar'
import Peoplecard from '@/app/components/Peoplecard';
import { Box, Container, Wrap } from '@chakra-ui/react';

import React, { useEffect, useState } from 'react';

export default function Allfavchar() {


  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(storedFavorites);
  }, []);
  const [filmfavorites, filmsetFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('filmfavorites')) || [];
    filmsetFavorites(storedFavorites);
  }, []);
  return (
    <div>
      <Layout>
  <Box minH={'86vh'}>
      <Container  display={ favorites&& favorites.length === 0 ? 'none' : 'block'} h={'100%'} maxW='85%' maxH={'70%'}  size={'lg'} mt={'20px'} bg={'black'}
  
  >
<Box fontSize={'45px'} borderBottom={'1px'} fontStyle={'oblique'} borderColor={'gray.200'} mb={'15px'}>
All Favourite charcters 
</Box>
   



<Wrap justify='center'>
      {favorites && favorites ? (
        favorites.map((data) => (

          <Peoplecard  data={data} />
         
        ))
      ) : (
        <Box color={'white'}>Loading...</Box>
      )}
    </Wrap>


  
  
</Container> 
      <Container  display={ filmfavorites&& filmfavorites.length === 0 ? 'none' : 'block'} h={'100%'} maxW='85%' maxH={'70%'}  size={'lg'} mt={'20px'} bg={'black'}
  
  >
<Box fontSize={'45px'} borderBottom={'1px'} fontStyle={'oblique'} borderColor={'gray.200'} mb={'15px'}>
All Favourite Movies 
</Box>
   



<Wrap justify='center'>
      {filmfavorites && filmfavorites ? (
        filmfavorites.map((data) => (

          <FlimCard  data={data} />
         
        ))
      ) : (
        <Box color={'white'}>Loading...</Box>
      )}
    </Wrap>


  
  
</Container> 

</Box>
      </Layout>
    </div>
  )
}
