import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import ArticleIcon from '@mui/icons-material/Article';
import ShareIcon from '@mui/icons-material/Share';
import { ButtonGroup, Button, SpeedDial, Grid } from '@mui/material';
import { SpeedDialAction } from '@mui/material';
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import { useNavigate } from "react-router-dom";
import { Grid2 } from '@mui/material';

function MainAppMenu(darkTheme) {
  const actions = [
    { icon: <HomeIcon/>, name: '' },
    { icon: <ArticleIcon/>, name: 'Resume' },
    { icon: <ColorLensIcon/>, name: 'Projects' },
    // { icon: <LocalDiningIcon/>, name: 'Recipes' },
    { icon: <ShareIcon/>, name: 'Socials' },
  ];
  
  let navigate = useNavigate();
  const reroute = (path) => {
    navigate('/#/' + path);
  }

  return (
    <Grid2 alignItems="center">
      <ButtonGroup color={darkTheme ? '#FFFFFF' : '#000000'} variant="text" aria-label="Main menu">
        {actions.map((action) => (
          <Button key={action.name} onClick={e => {
            reroute(action.name.toLowerCase());
          }}>
            {action.icon}
          </Button>
        ))}
      </ButtonGroup>
    </Grid2>
  );
}

export default MainAppMenu;