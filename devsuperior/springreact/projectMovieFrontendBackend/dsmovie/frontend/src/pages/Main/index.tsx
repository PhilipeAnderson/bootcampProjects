import styles from './styles.module.scss';

export function Main() {
  return(
    <section className={styles.container}>
      <h1>Welcome to our app!</h1>
      <a href="rate/1" >Filme 1</a>
      <a href="rate/2" >Filem 2</a>
      <a href="rate/3" >Filme 3</a>
    </section>
  )
}