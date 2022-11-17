import React from "react";
import Box from "@mui/material/Box";
import Lorem from "../Lorem";
import { Divider } from "@mui/material";

const Header = () => {
  return (
    <>
      <Box id="header">
        <br></br>
        <Box sx={{marginTop: {xs:"50px", md: "100px"}}}>Products</Box>
        <Lorem />
        <Lorem />
      </Box>
    </>
  );
};

export default Header;
