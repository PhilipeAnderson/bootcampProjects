import { useContext } from 'react';
import { InfoUserContext } from '../../InfoUserContext';



import styles from './styles.module.scss';
 
export function Header({ onHandleOpenModal }) {

  const data = useContext(InfoUserContext)

  return (
    <header className={styles.container}>
      <nav className={styles.content}>
        <img src={data.avatar_url} alt="Pic from user" />
        <div>
          <p>Seja Bem Vindo</p>
          <p>{data.name}</p>
        </div>
        <button onClick={onHandleOpenModal}>
          Put your username here!
        </button>
      </nav>
      
    </header>

  );
}