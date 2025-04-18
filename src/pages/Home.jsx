import React from "react";
import { Grid2 } from "@mui/material";
import whiteLogo from "./images/Final_White.png";
import blackLogo from "./images/Final_Black.png";

function Home({ darkTheme }) {
  return (
    <>
      <Grid2 container justifyContent="center" alignItems="center" spacing={2} m={2} p={2} columns={2}>
        <Grid2 item>
          { darkTheme ? (
            <img src={whiteLogo} width={300} height={300} alt="loading..." /> )
            : (
            <img src={blackLogo} width={300} height={300} alt="loading..." />
          )}
        </Grid2>
      </Grid2>
    </>
  );
}

export default Home;