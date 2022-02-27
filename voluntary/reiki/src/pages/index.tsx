import Head from 'next/head';
import { Container } from './styles';

export default function Home() {
  return (
    <>
      <Head>
        <title>Reiki Online</title>
      </Head>
      <Container>
        <main>
          <section>
            <div>
              <h4>Presencial</h4>
              <p>
                Temos um ambiente preparado para te atender, através 
                de horários agendados.
              </p>
              <button>Saiba mais</button>
            </div>
            <div>
              <h4>Domicílio</h4>
              <p>
                Temos um ambiente preparado para te atender, através 
                de horários agendados.
              </p>
              <button>Saiba mais</button>
            </div>
            <div>
              <h4>Online</h4>
              <p>
                Temos um ambiente preparado para te atender, através 
                de horários agendados.
              </p>
              <button>Saiba mais</button>
            </div>
          </section>
        </main>
      </Container>
    </>
  )
}
