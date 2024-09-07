import Charprofile from '@/app/components/Charprofile'
import Vehicles from '@/app/components/Vehicles';
import Layout from '@/app/components/Layout'
import { useRouter } from 'next/router';
import React from 'react'

export default function vehicle() {
  const router = useRouter();
  const id= router.query.vehicle;
  console.log(id)
  return (
    <Layout>
       
        <Vehicles url={`https://swapi.dev/api/vehicles/${id}/`}/>

       
    </Layout>
  )
}
