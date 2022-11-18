import React from 'react'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import IconButton from "@mui/material/IconButton";
const LocationContact = () => {
  return (
    <>
    <IconButton href="https://goo.gl/maps/VS3Bj8RTGVvBHc2L8" target="_blank">
      <LocationOnOutlinedIcon sx={{ color: "#ff0000", fontSize: { xs: 50, md: 75 } }} />
    </IconButton>
  </>
  )
}

export default LocationContact