import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import ThemeContext from './ThemeContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
const Menu = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <nav>
      <ButtonGroup
        variant="contained"
        aria-label="Basic button group"
      >
      <Button component={Link} to="/lab2">Лабораторная №2</Button>
      <Button component={Link} to="/lab4">Лабораторная №4</Button>
      <Button component={Link} to="/lab5">Лабораторная №5</Button>
      <Button component={Link} to="/lab6">Лабораторная №6</Button>

      </ButtonGroup>
    </nav>
  );
}

export default Menu;