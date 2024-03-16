import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import ViewData from './Components/ViewData';
import { Route, Routes } from 'react-router-dom';
import AddData from './Components/AddData';
import EditData from './Components/EditData';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<ViewData/>}/>
        <Route path='/add' element={<AddData/>}/>
        <Route path='/edit' element={<EditData/>}/>

      </Routes>       
    </div>
  );
}

export default App;
