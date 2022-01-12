import styles from './styles.module.scss';
import { useState, useEffect } from 'react';
import { api } from '../../services/api';
 
export function Header() {

  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    api.get('https://api.github.com/users/PhilipeAnderson')
      .then(response => setRepositories(response.data))
    }, [])
    
    console.log(repositories)
  return (
    <header className={styles.container}>
      <nav className={styles.content}>
        <img src={repositories.avatar_url} alt="Pic from user" />
        <div>
          <p>Seja Bem Vindo</p>
          <p>{repositories.name}</p>
        </div>
        <button>
          <a href="https://github.com/PhilipeAnderson">github</a>
        </button>
      </nav>
    </header>

  );
}