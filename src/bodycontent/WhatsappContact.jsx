import React from 'react'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import IconButton from "@mui/material/IconButton";

const WhatsappContact = () => {
  return (
    <>
     <IconButton
        href="https://www.facebook.com/profile.php?id=100063636700329"
        target="_blank"
      >
        <WhatsAppIcon
          sx={{ color: "#4267B2", fontSize: { xs: 50, md: 75 } }}
        />
      </IconButton>
    </>
  )
}

export default WhatsappContact