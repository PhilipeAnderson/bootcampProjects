import { BrowserRouter as Router } from 'react-router-dom';
import { ManagerRoutes } from './routes';


function App() {
  return (
    <Router>
      <ManagerRoutes />
    </Router>
  );
}

export default App;
