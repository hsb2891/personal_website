import React from 'react';
import { Box, Grid2, ImageList, Typography } from '@mui/material';
import { ImageListItem, ImageListItemBar } from '@mui/material';
import Chicken_Or_Egg from './images/Chicken_Or_Egg.gif';
import SlideHelloWorld from './images/Slide_Hello_World.gif';
import InfiniteKite from './images/Infinite_Kite.gif';

function AnimationView() {
  const itemData = [
    {
      img: SlideHelloWorld,
      title: 'Hello World'
    },
    {
      img: Chicken_Or_Egg,
      title: 'Which Came First?'
    },
    {
      img: InfiniteKite,
      title: 'Infinite Kite'
    }
  ]

  return (
    <>
      <Grid2 container justifyContent="center">
        <Grid2>
          <ImageList sx={{ width: 1000 }} cols={2}>
            {itemData.map((item) => (
              <ImageListItem key={item.title}>
                <img
                  setSrc={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  src={`${item.img}?w=248&fit=crop&auto=format`}
                  alt={item.title}
                  loading="lazy"
                  width={500}
                  height={500}
                />
                <ImageListItemBar
                  title={item.title}
                  subtitle={<span>@hirxn.mxyee</span>}
                  position="below"
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Grid2>
      </Grid2>
    </>
  );
}
export default AnimationView;