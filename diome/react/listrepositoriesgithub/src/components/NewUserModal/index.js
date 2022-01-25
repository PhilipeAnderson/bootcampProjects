import { useState } from 'react';
import Modal from 'react-modal';
import { AiOutlineClose } from 'react-icons/ai';

export function NewUserModal({ isOpen, onRequestClose, onChangeUser }) {

  const [user, setUser] = useState('')

  function sendUser(e) {
    e.preventDefault()
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
        <form onSubmit={sendUser}>
          <input type="text" value={user} onChange={(e) => setUser(e.target.value)} placeholder="Enter your username here!" />
          <button type="submit">Search</button>
        </form>
      </section>
    </Modal>
 
  )
}