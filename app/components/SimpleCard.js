import { Button, Card, CardBody, CardFooter, CardHeader, Heading, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'

export default function SimpleCard(props) {

  const [data, setdata] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      
        try {
          const response = await fetch(props.data);
          const jsonData = await response.json();
          setdata(jsonData);
        } catch (error) {
          console.error('Error fetching character data:', error);
        }
      
    };

    fetchData();
  }, [props.data]);
  return (
    <Card bg={'rgba(0, 0, 0, 0.3)'} color={'white'} align='center' size={'sm'} minW={'250px'} maxW={'400px'} maxH={'100px'} border={'2px'} borderColor={'black'}
     className='Card'  _hover={{
        border:'2px solid white',transition:'1.5s'}} m={3} p={2} 
    >
    <CardHeader>
      <Heading size='md' m={0} p={0}> {data.name}</Heading>
    </CardHeader>
    <CardBody m={0} p={0}>
      <Text>{data.model||data.classification||"View More"}</Text>
    </CardBody>
    
  </Card>
  )
}
