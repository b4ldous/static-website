import React from 'react'

import Box from "@mui/material/Box"
import IconFlexBox from '../bodycontent/IconFlexBox';

const Body = () => {
  return (
    <Box id='body'>
      <br></br>
      <Box sx={{marginTop: {xs:"50px", md: "100px"}, marginBottom: {xs: "50px", md: "100px"}}}>
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
          <Box><IconFlexBox/></Box>
    
   



      </Box>
        
        
    
    
    </Box>);


}

export default Body