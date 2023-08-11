import "./header.scss"
// impor imges
import img1 from "../../assets/svg/header-link-links-log-vector.svg"
import img2 from "../../assets/svg/header-link-links-filmagnet.svg"
import img3 from "../../assets/svg/header-link-links-world.svg"
import img4 from "../../assets/svg/header-link-links-vector1.svg"
import img5 from "../../assets/svg/header-links-material-search.svg"
import img6 from "../../assets/svg/header-links-navlik-span-line.svg"
// import imges

import { NavLink as Link } from "react-router-dom"

function Header() {
    return (
        <section className="section-header">
            <div className="container">
                <div className="header-box">
                    <Link to={"/"} className={"header-logo"}> <img src={img1} alt="erroe" /> <img src={img2} alt="error" /> </Link>
                    <ul className="header-link">
                        <li className="header-links">
                            <Link className={"header-links-navlink"} to={"/"}>HOME <span className="header-links-navlink-span"><img src={img6} alt="error" /></span> </Link>
                        </li>
                        <li className="header-links">
                            <Link  className={"header-links-navlink"}  to={"/movie"}>MOVIE <span className="header-links-navlink-span"><img src={img6} alt="error" /></span> </Link>
                        </li>
                        <li className="header-links">
                            <Link  className={"header-links-navlink"}  to={"/tvshow"}>TVSHOW <span className="header-links-navlink-span"><img src={img6} alt="error" /></span> </Link>
                        </li>
                        <li className="header-links">
                            <Link  className={"header-links-navlink"}  to={"/web"}>WEB SERIES <span className="header-links-navlink-span"><img src={img6} alt="error" /></span> </Link>
                        </li>
                        <li className="header-links">
                            <Link  className={"header-links-navlink"}  to={"/primium"}>PRIMIUM</Link>
                        </li>
                    </ul>
                    <div className="slb">
                        <div className="search"> <img src={img5} alt="error" /> <img src={img6} alt="error" /> </div>
                        <div className="language"><img src={img3} alt="error" /> <span className="language-span">EN <img src={img4} alt="error" /></span></div>
                        <button className="slb-btn"><Link className={"header-links-navlink"} to={'/admin'} >SIGN IN</Link></button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Header