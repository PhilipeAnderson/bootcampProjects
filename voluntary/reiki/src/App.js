import { BrowserRouter as Router } from 'react-router-dom';
import { ManagerRoutes } from './routes';

import './App.css';


function App() {
  return (
    <Router>
      <ManagerRoutes />
    </Router>
  );
}

export default App;
