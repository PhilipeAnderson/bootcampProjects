import { useContext } from 'react';
import { InfoUserContext } from '../../InfoUserContext';

import styles from './styles.module.scss';

export function User() {

  const data = useContext(InfoUserContext)

  return(
    <main className={styles.container}>
      <section className={styles.content}>
        <h1>Repositórios</h1>
        <p>{data.repos_url}</p>
      </section>
    </main>
  )
}