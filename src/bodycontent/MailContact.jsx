import React from 'react'
import IconButton from "@mui/material/IconButton";
import MailOutlineRoundedIcon from '@mui/icons-material/MailOutlineRounded';

const MailContact = () => {
  return (
    <>
    <IconButton href={`mailto:aluminioresidencial13@outlook.com` } target="_top"
   rel="noopener noreferrer" >
      <MailOutlineRoundedIcon sx={{ color: "#000", fontSize: { xs: 50, md: 75 } }} />
    </IconButton>
  </>
  )
}

export default MailContact