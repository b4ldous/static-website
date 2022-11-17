import { Box } from '@mui/material'
import React from 'react'
import Body from './sections/Body'
import Footer from './sections/Footer'
import Header from './sections/Header'

const WelcomePage = () => {
  return (
    <Box>
        <Header/>
        <Body/>
        <Footer/>
    </Box>
  )
}

export default WelcomePage