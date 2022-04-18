import { Link } from 'react-router-dom';
import styles from './styles.module.css';
import Lotus from '../../assets/lotus.png';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';

export function Header() {
  return (
    <header className={styles.container}>
      <main className={styles.content}>
        <nav>
          <ul className={styles.menu}>
            <li><Link className={styles.textMenu} to="/">Início</Link></li>
            <li><Link className={styles.textMenu} to="/Reiki">Reiki</Link></li>
          </ul>
        </nav>
        <div>
          <ul className={styles.socialNet}>
            <li className={styles.icons}>
              <a target="_blank" href='https://www.instagram.com/energiavitalreikionline/'>
                <FaInstagram />
              </a>
            </li>
            <li className={styles.icons}>
              <a target="_blank" href='https://www.facebook.com/Energia-Vital-Reiki-Online-105362712128597'>
                <FaFacebook />
              </a>
            </li>
            <li className={styles.icons}>
              <a target="_blank" href='https://wa.me/+554199878169'>
                <FaWhatsapp />
              </a>
            </li>
          </ul>
        </div>
      </main>
      <section className={styles.bodyHeader}>
        <h1 className={styles.textBody}>
          O Reiki é uma ferramenta natural que pode ser usada 
          para nos ajudar a lidar com as tensões da vida cotidiana.
        </h1>
        <img className={styles.lotus} src={Lotus} alt="Flor de Lotus" />
      </section>
    </header>
  )
}