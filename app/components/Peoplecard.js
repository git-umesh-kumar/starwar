import { Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Heading, IconButton, Image, Stack, Text } from '@chakra-ui/react'

import Link from 'next/link';
import React, { useContext, useEffect, useState } from 'react'
import { FaRegHeart ,CiHeart,FaHeart } from "react-icons/fa";
import Datacontext from '../context/Datacontex';

export default function Peoplecard(props) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [data, setdata] = useState("");

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
    setIsFavorite(false)
 fetchCharacterData();
  }, [props.data]);
   




  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || "";
    if (favorites.includes(props.data)) {
      setIsFavorite(true);
    }
  }, [props.data]);
  const handleFavoriteClick = () => {
    let favorites = JSON.parse(localStorage.getItem('favorites')) ||"";
    if (isFavorite) {
      favorites = favorites.filter(url => url !== props.data);
    } else {
      console.log(props.data)
      console.log(favorites)
      favorites.push(props.data);
    }
    // console.log("adi")
    console.log(props.data)
    console.log(favorites)
    // console.log("adikkkk")
    localStorage.setItem('favorites', JSON.stringify(favorites));
    setIsFavorite(!isFavorite);
  };





  const context=useContext(Datacontext)
  const {CharImg}= context
  const getRandomKey = (obj) => {
    const keys = Object.keys(obj);
    const randomIndex = Math.floor(Math.random() * keys.length);
    return keys[randomIndex];
  };
  
  const randomKey = getRandomKey(CharImg);

  return (
    <>
    <Card   className='Card' bg={'rgba(0, 0, 0, 0.3)'}  color={'white'}maxW='300px' minW={'200px'} maxH={'sm'} border={'2px'} borderColor={'black'} _hover={{
        border:'2px solid white' ,transition:'1.5s'
    }}>
  <CardBody  position={'relative'} >
       <IconButton
            onClick={handleFavoriteClick}
           position={'absolute'}
            variant="ghost"
            color={isFavorite ? 'red' : 'white'}
            _hover={{ bg: "main.400",color:"red" }}
            
       
          >

            <FaHeart  size={'30px'}  />
            
          </IconButton>
          {console.log("page  "+isFavorite)}
          <Link key={props.data} href={`/page/profile/${data==null?"":(props.data).split('/').filter(Boolean).pop()}`}   passHref>
         
    <Image
          src={`${CharImg[data.name]||CharImg[randomKey]}`}
      
      alt=''
      borderRadius='lg'
    />
    
    <Stack mt='4' spacing='3'>
      <Heading size='md'>{data==null?"":data.name}</Heading>
      <Heading as='h3' size='sm'>
     Gender :  {data==null?"":data.gender}
  </Heading>
      <Heading as='h3' size='sm'>
     Birth Date : {data==null?"":data.birth_year}
  </Heading>
    
    </Stack>
    
</Link>


  </CardBody>
  
</Card>
    </>
  )
}
