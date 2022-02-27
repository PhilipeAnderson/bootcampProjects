import { Container } from './styles';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';

export function CallToAction() {
  return(
    <Container>
      <section>
        <article>
          <header>
            <h1>Siga-nos nas redes sociais</h1>
            <p>Faça parte da nossa comunidade</p>
          </header>
          <footer>
            <i><FaWhatsapp /></i>
            <i><FaFacebook /></i>
            <i><FaInstagram /></i>
          </footer>
        </article>
      </section>
    </Container>
  )
}