import React from 'react'
import Box from '@mui/material/Box'
import FacebookContact from './FacebookContact'
import WhatsappContact from './WhatsappContact'
import MailContact from './MailContact'
import LocationContact from './LocationContact'

const IconFlexBox = () => {
  return (
    <>
    <Box sx={{display: "flex", justifyContent: "center"}}>

        <Box>

            <Box sx={{display: "flex", flexDirection:{xs: "column", md: "row"}}}>

                <Box><FacebookContact/></Box>
                <Box><WhatsappContact/></Box>
                <Box><MailContact/></Box>
                <Box><LocationContact/></Box>



            </Box>


        </Box>






    </Box>
    
    
    
    
    
    </>
  )
}

export default IconFlexBox