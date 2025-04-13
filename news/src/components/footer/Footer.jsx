import React from 'react'
import styles from  "./Footer.module.css"
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import girl4 from "../../media/product_1_bg.jpg.webp";





const Footer = () => {
  return (
    <footer className={styles.footer}>
        <div className={styles.conta}>
            <div className={styles.content}>
                <div className={styles.section}>
                    <h3>ABOUT US</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque facere laudantium magnam voluptatum autem. Amet aliquid nesciunt veritatis aliquam.</p>
                </div>
                <div className={styles.quick}>
                    <h3>QUICK LINKS</h3>
                    <ul>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Testimonials</a></li>
                        <li><a href="#">Contact Us</a></li>
                    </ul>
                </div>
                <div className={styles.follow}>
                    <h3>FOLLOW US</h3>
                    <div className={styles.links}>
                        <FaFacebookF className={styles.ic}/>
                        <FaTwitter className={styles.ic}/>
                        <FaInstagram className={styles.ic}/>
                        <FaLinkedinIn className={styles.ic}/>
                    </div>
                </div>
                <div className={styles.product}>
                    <h3>FEATURED PRODUCT</h3>
                    <img src={girl4} alt="" />
                    <h4>Leather Brown Shoe</h4>
                    <span className={styles.prices}>$60.00</span>
                    <a href="#" className={styles.btns}>ADD TO CART</a>
                </div>
            </div>
            <div className={styles.bottom}>
                <p>Copyright &copy;2025 All rights reserved | This template is made with <span>♥</span> by Colorlib</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer