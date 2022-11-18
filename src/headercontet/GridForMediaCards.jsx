import React from "react";
import Grid from "@mui/material/Grid";
import MediaCardFirst from "./MediaCardFirst";
import MediaCardWindows from "./MediaCardWindows";

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
        {" "}
        </Grid>
        <Grid item xs={12} md={6}>
        {" "}
        </Grid>
      </Grid>
    </>
  );
};

export default GridForMediaCards;
