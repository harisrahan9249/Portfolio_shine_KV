import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div className='foot'>
      <footer classNameName="footer-section">
        <div className="container">
            <div className="footer-cta pt-5 pb-5">
                <div className="row">
                    <div className="col-xl-4 col-md-4 mb-30">
                        <div className="single-cta">
                            <i className="fas fa-map-marker-alt"></i>
                            <div className="cta-text">
                                <h4>Current Address</h4>
                                <span>1kolej Na Větrníku, Za Zahradou, 162 00 Prague, Czechia</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-4 mb-30">
                        <div className="single-cta">
                            <i className="fas fa-phone"></i>
                            <div className="cta-text">
                                <h4>Phone</h4>
                                <span>+420 777879716</span>
                            </div>
                            <div className="cta-text">
                              
                                <span>+420 777879716</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-4 mb-30">
                       
                    </div>
                </div>
            </div>
            <div className="footer-content pt-5 pb-5">
                <div className="row">
                    <div className="col-xl-4 col-lg-4 mb-50">
                        <div className="footer-widget">
                            <div className="footer-logo">
                                {/* <a href="index.html"><img src="https://i.ibb.co/QDy827D/ak-logo.png" className="img-fluid" alt="logo"/></a> */}
                            </div>
                            <div className="footer-social-icon">
                                <span>Follow </span>
                                <a href="https://www.facebook.com/shine.karoth/"><img className="fab fa-facebook-f facebook-bg" src='./Icons/icons8-facebook-circled.svg'/></a>
                                <a href="https://www.instagram.com/Shine_Karoth_"><img className="fab fa-facebook-f facebook-bg" src='./Icons/Instagram_icon.png.webp'/></a>
                                <a href="https://www.linkedin.com/in/shine-karoth-3963a5211/"><img className="fab fa-facebook-f facebook-bg" src='./Icons/LinkedIn_icon_circle.svg.png'/></a>
                            </div>
                        </div>
                    </div>
                 
                </div>
            </div>
        </div>
        <div className="copyright-area">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6 text-center text-lg-left">
                        <div className="copyright-text">
                            <p>Copyright &copy; 2022, All Right Reserved <a href="https://github.com/harisrahan9249">Harisrahman</a></p>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                        <div className="footer-menu">
                            {/* <ul>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">Terms</a></li>
                                <li><a href="#">Privacy</a></li>
                                <li><a href="#">Policy</a></li>
                                <li><a href="#">Contact</a></li>
                            </ul> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    </div>
  )
}

export default Footer
