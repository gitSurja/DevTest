import { Box, Container } from '@mui/material'
import React from 'react'
import HeroSection from './Home/HeroSection'



function Home() {
  return (
    <Container maxWidth={'xl'}>
      <HeroSection />
    </Container>
  )
}

export default Home