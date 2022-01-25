
import { useState } from 'react';
import { InfoUserProvider } from './InfoUserContext';
import { Header } from './components/Header';
import { User } from './pages/User';
import { NewUserModal } from './components/NewUserModal';
import Modal from 'react-modal';


Modal.setAppElement('#root');

export default function App() {

  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleOpenModal(){
    setIsModalOpen(true)
  }

  function handleCloseModal(){
    setIsModalOpen(false)
  }
  

  return (
    <InfoUserProvider>
      <Header onHandleOpenModal={handleOpenModal}/>
      <User />
      <NewUserModal isOpen={isModalOpen} onRequestClose={handleCloseModal}/>
    </InfoUserProvider>
  );
}
