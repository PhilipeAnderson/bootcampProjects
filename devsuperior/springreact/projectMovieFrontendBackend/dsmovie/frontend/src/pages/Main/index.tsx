import { Pagination } from '../../components/Pagination';
import styles from './styles.module.scss';

export function Main() {
  return(
    <section className={styles.container}>
      <h1>Welcome to our app!</h1>
      <Pagination />
      
    </section>
  )
}