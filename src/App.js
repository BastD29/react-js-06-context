import FunctionContextComponent from './components/FunctionContextComponent';
import { ThemeProvider } from './context/ThemeContext';
import './App.css';

function App() {

  return (
      <ThemeProvider>
        <FunctionContextComponent />
      </ThemeProvider>
  );
}

export default App;
