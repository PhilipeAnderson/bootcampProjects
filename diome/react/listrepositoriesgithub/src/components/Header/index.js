import styles from './styles.module.scss';
import logoImg from '../../img/logo.png'

export function Header() {
  return(
    <header className={styles.container}>
      <nav className={styles.content}>
        <img src={logoImg} alt="Imagem do User" />
        <button>
          <a href="https://github.com">github</a>
        </button>
      </nav>
    </header>
    
  );
}