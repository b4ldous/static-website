import React from 'react'
import Box from '@mui/material/Box'
import FacebookContact from './FacebookContact'
import WhatsappContact from './WhatsappContact'

const IconFlexBox = () => {
  return (
    <>
    <Box sx={{display: "flex", justifyContent: "center"}}>

        <Box>

            <Box sx={{display: "flex", flexDirection:{xs: "column", md: "row"}}}>

                <Box><FacebookContact/></Box>
                <Box><WhatsappContact/></Box>
                <Box>3</Box>
                <Box>4</Box>



            </Box>


        </Box>






    </Box>
    
    
    
    
    
    </>
  )
}

export default IconFlexBox