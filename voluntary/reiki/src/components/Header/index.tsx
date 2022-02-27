import Link from 'next/link';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';

import { Content } from './Content';
import { Container } from './styles';

export function Header() {
  return(
    <Container>
      <header>
        <nav>
          <Link href='/'>Home</Link>
          <Link href='/Reiki'>Sobre o Reiki</Link>
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
