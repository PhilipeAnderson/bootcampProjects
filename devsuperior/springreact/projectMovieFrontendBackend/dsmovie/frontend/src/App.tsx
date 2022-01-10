import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from '../src/components/Header'
import { Main } from './pages/Main';
import { Rate } from './pages/Rate';

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/rate" >
          <Route path=":movieId" element={<Rate />} />
        </Route>
      </Routes>
    </Router>
  );
}