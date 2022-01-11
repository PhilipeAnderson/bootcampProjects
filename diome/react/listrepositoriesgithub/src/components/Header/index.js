import styles from './styles.module.scss';
import { useState, useEffect } from 'react';

export function Header() {

  const [repositories, setRepositories] = useState([]);

  useEffect(async () => {
    const response = await fetch('https://api.github.com/users/PhilipeAnderson')
    const data = await response.json()

    setRepositories(data)
  })

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