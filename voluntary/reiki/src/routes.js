import { Routes, Route } from 'react-router-dom';

import { Home } from './pages/Home';
import { Reiki } from './pages/Reiki'

export function ManagerRoutes() {
  return(
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Reiki" element={<Reiki />} />
    </Routes>  
  )
}