import './App.css';
import useLocalStorage from 'use-local-storage';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Resume from './pages/Resume';
import Socials from './pages/Socials';
import Projects from './pages/Projects';
import Recipes from './pages/Recipes';
import MainAppMenu from './MainAppMenu';
import { Container } from '@mui/material';
import { Box } from '@mui/material';
import { Paper, Grid2 } from '@mui/material';

function App() {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  }

  return (
    <div className="app" data-theme={ theme }>
      <Box m={6} p={3}>
        <MainAppMenu/>
        <Paper elevation={1}>
          <Grid2 container>
            {/* TODO: fix the dark mode switch logic */}
            {/* <button onClick={switchTheme}>
              Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
            </button> */}
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/resume" element={<Resume/>}/>
              <Route path="/projects" element={<Projects/>}/>
              <Route path="/recipes" element={<Recipes/>}/>
              <Route path="/socials" element={<Socials/>}/>
            </Routes>
          </Grid2>
        </Paper>
      </Box>
    </div>
  );
}

export default App;
