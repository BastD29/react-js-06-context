import React, { useState } from 'react';
import FunctionContextComponent from './components/FunctionContextComponent';
import './App.css';

export const ThemeContext = React.createContext();

function App() {
  const [darkTheme, setDarkTheme] = useState(true);

  function toggleTheme(){
    setDarkTheme(prevDarkTheme => !prevDarkTheme)
  }

  return (
    <>
      <ThemeContext.Provider value={darkTheme}>
        <button onClick={toggleTheme}>Toggle theme</button>
        <FunctionContextComponent />
      </ThemeContext.Provider>
    </>
  );
}

export default App;
