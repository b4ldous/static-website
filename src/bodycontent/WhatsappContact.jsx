import React from "react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import IconButton from "@mui/material/IconButton";

const WhatsappContact = () => {
  return (
    <>
      <IconButton href="https://wa.link/c7bbti" target="_blank">
        <WhatsAppIcon sx={{ color: "#25d366", fontSize: { xs: 50, md: 75 } }} />
      </IconButton>
    </>
  );
};

export default WhatsappContact;
