import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Card from './pages/Card';
import About from './pages/About';
import Listes from './pages/Listes';





export default function App() {
  return (
   
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Card' element={<Card />} />
        <Route path='/Listes' element={<Listes />} />
        <Route path='/About' element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}