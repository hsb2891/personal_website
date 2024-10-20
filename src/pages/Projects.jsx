import React from "react";
import { Grid2, Typography } from "@mui/material";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import ProjectsView from './ProjectsView';
import DrawingView from './DrawingView';
import AnimationView from "./AnimationView";

function Projects() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  }

  return (
    <Grid2 container justifyContent="center" columns={1} spacing={2} m={2} p={2}>
      <Grid2 display="flex" justifyContent="center" size={12}>
        <Typography variant="h2">Projects</Typography>
      </Grid2>
      <Grid2 display="flex" justifyContent="center">
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab label="Drawing" value={0} />
            <Tab label="Animation" value={1} />
            <Tab label="Technical" value={2} />
          </Tabs>
        </Box>
      </Grid2>
      {value === 0 &&
      (<Grid2 display="flex" justifyContent="center" size={12}>
        <DrawingView/>
      </Grid2>)}
      {value === 1 &&
      (<Grid2 display="flex" justifyContent="center" size={12}>
        <AnimationView/>
        {/* <ProjectsView type={value}/> */}
      </Grid2>)}
      {value === 2 &&
      (<Grid2 display="flex" justifyContent="center" size={12}>
        <Typography variant="h4">Tech tab under construction!</Typography>
      </Grid2>)}
    </Grid2>
  );
}

export default Projects;