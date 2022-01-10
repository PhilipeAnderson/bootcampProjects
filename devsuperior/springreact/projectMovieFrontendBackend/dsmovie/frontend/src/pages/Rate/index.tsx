import styles from './styles.module.scss';


export function Rate() {

  const movie = {
    id: 1,
    image: "https://www.themoviedb.org/t/p/original/hv7o3VgfsairBoQFAawgaQ4cR1m.jpg",
    title: "The Witcher",
    count: 2,
    score: 4.5
  };



  return(
    <div className={styles.container} >
    <div className={styles.content} >
      <img src={movie.image} alt={movie.title} />
      <h3>{movie.title}</h3>
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
            
            <button type="submit" className="btn btn-primary">Salvar</button>
            
        </form >
        <button className="btn btn-danger mt-3">Cancelar</button>
    </div >
</div >
  )
}