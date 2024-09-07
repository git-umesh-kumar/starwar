import { Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Heading, IconButton, Image, Stack, Text } from '@chakra-ui/react'
import { color } from 'framer-motion';
import React, { useContext, useEffect, useState } from 'react'
import { FaRegHeart ,CiHeart,FaHeart } from "react-icons/fa";
import Datacontext from '../context/Datacontex';
import Link from 'next/link';
export default function FlimCard(props) {
  const [data, setdata] = useState("");
  const context=useContext(Datacontext)
  const {Filmsimg,CharImg}= context
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('filmfavorites')) || [];
    if (favorites.includes(props.data)) {
      setIsFavorite(true);
    }
  }, [props.data]);
  const handleFavoriteClick = () => {
    let favorites = JSON.parse(localStorage.getItem('filmfavorites')) || [];
    if (isFavorite) {
      favorites = favorites.filter(url => url !== props.data);
    } else {
      favorites.push(props.data);
    }
    localStorage.setItem('filmfavorites', JSON.stringify(favorites));
    setIsFavorite(!isFavorite);
  };

  useEffect(() => {
    const fetchCharacterData = async () => {
      
        try {
          const response = await fetch(props.data);
          const jsonData = await response.json();
          setdata(jsonData);
        } catch (error) {
          console.error('Error fetching character data:', error);
        }
      
    };

    fetchCharacterData();
  }, [props.data]);

  console.log(data)
  return (
    <>
    <Card   className='Card' bg={'rgba(0, 0, 0, 0.3)'} color={'white'} maxW='250px' minH={'400px'} minW={'200px'}  border={'2px'} borderColor={'black'}  _hover={{
        border:'2px solid white' ,transition:'1.5s'
    }}>
  <CardBody  position={'relative'}  m={1} p={1}>
  <IconButton
             onClick={handleFavoriteClick}
           position={'absolute'}
            variant="ghost"
            
            _hover={{ bg: "main.400",color:"red" }}
            
            color={isFavorite&&isFavorite ? 'red' : 'white'}
          >
            <FaHeart  size={'30px'}  />
            
          </IconButton>
          <Link key={props.data} href={`/page/films/${props.data.split('/').filter(Boolean).pop()}`}   passHref>
    <Image 
     
      src={`${Filmsimg[data.title]}`}
      borderRadius='lg'
      h={'350px'} w={'350px'} m={0}
    />
    
    <Stack mt='4' spacing='1' >
      <Heading size='s,'>{data==null?"":data.title}</Heading>
      <Heading as='h3' color={'gray'} size='sm'>
      episode no.:  {data==null?"":data.episode_id}
  </Heading>
      <Heading as='h3' color={'gray'} size='sm'>
     Release Date : {data==null?"":data.release_date}
  </Heading>
    
    </Stack></Link>
  </CardBody>

</Card>
    </>
  )
}
