import Head from 'next/head';

import { Attendance } from '../components/Attendance';
import { Testimonial } from '../components/Testimonial'
import { Meaning } from '../components/Meaning'
import { CallToAction } from '../components/CallToAction'

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
        <Meaning />
        <CallToAction />
      </Container>
    </>
  )
}
