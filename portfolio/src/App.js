import logo from './logo.svg';
import {HashRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import {Main} from './components/MainPage.js';
import {About} from './components/AboutPage.js';
function App() {
  return (
    <div className="App">
      <Main/>
      <About/>
    </div>
  );
}

export default App;
