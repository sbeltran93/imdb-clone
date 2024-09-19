import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import MovieDetail from './pages/MovieDetail';
import Nav from './components/Navbar';


export default function App() {

  return (
    <div className='App'>
    <Nav/> 
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/movie/:id' element={<MovieDetail />} />
    </Routes>
    </div>
  );
}
  
