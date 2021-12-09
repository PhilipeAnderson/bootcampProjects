import { Container } from './styles'


export function TransactionTable(){
  return(
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Desenvolvimento</td>
            <td className="deposit">R$:120,00</td>
            <td>Empresa</td>
            <td>21/12/2021</td>
          </tr>
          <tr>
            <td>Lanche</td>
            <td className="withdraw">-R$:12,00</td>
            <td>Comida</td>
            <td>22/12/2021</td>
          </tr>
        </tbody>
      </table>

    </Container>
  )
}