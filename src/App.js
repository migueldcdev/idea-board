
import Header from './components/Header';
import Box from './components/Box'; 
import Button from './components/Button';

import ContextProvider from './context/contextProvider'

import './App.css';

const App = () => {
  return (
    <ContextProvider>

      <div className="App">        
        <Header />      
        <Box />
        <Button />
      </div>

    </ContextProvider>
  );
}

export default App
