import { Box, Typography } from "@mui/material";
import React from "react";
import image from "../image/alum.jpg";


const Main = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${image})`,
        height: "100vh",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Box
        sx={{
          height: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            padding: "20px",
            background: "rgba(0, 0, 0, .5)",
            width: {xs: .75, md: .5},
            borderRadius: "5px",
          }}
        >
          <Box>
            <Typography
              variant="h4"
              sx={{ color: "white", fontWeight: 1000 }}
              align="center"
            >
              Aluminio Residencial y Portones Automáticos
            </Typography>
          </Box>
          
        </Box>
      </Box>
    </Box>
  );
};

export default Main;
