import './App.css';
import {Routes,Route} from 'react-router-dom'
import {useContext} from 'react'
import { AuthContext } from './contexts/auth.contexts';
import NavBar from './ components/NavBar';
import HomePage from './pages/HomePage'
import ReadPage from './pages/ReadPage';
import CreatePage from './pages/CreatePage';
import UpdatePage from './pages/UpdatePage';
import DeletePage from './pages/DeletePage';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  const {message, isLoading} = useContext(AuthContext)
  return (
    <div>
      <NavBar />
      <h1>Howdy</h1>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/read' element={<ReadPage />} />
        <Route path='/create' element={<CreatePage />} />
        <Route path='/update' element={<UpdatePage />} />
        <Route path='/delete' element={<DeletePage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
      {message && <p>{message}</p>}
      {isLoading && <p>Loading...</p>}
    </div>
  );
}

export default App;
