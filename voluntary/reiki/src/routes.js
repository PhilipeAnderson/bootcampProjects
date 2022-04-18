import { Routes, Route } from 'react-router-dom';

import { Home } from './pages';
import { Reiki } from './pages/reiki'

export function ManagerRoutes() {
  return(
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/reiki" element={<Reiki />} />
    </Routes>  
  )
}