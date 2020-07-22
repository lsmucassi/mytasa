import React from 'react';
import logo from './logo.svg';
import './App.css';
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core/';
import MenuIcon from '@material-ui/icons/Menu';

function App() {
  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit">
            TASA
          </Typography>
        </Toolbar>
      </AppBar>
    </div>          
  );
}

export default App;
