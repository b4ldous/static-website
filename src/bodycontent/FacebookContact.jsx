import React from "react";
import IconButton from "@mui/material/IconButton";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";

const FacebookContact = () => {
  return (
    <>
      <IconButton
        href="https://www.facebook.com/profile.php?id=100063636700329"
        target="_blank"
      >
        <FacebookRoundedIcon
          sx={{ color: "#4267B2", fontSize: { xs: 50, md: 75 } }}
        />
      </IconButton>
    </>
  );
};

export default FacebookContact;
