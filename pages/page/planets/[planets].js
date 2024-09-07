import Charprofile from '@/app/components/Charprofile'
import Flimprofile from '@/app/components/Flimprofile';
import Layout from '@/app/components/Layout'
import PlanetsProfile from '@/app/components/PlanetsProfile';
import { useRouter } from 'next/router';
import React from 'react'

export default function planets() {
  const router = useRouter();
  const id= router.query.planets;
  console.log(id)
  return (
    <Layout>
       
        <PlanetsProfile url={`https://swapi.dev/api/planets/${id}/`}/>

       
    </Layout>
  )
}
