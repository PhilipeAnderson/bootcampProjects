import { Header } from './components/Header';
import { InfoUserProvider } from './InfoUserContext';
import { User } from './pages/User';


export default function App() {
  return (
    <InfoUserProvider>
      <Header />
      <User />
    </InfoUserProvider>
  );
}
