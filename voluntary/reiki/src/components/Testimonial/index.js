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
            Flávia Assunção
          </header>
          <footer className={styles.descriptionTestimonial}>
            Foi incrível a experiência que tive ao me conectar 
            comigo mesma, em segurança e em um ambiente que me 
            proporcionou um grande benefício.
          </footer>
        </div>
      </section>
    </main>
  )
}