import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import ArticleIcon from '@mui/icons-material/Article';
import ShareIcon from '@mui/icons-material/Share';
import { SpeedDial } from '@mui/material';
import { SpeedDialAction } from '@mui/material';
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import { useNavigate } from "react-router-dom";

function MainAppMenu() {
  const actions = [
    { icon: <HomeIcon />, name: '' },
    { icon: <ArticleIcon />, name: 'Resume' },
    { icon: <ColorLensIcon />, name: 'Projects' },
    { icon: <LocalDiningIcon />, name: 'Recipes' },
    { icon: <ShareIcon />, name: 'Socials' },
  ];
  
  let navigate = useNavigate();
  const reroute = (path) => {
    navigate('/' + path);
  }

  return (
    
    <SpeedDial
      ariaLabel="main menu"
      direction="right"
      icon={<LocalFloristIcon/>}
    >
      {actions.map((action) => (
        <SpeedDialAction
          key={action.name}
          icon={action.icon}
          tooltipTitle={action.name}
          onClick={e => {
            reroute(action.name.toLowerCase());
          }}
        />
      ))}
    </SpeedDial>
  );
}

export default MainAppMenu;