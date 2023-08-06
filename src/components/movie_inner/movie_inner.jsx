import "./movie_inner.scss"
import ReactPlayer from "react-player"
import { useParams } from "react-router-dom"
import { useEffect, useRef, useState } from "react"

// import imges
import inner1 from "../../assets/svg/movie_inner-share.svg"
import inner2 from "../../assets/svg/movie-inner-calender.svg"
import inner3 from "../../assets/svg/movie-inner-watch2.svg"
import inner4 from "../../assets/svg/movie-inner-star.svg"
import inner5 from "../../assets/svg/hero-link-links-material-play.svg"

function Movie_inner() {

    const elModal = useRef()
    const elPlay = useRef()
    const [paus, setPaus] = useState(false)
    const [getdata, setGetdata] = useState([])
    const { movieId } = useParams()

    useEffect(() => {
        fetch(`https://64c9fecab2980cec85c2b76e.mockapi.io/movie/movie/${movieId}`)
            .then((res) => res.json())
            .then((data) => setGetdata(data))
    }, [])

    return (
        <section className="section-movie_inner" style={{ backgroundImage: `url(${getdata.bg})` }}>
            <div className="container">
                <div className="movie_inner-box">
                    <ul className="movie_inner-link">
                        <li className="movie_inner-links">
                            <img src={getdata.img} alt="error" width={"314.672px"} />
                        </li>
                        <li className="movie_inner-links2">
                            <div className="tngsh">
                                <div className="movie_inner-text-title">
                                    <p className="movie_inner-text">NEW EPISODES</p>
                                    <h2 className="movie_inner-name">{getdata.name}</h2>
                                </div>
                                <div className="movie_inner-gener-share">
                                    <div className="movie_inner-gener12">
                                        <div className="movei_inner-movei">Movie</div>
                                        <div className="movie_inner-quality">{getdata.quality}</div>
                                        <div className="movie_inner-gener">{getdata.gener}</div>
                                        <div className="movei_inner-time"><img src={inner2} alt="error" /> {getdata.time}</div>
                                        <div className="movie_inner-calender"><img src={inner3} alt="error" />{getdata.year}</div>
                                    </div>
                                    <div className="movie_inner-shares">
                                        <h3 className="movei_inner-share1"><img src={inner1} alt="error" />Share</h3>
                                        <div className="show-star-rating">
                                            <h4 className="rate-the-show">Rate The Show</h4>
                                            <h3 className="movie_inner-rating"><img src={inner4} alt="error" /> {getdata.rating}</h3>
                                        </div>
                                        <button className="movei_inner-btn" onClick={(() => {
                                            elModal.current.classList.add('open-modal')
                                            setPaus(true)
                                        })}><img src={inner5} alt="error" /> PLAY NOW</button>
                                    </div>
                                </div>
                            </div>
                            <div className="movie_inner-desc">
                                {getdata.desc}
                            </div>
                        </li>
                    </ul>
                    <div className="modal" ref={elModal} onClick={((evt) => {
                        if (evt.target.matches('.modal')) {
                            setPaus(false)
                            elModal.current.classList.remove('open-modal')
                            console.log("true");
                        }
                        else {
                            console.log("false");
                        }
                    })}>
                        <div className="inner-modal">
                            <ReactPlayer url={getdata.url} ref={elPlay} controls={true} playing={paus} />
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Movie_inner