import React from "react";
import Box from "@mui/material/Box";

import GridForMediaCards from "../headercontet/GridForMediaCards";

const Header = () => {
  return (
    <>
      <Box id="header">
        <br></br>
        <Box sx={{ marginTop: { xs: "50px", md: "100px" } }}>
          <Box
            sx={{
              typography: "h3",
              textAlign: "center",
              fontWeight: 1000,
              marginBottom: "100px",
            }}
          >
            Productos
          </Box>
          <Box>
            <GridForMediaCards />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Header;
