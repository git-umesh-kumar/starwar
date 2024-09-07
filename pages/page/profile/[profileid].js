import Charprofile from '@/app/components/Charprofile'
import Layout from '@/app/components/Layout'
import { useRouter } from 'next/router';
import React from 'react'

export default function Profile() {
  const router = useRouter();
  const id= router.query.profileid;
  console.log(id)
  return (
    <Layout>
       <Charprofile url={`https://swapi.dev/api/people/${id}/`}/>

    </Layout>
  )
}
