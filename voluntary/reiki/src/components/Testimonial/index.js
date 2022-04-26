import styles from './styles.module.css'; 

export function Testimonial() {
  return(
    <main className={styles.container}>
      <section className={styles.content}>
        <div className={styles.picture}>
          <img className={styles.pic}src="https://www.clarin.com/img/2016/04/05/HJxaM4fy4g_340x340.jpg" alt="Imagem de Cliente Testimonial" />
        </div>
        <div className={styles.textTestimonial}>
          <header className={styles.titleTestimonial}>
            Raquel Correia
          </header>
          <footer className={styles.descriptionTestimonial}>
          Mestra e Terapeuta em Reiki por mais de 20 anos, com formação em filosofia pela UFPR, 
          atuou na rede municipal de ensino por 25 anos. Apaixonada por Filosofia Clínica.
          </footer>
        </div>
      </section>
    </main>
  )
}