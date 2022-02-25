
import { Content } from '../Content';
import { Container } from './styles';

export function Header() {
  return(
    <Container>
      <header>
        <nav>
          <a>Início</a>
          <a>Reiki ?</a>
          <a>Depoimentos</a>
          <a>Parceiros</a>
          <a>Contato</a>
        </nav>
      </header>
      <Content />
    </Container>
  )
}
