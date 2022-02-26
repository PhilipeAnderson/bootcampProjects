import Link from 'next/link';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';

import { Content } from './Content';
import { Container } from './styles';

export function Header() {
  return(
    <Container>
      <header>
        <nav>
          <Link href='/'>Início</Link>
          <Link href='/Reiki'>Reiki ?</Link>
          <Link href='/Contato'>Contato</Link>
        </nav>
        <section>
          <i><FaWhatsapp /></i>
          <i><FaFacebook /></i>
          <i><FaInstagram /></i>
        </section>
      </header>
      <Content />
    </Container>
  )
}
