
import { useState } from 'react';
import { InfoUserProvider } from './InfoUserContext';
import { Header } from './components/Header';
import { User } from './pages/User';
import { NewUserModal } from './components/NewUserModal';
import Modal from 'react-modal';


Modal.setAppElement('#root');

export default function App() {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isNewUser, setIsNewUser] = useState('')

  function handleOpenModal(){
    setIsModalOpen(true)
  }

  function handleCloseModal(){
    setIsModalOpen(false)
  }

  function newDataUser(data){
    setIsNewUser(data)
  }  

  return (
    <InfoUserProvider isNewUser={isNewUser}>
      <Header onHandleOpenModal={handleOpenModal}/>
      <User dataNewUser={isNewUser}/>
      <NewUserModal isOpen={isModalOpen} onRequestClose={handleCloseModal} onChangeUser={newDataUser}/>
    </InfoUserProvider>
  );
}
