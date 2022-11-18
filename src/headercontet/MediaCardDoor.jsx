import React from 'react'
import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import door from "./door.jpg"

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const MediaCardDoor = () => {
  return (
    <Box
    sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
  >
    <Box>
      <Card sx={{ maxWidth: 450 }}>
        <CardMedia component="img" height="250" image={door} alt="door" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Puertas
          </Typography>
          <Typography variant="body2" color="text.secondary">
            All about your product.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quos voluptas incidunt natus quae iusto ratione iure consequuntur minus veritatis obcaecati hic rem excepturi, voluptates unde blanditiis id, eos soluta.
          </Typography>
        </CardContent>
      </Card>
    </Box>
  </Box>
  )
}

export default MediaCardDoor