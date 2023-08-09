import "./footer.scss"

import footer1 from "../../assets/imgs/footer-img1.png"
import footer2 from "../../assets/imgs/footer-img2.png"
import footer3 from "../../assets/imgs/footer-img3.png"
import footer4 from "../../assets/imgs/footer-img4.png"
import img6 from "../../assets/svg/header-links-navlik-span-line.svg"


function Footer() {
    return (
        <section className="section-footer">
            <div className="container">
                <div className="footer-box">
                    <ul className="footer-link">
                        <li className="footer-link-links1">
                            <img src={footer1} alt="error" />
                            <img src={footer2} alt="error" />
                            <img src={footer3} alt="error" />
                            <img src={footer4} alt="error" />
                        </li>
                        <li className="footer-link-links2">
                            <div className="footer-link-links2-pages">
                                <div className="pages-items">1</div>
                                <div className="pages-items">2</div>
                                <div className="pages-items">3</div>
                                <div className="pages-items">4</div>
                                <div className="pages-items">5</div>
                                <div className="pages-items">6</div>
                                <div className="pages-items">7</div>
                                <div className="pages-items">8</div>
                                <div className="pages-items">9</div>
                                <div className="pages-items">10</div>
                            </div>
                            <div className="footer-link-links2-about">
                                Filmagnet is an online movie streaming platform that offers pirated content that is not released. It has a huge collection of latest movies and films that still not available on the market and YouTube. You can watch and download all contents free of costs, but they are illegal, so you have to take some precautions. It is not available in all countries so you can use VPN and choose a location with access to Filmagnet. Here, we will discuss the Filmagnet.
                            </div>
                        </li>
                        <li className="footer-link-links3">
                            <p className="footer-link-links3-text">About us <img src={img6} alt="error" /></p>
                            <p className="footer-link-links3-text">Vlog<img src={img6} alt="error" /></p>
                            <p className="footer-link-links3-text">Contact<img src={img6} alt="error" /></p>
                            <p className="footer-link-links3-text">Report broken links<img src={img6} alt="error" /></p>
                            <p className="footer-link-links3-text">Disclaimer</p>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Footer