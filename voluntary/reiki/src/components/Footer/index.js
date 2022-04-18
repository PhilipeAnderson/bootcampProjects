import styles from './styles.module.css';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';

export function Footer() {
  return(
    <main className={styles.container}>
      <section className={styles.content}>
        <article className={styles.netSocial}>
          <h1>Siga-nos nas redes sociais</h1>
          <p>Faça parte da nossa Comunidade !</p>
          <footer>
            <a target='_blank' href='https://wa.me/+554199878169'><i><FaWhatsapp /></i></a>
            <a target='_blank' href='https://www.facebook.com/Energia-Vital-Reiki-Online-105362712128597'><i><FaFacebook /></i></a>
            <a target='_blank' href='https://www.instagram.com/energiavitalreikionline/'><i><FaInstagram /></i></a>
          </footer>
        </article>
      </section>
    </main>
  )
}