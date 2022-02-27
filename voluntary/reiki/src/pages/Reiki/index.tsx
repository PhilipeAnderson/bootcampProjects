import Link from 'next/link';
import { CallToAction } from '../../components/CallToAction';

import { Container } from './styles';

export default function Reiki() {
  return(
    <>
      <Container>
        <main>
          <h1>O que é o Reiki</h1>
          <br />
          <p>
            &nbsp;&nbsp;&nbsp; O Reiki é uma técnica criada no Japão que consiste na imposição 
            de mãos para transferência de energia, pois acredita-se que 
            desta forma é possível alinhar centros de energia do corpo, 
            conhecidos como chakras, promovendo o equilíbrio energético, 
            necessário para manter o bem-estar físico e mental.<br /><br />

            &nbsp;&nbsp;&nbsp; Antes de realizar a sessão de Reiki, o terapeuta desta técnica, 
            chamado de reikiano, fará uma limpeza energética no ambiente, 
            para que seja assegurado um espírito e consciência de harmonia 
            e amor. Durante as sessões o reikiano colocará as mãos sobre o 
            corpo de uma pessoa com objetivo de mudar a oscilação ou 
            vibração das energias e isto traz alguns benefícios comprovados 
            como alívio de dores e redução de sintomas de ansiedade e 
            estresse.<br /><br />

            &nbsp;&nbsp;&nbsp; A prática do Reiki é segura e não gera nenhum efeito colateral 
            e nem está ligado a uma religião, podendo ser aceita por pessoas 
            de diferentes origens e crenças. Também pode ser aplicada em 
            conjunto com outras técnicas terapêuticas.<br /><br />
          </p>
          <br />
          <h2>
            Principais Benefícios
          </h2>
          <br />
          <p>
            &nbsp;&nbsp;&nbsp; A realização do Reiki envolve a transferência de energia vital 
            que faz com que o corpo fique em equilíbrio, gerando sensação 
            de bem-estar, melhorando o humor e promovendo a saúde fisica. 
            Neste tipo de terapia se usa técnicas de meditação e exercícios 
            de respiração, levando a alguns benefícios como:
          </p>
          <br />
            <h3>1. Diminui sintomas de estresse e ansiedade</h3>
            <p>
            &nbsp;&nbsp;&nbsp; Este tipo de terapia pode ser uma excelente aliada para o 
            tratamento da ansiedade, devido à sensação de relaxamento e 
            bem-estar que proporciona. Consequentemente, através do Reiki é 
            possível reduzir também os sintomas do estresse, que provocam a 
            ansiedade, promovendo o sentimento de paz interior e servindo 
            como calmante, pois se utiliza técnicas de respiração e 
            meditação.
            <br /><br />
            &nbsp;&nbsp;&nbsp; Algumas clínicas e terapeutas reikianos podem ensinar a própria 
            pessoa a utilizar os princípios do Reiki no dia-a-dia para que 
            seja possível a aplicação da técnica em momentos com maior 
            estresse e ansiedade.

            </p>
            <br />
            <h3>2. Ajuda no tratamento da depressão</h3>
            <p>

            &nbsp;&nbsp;&nbsp; O Reiki pode ser usado para auxiliar o tratamento de depressão, 
            pois através da aplicação das técnicas de imposição das mãos é 
            possível alinhar a energia vital do corpo e reduzir os sintomas 
            provocado por essa doença, como tristeza excessiva, cansaço 
            físico e perda de energia e de interesse nas atividades que 
            antes geravam prazer.
            <br /><br />
            &nbsp;&nbsp;&nbsp; Antes de iniciar as sessões de Reiki, é importante se consultar 
            com psiquiatra para que a pessoa seja avaliada, pois na maioria 
            das vezes, é recomendado o tratamento com medicamentos 
            antidepressivos. O Reiki pode ser usado em conjunto com o 
            tratamento medicamentoso e poderá potencializar os efeitos 
            positivos. Confira mais como é feito o tratamento para depressão.

            </p>
            <br />
            <h3>3. Reduz dores crônicas</h3>
            <p>

            &nbsp;&nbsp;&nbsp; O relaxamento produzido durante a prática do Reiki contribui 
            para a diminuição das dores crônicas, como dor na coluna e na 
            cabeça, pois é capaz de reduzir as tensões e fadiga muscular, 
            por exemplo. Desta forma, pode ser necessário reduzir o uso de 
            comprimidos analgésicos e relaxantes musculares, no entanto, é 
            recomendado não deixar de fazer acompanhamento com o médico, que 
            pode ser ortopedista ou neurologista.
            <br /><br />
            &nbsp;&nbsp;&nbsp; Além disso, os efeitos do Reiki sobre as dores crônicas podem 
            ser sentidos nas primeiras sessões, pois o reikiano vai desacelerar 
            a energia da pessoa, mudando a vibração e a velocidade, produzindo 
            ondas alinhadas nos chackras equivalentes ao órgãos afetados.

            </p>
            <br/>
            <h3>4. Alivia os sintomas da insônia</h3>
            <p>
            &nbsp;&nbsp;&nbsp; A sensação de bem-estar provocada pela realização do Reiki é 
            capaz de aumentar a liberação de hormônios como serotonina e 
            endorfina, que são excelentes aliados para afastar a insônia. 
            E ainda, o Reiki causa relaxamento, o que também age para uma 
            melhor noite de sono. 
            </p>

            <Link href='/'>
              Fale Conosco
            </Link>
        </main>

      </Container>
      <CallToAction />
    </>
  )
}