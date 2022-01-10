import styles from './styles.module.scss';
import { FaGithub } from 'react-icons/fa';
import logo from '../../img/logo.png';

export function Header() {
  return (
    <header className={styles.container}>
      <div className={styles.content}>
        <div>
          <img src={logo} alt="Logo do Projeto" />
        </div>
        <div className={styles.btnGithub}>
            <a target="_blank" rel="noreferrer" href="https://github.com/PhilipeAnderson/bootcampProjects/tree/main/devsuperior/springreact/projectMovieFrontendBackend/dsmovie">
              <FaGithub color="greenyellow" />
              Project in Github
            </a>
        </div>
      </div>
    </header>
  )
}