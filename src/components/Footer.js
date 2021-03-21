import React from 'react'
import './Footer.css'
import logo from '../static/logo.png'

function Footer() {
    return (
        <div>
            <footer className="footer-distributed">

                <div className="footer-left">
                {/* <img src="https://picsum.photos/500/300/?image=17" alt="" /> */}
                <img src={logo} alt="" />
                    <h3><span>Iqra Steel Works</span></h3>

                    <p className="footer-links">
                        <a href="/">Home</a>
                        |
                        <a href="/categories">Categories</a>
                        |
                        <a href="/appointment">Appointment</a>
                    </p>

                    <p className="footer-company-name">© 2021 Iqra Steel Works Pvt. Ltd.</p>
                </div>

                <div className="footer-center">
                    <div>
                        <i className="fa fa-map-marker"></i>
                        <p><span>Iqra Steel Works near Noble Hospital, Rehman Pura</span>
                        Ichra, Lahore, Pakistan - 54000</p>
                    </div>

                    <div>
                        <i className="fa fa-phone"></i>
                        <p>+92 320 4870905</p>
                    </div>
                    <div>
                        <i className="fa fa-envelope"></i>
                        <p><a href="mailto:iqrasteelsworks@gmail.com">iqrasteelsworks@gmail.com</a></p>
                    </div>
                </div>
                <div className="footer-right">
                    <p className="footer-company-about">
                        <span>About the company</span>
                        Our aim, since 1985, is to provide the full spectrum of Iron Works in Pakistan.</p>
                    <div className="fa footer-icons">
                        <a href="https://www.facebook.com/iqrasteelsworks" target="_blank" rel="noreferrer"><i className="fab fa-facebook"></i></a>
                        <a href="https://wa.me/923204870905" target="_blank" rel="noreferrer"><i className="fab fa-whatsapp" ></i></a>
                        <a href="https://www.instagram.com/iqrasteelworks" target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i></a>
                        <a href="tel:+923204870905" target="_blank" rel="noreferrer"><i className="fa fa-phone"></i></a>
                        <a href="sms:+923204870905" target="_blank" rel="noreferrer"><i className="fas fa-sms"></i></a>
                    </div>
                </div>
                </footer>
        </div>
    )
}

export default Footer
