import React from 'react'
import { NextPageWithLayout } from '@/interfaces/layout'
import { MainLayout } from '@/components/layout'
import {
  HomeFeature,
  HomeHero,
  HomeBuiltOn,
  HomeTestimonial,
  HomeClients,
  HomeNewsLetter,
  HomePlayground,
} from '@/components/home'

const Home: NextPageWithLayout = () => {
  return (
    <>
      <HomeHero />
      <HomeBuiltOn />
      <HomeFeature />
      <HomeTestimonial />
      <HomePlayground />
      <HomeClients />
      <HomeNewsLetter />
    </>
  )
}

Home.getLayout = (page) => <MainLayout>{page}</MainLayout>

export default Home
