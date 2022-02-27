import Head from 'next/head';
import { Attendance } from '../components/Attendance';
import { Testimonial } from '../components/Testimonial'
import { Container } from './styles';

export default function Home() {
  return (
    <>
      <Head>
        <title>Reiki Online</title>
      </Head>
      <Container>
        <Attendance />
        <Testimonial />
      </Container>
    </>
  )
}
