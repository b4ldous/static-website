import { Box } from '@mui/material'
import React from 'react'
import Lorem from '../Lorem'

const Footer = () => {
  return (
    <>
    <Box id='footer'>
      <br></br>
      <Box sx={{marginTop: {xs:"50px", md: "100px"}}}>
      <Box
            sx={{
              typography: "h3",
              textAlign: "center",
              fontWeight: 1000,
              marginBottom: "100px",
            }}
          >
            Contacto
          </Box>
          <Box>Aqui va Contacto</Box>
    
   

      </Box>
     
    
    </Box>
    
    </>
    
  )
}

export default Footer