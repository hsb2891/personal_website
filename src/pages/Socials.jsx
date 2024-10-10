import { Grid2, IconButton, Typography } from "@mui/material";
import React from "react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';

function Socials() {
  return (
    <div>
      <Grid2 container justifyContent="center" columns={1} spacing={2} m={2} p={2}>
        <Grid2 display="flex" justifyContent="center" size={12}>
          <Typography variant="h2">Connect with me!</Typography>
        </Grid2>
        <Grid2 display="flex" justifyContent="center">
          <IconButton
            aria-label="LinkedIn"
            href="https://www.linkedin.com/in/hiransb"
            target="_blank"
            rel="noopener"
          >
            <LinkedInIcon sx={{ fontSize: 60 }}/>
          </IconButton>
        </Grid2>
        <Grid2 display="flex" justifyContent="center">
          <IconButton
            aria-label="GitHub"
            href="https://github.com/hsb2891"
            target="_blank"
            rel="noopener"
          >
            <GitHubIcon sx={{ fontSize: 60 }}/>
          </IconButton>
        </Grid2>
        <Grid2 display="flex" justifyContent="center">
          <IconButton
            aria-label="YouTube"
            href="https://www.youtube.com/@gogreenhsb98"
            target="_blank"
            rel="noopener"
          >
            <YouTubeIcon sx={{ fontSize: 60 }}/>
          </IconButton>
        </Grid2>
      </Grid2>
    </div>
  );
}

export default Socials;