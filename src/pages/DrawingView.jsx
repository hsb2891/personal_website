import React from 'react';
import { Box, Grid2, ImageList, Typography } from '@mui/material';
import { ImageListItem, ImageListItemBar } from '@mui/material';
import Final_Kavita from './images/Final_Kavita.png';
import StarrySky from './images/Starry_Sky.png';
import Cityscape from './images/Cityscape.png';

function DrawingView() {
  const itemData = [
    {
      img: Final_Kavita,
      title: 'Katara Reimagined'
    },
    {
      img: StarrySky,
      title: 'Starry Sky'
    },
    {
      img: Cityscape,
      title: 'Cityscape'
    }
  ]

  return (
    <>
      <Grid2 container justifyContent="center">
        <Grid2>
        </Grid2>
      </Grid2>
      {/* <Grid2 container justifyContent="center">
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
      </Grid2> */}
    </>
  );
}
export default DrawingView;