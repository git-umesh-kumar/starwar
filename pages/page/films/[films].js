import Charprofile from '@/app/components/Charprofile'
import Flimprofile from '@/app/components/Flimprofile';
import Layout from '@/app/components/Layout'
import { useRouter } from 'next/router';
import React from 'react'

export default function films() {
  const router = useRouter();
  const id= router.query.films;
  console.log(id)
  return (
    <Layout>
       
        <Flimprofile url={`https://swapi.dev/api/films/${id}/`}/>

       
    </Layout>
  )
}
