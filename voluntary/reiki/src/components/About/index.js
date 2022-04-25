import styles from './styles.module.css';
import Reiki from '../../assets/blue.png';


export function About() {
  return(
    <main className={styles.container}>
      <section className={styles.content}>
        <h1 className={styles.textAbout}>Benefícios do Reiki</h1>
        <div className={styles.contentAbout}>
          <aside className={styles.left}>
            <div className={styles.tipsAbout}>
              <h4>Estresse</h4>
              <p>
                 Este tipo de terapia pode ser uma excelente aliada para o combate do estresse.
              </p>
            </div>
            <div className={styles.tipsAbout}>
              <h4>Depressão</h4>
              <p>
                Através da aplicação das técnicas de imposição das mãos é possível alinhar a energia vital do corpo.
              </p>
            </div>
            <div className={styles.tipsAbout}>
              <h4>Dores Crônicas</h4>
              <p>
                Os efeitos do Reiki sobre as dores crônicas podem ser sentidos nas primeiras sessões.
              </p>
            </div>
          </aside>

          <div className={styles.center}>
            <img className={styles.imageAbout} src={Reiki} alt="Letras Japonesas falando sobre o Reiki" />
          </div>

          <aside className={styles.right}>
            <div className={styles.tipsAbout}>
              <h4>Insônia</h4>
              <p>
                Aumenta os níveis de hormônios como serotonina e endorfina, são aliados contra a insônia.
              </p>
            </div>
            <div className={styles.tipsAbout}>
              <h4>Qualidade De Vida</h4>
              <p>
                Sentimentos de esperança, bem-estar, alegria, paz e autoconfiança, uma vida mais leve e animada. 
              </p>
            </div>
            <div className={styles.tipsAbout}>
              <h4>Estilo de Vida</h4>
              <p>
                As escolhas a partir das sessões, serão feitas naturalmente por uma alimentação saudável e exercícios. 
              </p>
            </div>
          </aside>
        </div>
      </section>
    </main>

  )
}