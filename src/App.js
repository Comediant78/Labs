import React from 'react';
import { ThemeProvider } from './ThemeContext';
import Main from './Main';
import store from './redux/store';
import { Provider } from 'react-redux';
function App() {
  return (
    <div>
      <Provider store={store}>
      <ThemeProvider>
      <Main />
      </ThemeProvider>
      </Provider>
    </div>    
  );
}

export default App;
