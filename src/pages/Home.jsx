import React from "react";
import { Grid2, Paper, Typography } from "@mui/material";
import { Container } from "@mui/material";
import whiteLogo from "./images/Final_White.png";
import blackLogo from "./images/Final_Black.png";

function Home({ darkTheme }) {
  return (
    <>
      <Grid2 container spacing={2} m={2} p={2}>
        <Grid2 item>
          { darkTheme ? (
            <img src={whiteLogo} width={250} height={250} alt="loading..." /> )
            : (
            <img src={blackLogo} width={250} height={250} alt="loading..." />
          )}
        </Grid2>
      </Grid2>
    </>
  );
}

export default Home;