import "./home.scss"

// import imges
 import home1 from "../../assets/svg/hero-link-links-material-play.svg"
 import home2 from "../../assets/svg/hero-icons-calender.svg"
//  import imges
 


function Home() {
    return (
        <section className="section-home">
            <div className="container">
                <div className="home-box">
                    <ul className="home-link">
                          <li className="home-links">
                            <div className="ttt2">
                          <h3 className="home-links-title">Filmagnet</h3>
                          <h2 className="home-links-text">Unlimited <span className="home-links-text-span">Entertainment</span>,</h2>
                          <h3 className="home-links-text2">Movies, TVs shows, & More.</h3>
                            </div>
                          <div className="home-links-mqgc">
                            <div className="mqgc-item1">
                            <div className="movie">Movie</div>
                            <div className="quality">HD</div>
                            <div className="gener">Action,Drama</div>
                            <div className="calendar"><img src={home2} alt="error" /> 2023</div>
                            </div>
                          <button className="home-links-btn"><img src={home1} alt="error" />PLAY NOW</button>  
                          </div>
                          </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Home