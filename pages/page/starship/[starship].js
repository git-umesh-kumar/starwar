import Charprofile from '@/app/components/Charprofile'
import Starship from '@/app/components/Starship';
import Layout from '@/app/components/Layout'
import { useRouter } from 'next/router';
import React from 'react'

export default function vehicle() {
  const router = useRouter();
  const id= router.query.starship;
  console.log(id)
  return (
    <Layout>
       
        <Starship url={`https://swapi.dev/api/starships/${id}/`}/>

       
    </Layout>
  )
}
