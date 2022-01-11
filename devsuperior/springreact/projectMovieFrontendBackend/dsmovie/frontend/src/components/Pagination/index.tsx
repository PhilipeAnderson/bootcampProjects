import styles from './styles.module.scss';
import { FaArrowLeft } from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa';


export function Pagination() {
  return(
    <div className={styles.container}>
      <FaArrowLeft />
      <p>Avaliar</p>
      {/* {`${1} de ${3}`} */}
      <FaArrowRight />
    </div>
  )
}