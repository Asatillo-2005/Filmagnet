import "./movie.scss"
import { NavLink as Link } from "react-router-dom"
import { useEffect, useState, useRef } from "react"

// import imges
import movie1 from "../../assets/svg/movie-watch.svg"
import movie2 from "../../assets/svg/movie-star1.svg"
import movie3 from "../../assets/imgs/movie-bg-image.png"
import movie4 from "../../assets/imgs/imge-movei.png"
// import imges

import axios from "axios"

function Movie() {

  const [data, setData] = useState([])

  useEffect(() => {
    axios('https://64c9fecab2980cec85c2b76e.mockapi.io/movie/movie').then(res=>setData(res.data))
    
  },[])

  return (
    <section className="section-movie">
      <div className="container">
        <div className="movie-box">
          <ul className="movie-link1">
            <li className="movie-links1">
              <h4 className="movie-links1-h4">BEST TV SERIES</h4>
              <h2 className="movie-links1-h2">World’s Best TV Series</h2>
            </li>
          </ul>
          <ul className="movie-link21">
            {
              data.map((item, index) => {
                return (
                  <li className="movie-link2-links" key={data}>
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
                    </div>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Movie

