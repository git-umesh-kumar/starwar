
import Layout from '@/app/components/Layout'
import Species from '@/app/components/Species';
import { useRouter } from 'next/router';
import React from 'react'

export default function species() {
  const router = useRouter();
  const id= router.query.species;
  console.log(id)
  return (
    <Layout>
       
        <Species url={`https://swapi.dev/api/species/${id}/`}/>

       
    </Layout>
  )
}
