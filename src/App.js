import React from 'react';
import './App.css';
import ProviderError from './Provider/provider';
import Routes from './routes';

function App() {
  return (
    <ProviderError>
        <Routes />
     </ProviderError >    
  );
}

export default App;
