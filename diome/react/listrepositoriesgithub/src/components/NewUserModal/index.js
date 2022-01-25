import { useState } from 'react';
import Modal from 'react-modal';
import { AiOutlineClose } from 'react-icons/ai';

export function NewUserModal({ isOpen, onRequestClose, onChangeUser }) {

  const [user, setUser] = useState('')


  //Fecha o modal e passa um valor para o App.js
  //A variável user está sendo alimentada pelo onChange do input
  function sendUser() {
    onChangeUser(user)
    setUser('')
    onRequestClose(onRequestClose)
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="modalOverlay"
      className="modalContent"
    >

      <section>
        <div>
          <h2>Enter Your user from GitHub</h2>
          <span onClick={onRequestClose}><AiOutlineClose color="#d6d6d6"/></span>
        </div>
        <input type="text" value={user} onChange={(e) => setUser(e.target.value)} placeholder="Enter your username here!" />
        <button onClick={sendUser}>Search</button>
      </section>
    </Modal>
 
  )
}