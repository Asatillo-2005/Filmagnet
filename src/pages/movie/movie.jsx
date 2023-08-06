import "./movie.scss"
import { NavLink as Link } from "react-router-dom"
import { useEffect, useState, useRef } from "react"

// import imges
import movie1 from "../../assets/svg/movie-watch.svg"
import movie2 from "../../assets/svg/movie-star1.svg"
import movie3 from "../../assets/imgs/movie-bg-image.png"
import movie4 from "../../assets/imgs/imge-movei.png"
// import imges

import Modal from "../../components/modal/modal.jsx"

function Movie() {

  const [data, setData] = useState([])
  const [loading, setLoading] = useState()
  const [modalopen, setModalopen] = useState(false)
  const [modaldata, setModaldata] = useState()

  function Fetch() {
    fetch('https://64c9fecab2980cec85c2b76e.mockapi.io/movie/movie')
      .then((res) => res.json())
      .then((data) => setData(data))

  }

  useEffect(() => {
    Fetch()
  }, [loading])

  function onDelet(id) {
    setLoading(true)
    fetch(`https://64c9fecab2980cec85c2b76e.mockapi.io/movie/movie/${id}`, {
      method: 'DELETE',
    }).then(res => res.json())
      .then(data => {
        console.log(data);
        setLoading(false)
      })
  }

  return (
    <section className="section-movie">
      <div className="container">
        <div className="movie-box">
          <ul className="movie-link1">
            <li className="movie-links1">
              <h4 className="movie-links1-str">ONLINE STREAMING</h4>
              <h2 className="movie-links1-title">Upcoming Movies</h2>
            </li>
            <li className="movie-links2">
              <div className="movies">Movies</div>
              <div className="movies">TVs Shows</div>
              <div className="movies">Anime</div>
            </li>
          </ul>
          <ul className="movie-link21">
            {
              data.map((item, index) => {
                return (
                  <li className="movie-link2-links">
                    <Link to={`/movie_inner/${item.id}`} > <img className="img" src={item.img} alt="error" width={" 294.977px"} /></Link>
                    <div className="n-y-q-t-r">
                      <div className="name-year">
                        <p className="name">{item.name.slice(0, 9)}</p>
                        <span className="year">{item.year}</span>
                      </div>
                      <div className="quality-time-rating">
                        <div className="quality">{item.quality}</div>
                        <div className="time-rating1">
                          <span className="time"><img src={movie1} alt="error" />{item.time}min</span>
                          <span className="rating"><img src={movie2} alt="error" />{item.rating}</span>
                        </div>
                      </div>
                      <button className="delet" onClick={() => onDelet(item?.id)}>delet</button>
                      <button className="modal-edit1" onClick={() =>{
                        setModalopen(true) 
                        setModaldata(item)} 
                       }>edit</button>
                    </div>
                  </li>
                )
              })
            }
            <Modal setModalopen={setModalopen} modalopen={modalopen} modaldata={modaldata}  />
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Movie