import React from "react";
import { Grid2, Paper, Typography } from "@mui/material";
import { Container } from "@mui/material";
import hi from "./images/sample.gif";

function Home() {
  return (
    <>
      <Grid2 container spacing={2} m={2} p={2}>
        <Grid2 item>
          <Typography variant="h1">Welcome!</Typography>
          <img src={hi} alt="loading..." />
        </Grid2>
      </Grid2>
    </>
  );
}

export default Home;