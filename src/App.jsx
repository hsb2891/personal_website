import './App.css';
import useLocalStorage from 'use-local-storage';
import React from 'react';
import { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Resume from './pages/Resume';
import Socials from './pages/Socials';
import Projects from './pages/Projects';
import Recipes from './pages/Recipes';
import MainAppMenu from './MainAppMenu';
import { Container, Tooltip } from '@mui/material';
import { Box } from '@mui/material';
import { Paper, Grid2 } from '@mui/material';
import { Button } from '@mui/material';
import { Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material';
import { DarkMode } from '@mui/icons-material';
import { LightMode } from '@mui/icons-material';

function App() {
  const [darkTheme, setDarkTheme] = useState(true);

  const toggleTheme = () => {
    let val = !darkTheme;
    setDarkTheme(val);
  };

  const theme = createTheme({
    typography: {
      fontFamily: '"Playfair Display", cursive',
    },
    palette: {
      mode: darkTheme ? 'dark' : 'light',
    },
  });

  const themeStyles = {
    backgroundColor: darkTheme ? '#000000' : '#FFFFFF',
    color: darkTheme ? '#FFFFFF' : '#000000',
    transition: 'all 0.5s',
    minHeight: '100vh',
    padding: '20px',
  };

  return (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <ThemeProvider theme={theme}>
        <Router>
          <div style={themeStyles}>
            <Box align='right'>
              <Tooltip title={`Switch to ${darkTheme ? 'Light' : 'Dark'} Mode`}>
                <Button
                  startIcon={darkTheme ? <LightMode/> : <DarkMode/>}
                  color={darkTheme ? '#FFFFFF' : '#000000'}
                  onClick={toggleTheme}
                  sx={{ marginTop: '20px' }}
                />
              </Tooltip>
            </Box>
            <Box align='center'>
              <MainAppMenu darkTheme={darkTheme}/>
            </Box>
            <Grid2 container spacing={0} direction="column" alignItems="center" justifyContent="center">
              <Grid2 item>
                <Routes>
                  <Route path="/" element={<Home darkTheme={darkTheme}/>}/>
                  <Route path="/resume" element={<Resume/>}/>
                  <Route path="/projects" element={<Projects/>}/>
                  {/* <Route path="/recipes" element={<Recipes/>}/> */}
                  <Route path="/socials" element={<Socials/>}/>
                </Routes>
              </Grid2>
            </Grid2>
            <Box sx={{ textAlign: 'center' }}>
              <Typography variant="body2">
                © 2024 Hiranmayee's Website
              </Typography>
            </Box>
          </div>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
