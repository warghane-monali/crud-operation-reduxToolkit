import logo from './logo.svg';
import './App.css';
import {Route,BrowserRouter,Router, Routes, useParams} from 'react-router-dom'
import Navbar from './components/Navbar';
import { Create } from './components/Create';
import { Read } from './components/Read';
import { Update } from './components/Update';

function App() {
  const {id} = useParams()
  return (
   <BrowserRouter>
   <Navbar/>
    <Routes>
      <Route path='/' element={<Create/>}/>
      <Route path='/read' element={<Read/>}/>
      <Route  path='/edit/:id' element={<Update/>}/>
    </Routes>
   </BrowserRouter>
  );
}

export default App;
