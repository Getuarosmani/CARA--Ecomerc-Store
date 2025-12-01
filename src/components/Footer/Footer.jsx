import React from 'react'
import style from './Footer.module.scss'

export const Footer = () => {
    return (
        <footer>
            <div className={`container ${style.container}`}>
                <div className={style.contact}>
                    <img src={`${import.meta.env.BASE_URL}images/logo.png`} alt="Logo" />
                    <h4>Contact</h4>
                    <div className={style['contact-data']}>
                        <p><span>Address:</span> 562 wellington Road.Street 32.San Francisco</p>
                        <p><span>Phone:</span> +012222 356/(+91) 01 2345 6789</p>
                        <p><span>Hours:</span> 10:00 - 18:00. Mon-Sat</p>
                    </div>
                    <h4>Follow Us</h4>
                    <div className={style.icons}>
                        <i class="fab fa-facebook-f"></i>
                        <i class="fab fa-twitter"></i>
                        <i class="fab fa-instagram"></i>
                        <i class="fab fa-pinterest-p"></i>
                        <i class="fab fa-youtube"></i>
                    </div>
                </div>
                <div className={style.holder}>
                    <div className={style.about}>
                        <h4>About</h4>
                        <ul>
                            <li>About Us</li>
                            <li>Delivery Information</li>
                            <li>Privacy Policy</li>
                            <li>Terms & Condition</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>
                    <div className={style.account}>
                        <h4>My Account</h4>
                        <ul>
                            <li>Sing In</li>
                            <li>View Cart</li>
                            <li>My Wishlist</li>
                            <li>Track My Order</li>
                            <li>Help</li>
                        </ul>
                    </div>
                </div>
                <div className={style.app}>
                    <h4>Install App</h4>
                    <p>From App Store or Google Play</p>
                    <div className={style.stores}>
                        <img src={`${import.meta.env.BASE_URL}images/pay/app.jpg`} alt="app-store" />
                        <img src={`${import.meta.env.BASE_URL}images/pay/play.jpg`} alt="play-store" />
                    </div>
                    <p>Secured Payment Gateways</p>
                    <img src={`${import.meta.env.BASE_URL}images/pay/pay.png`} alt="" />
                </div>
            </div>
            <p className={style.copyright}>© {new Date().getFullYear()} Getuar Osmani — All Rights Reserved.</p>

        </footer>
    )
}
