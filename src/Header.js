import React, { useContext } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Link } from 'react-router-dom';
import Switch from '@mui/material/Switch';
import ThemeContext from './ThemeContext';
import Button from '@mui/material/Button';
import Menu from './Menu2';

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Menu/>
          <Button color='secondary'  component={Link} to="/mainPages">Главная</Button>
          <Button color='secondary' component={Link} to="/abouts">О сайте</Button>
          <Switch defaultChecked={theme === 'dark'} color="secondary" onClick={toggleTheme} />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;