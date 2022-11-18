import React from "react";
import Grid from "@mui/material/Grid";
import MediaCardFirst from "./MediaCardFirst";
import MediaCardWindows from "./MediaCardWindows";
import MediaCardDoor from "./MediaCardDoor";
import MediaCardPorton from "./MediaCardPorton";

const GridForMediaCards = () => {
  return (
    <>
     
      <Grid container rowSpacing={10}>
        <Grid item xs={12} md={6}>
          {" "}
          <MediaCardFirst />{" "}
        </Grid>
        <Grid item xs={12} md={6}>
          <MediaCardWindows/>
          {" "}
        </Grid>
        <Grid item xs={12} md={6}>
          <MediaCardDoor/>
        {" "}
        </Grid>
        <Grid item xs={12} md={6}>
          <MediaCardPorton/>
        {" "}
        </Grid>
      </Grid>
    </>
  );
};

export default GridForMediaCards;
