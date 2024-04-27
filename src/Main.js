import * as React from 'react';
import ThemeContext from './ThemeContext';
import { useContext } from 'react';
import Footer from './Footer';
import Header from './Header'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Lab2 from './labs/lab2/lab2';
import Lab4 from './labs/lab4/lab4';
import Lab5 from './labs/lab5/lab5';
import Lab6 from './labs/lab6/lab6';
import MainPages from './mainPages';
import AboutMePage from './abouts';
export default function Main() { 
    const { theme, toggleTheme } = useContext(ThemeContext);  
      return (
        <div className={theme === 'light' ? 'light-theme' :'dark-theme' }>
          <Router>
          <Header/>
                <Routes>
                  <Route path="/lab2"element={<Lab2 />}/>
                  <Route path="/lab4"element={<Lab4 />}/>
                  <Route path="/lab5"element={<Lab5 />}/>
                  <Route path="/lab6"element={<Lab6 />}/>
                  <Route path="/mainPages"element={<MainPages />}/>
                  <Route path="/abouts"element={<AboutMePage />}/>
                </Routes>
          </Router>
    <Footer />
       </div>
    );
    }

