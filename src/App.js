import './App.css';
import {Routes,Route} from 'react-router-dom'
import {useContext} from 'react'
import NavBar from './ components/NavBar';

function App() {
  return (
    <div>
      <NavBar />
      <h1>Howdy</h1>
    </div>
  );
}

export default App;
