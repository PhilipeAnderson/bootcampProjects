import { useState, useEffect } from 'react';
import { api } from '../../services/api';


import styles from './styles.module.scss';

export function User() {

  const [infoEachRepo, setInfoEachRepo] = useState([])


  console.log(infoEachRepo);

  useEffect(() => {
    api.get(`https://api.github.com/users/PhilipeAnderson/repos`)
      .then(response => setInfoEachRepo(response.data))
  }, [])

  return (
    <main className={styles.container}>
      <h1>Repositórios</h1>
      {/* <p>{data.repos_url}</p> */}
      <section className={styles.content}>
        {infoEachRepo.map(repo => (
          <div key={repo.id}>
            <h3>{repo.name}</h3>
            <span>{repo.default_branch}</span>
            <p>{repo.description}</p>
          </div>
        ))}


      </section>
    </main>
  )
}