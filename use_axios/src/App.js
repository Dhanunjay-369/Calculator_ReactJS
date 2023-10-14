import './App.css';
import React from 'react';
// import '../node_modules/bootstrap@5.0.2/dist/css/bootstrap.min.css';
import Data from './components/axios.js';

function App() {
  return (
    <div className='bg-dark container-fluid'>
      <Data />
    </div>
  );
}

export default App;
