import React, { useRef, useEffect } from "react";
import { Grid2, Typography } from "@mui/material";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
// import ProjectsView from './ProjectsView';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import axios from 'axios';

// TODO: fix this using backend!
function ProjectsView({ type }) {
  const images = useRef([]);

  const fetchProjects = async () => {
    const response = await axios.get('http://localhost:3001/projects');
    console.log(response);
  }

  fetchProjects();

  useEffect(() => {
    // Use the current value of the array reference
    const imgs = images.current;

    switch (type) {
      case 0: // Technical
        break;
      case 1: // Drawing
        imgs.push(
          {
            img: 'src/pages/images/Final_Kavita.png',
            title: 'Katara Reimagined'
          }
        );
      case 2: // Animation
        break;
      case 3: // Photography
        break;
      default: // Nothing
        break;
    }
  }, [type]);

  console.log(images);

  return (
    <Grid2 container justifyContent="center" columns={1} spacing={2} m={2} p={2}>
      <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
      {images.current.map((item) => (
        <ImageListItem key={item.img}>
          <img
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
      {/* <Grid2 display="flex" justifyContent="center" size={12}>
        <Typography variant="h2">Projects</Typography>
      </Grid2> */}
    </Grid2>
  );
}

export default ProjectsView;