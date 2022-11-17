import { Box } from '@mui/material'
import React from 'react'
import image from '../image/alum.jpg'


const Main = () => {
  return (
    <div style={{ backgroundImage: `url(${image})`, height: "100vh", width: "100vw",  backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat' }}>
        <Box sx={{ height: 1, display: "flex", justifyContent: "center", alignItems: "center"}}>
            <Box>
                hello
            </Box>


        </Box>



    </div>
  )
}

export default Main