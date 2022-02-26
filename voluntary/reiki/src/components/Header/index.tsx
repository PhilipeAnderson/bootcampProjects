import Link from 'next/link';

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
      </header>
      <Content />
    </Container>
  )
}
