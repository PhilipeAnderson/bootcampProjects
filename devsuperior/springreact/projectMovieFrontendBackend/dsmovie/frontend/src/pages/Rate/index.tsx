import styles from './styles.module.scss';
import { Pagination } from '../../components/Pagination';
import adsImg from '../../img/cocacola.jpg';


export function Rate() {

  const movie = {
    id: 1,
    image: "https://www.themoviedb.org/t/p/original/hv7o3VgfsairBoQFAawgaQ4cR1m.jpg",
    title: "The Witcher",
    sinopse: 'Em um mundo de duas realidades — a vida cotidiana e o que está por trás dela —, Thomas Anderson terá que escolher seguir o coelho branco mais uma vez. A escolha, embora seja uma ilusão, ainda é a única maneira de entrar ou sair da Matrix, que é mais forte, mais segura e mais perigosa do que nunca.',
    count: 2,
    score: 4.5
  };



  return (
    <div className={styles.container} >
      <div className={styles.content} >
        <img src={movie.image} alt={movie.title} />

        <div className={styles.woops}>

          <div className={styles.left}>
            <div className={styles.titleSinopse}>
              <h3>{movie.title}</h3>
              <p>{movie.sinopse}</p>
            </div>

            <div className={styles.forms}>
              <form>
                <div>
                  <label htmlFor="email">Informe seu email</label>
                  <input type="email" className="form-control" id="email" />
                </div>
                <div className="form-group">
                  <label htmlFor="score">Informe sua avaliação</label>
                  <select className="form-control" id="score">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                </div>

                <button type="submit" className="btn btn-primary">Rate</button>

              </form >

              <footer>
                <button className="btn btn-danger mt-3">
                  <a href="/">Back to List</a>
                </button>
                <Pagination />
              </footer>
            </div>
          </div>


          <div className={styles.ads}>
            <img src={adsImg} alt="Propaganda" />
            <div>
              <a target="_blank" rel="noreferrer" href="https://www.ifood.com.br/">Peça no iFood</a>
              <p>Patrocinado</p>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}