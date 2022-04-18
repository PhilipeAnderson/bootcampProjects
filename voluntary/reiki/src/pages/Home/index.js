import { Header } from '../../components/Header';
import { Attendance } from '../../components/Attendance';
import { Testimonial } from '../../components/Testimonial';
import { About } from '../../components/About';
import { Footer } from '../../components/Footer';

export function Home() {
  return(
    <>
      <Header />
      <Attendance />
      <Testimonial />
      <About />
      <Footer />
    </>
  )
}