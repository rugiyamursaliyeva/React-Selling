import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaBars } from "react-icons/fa6";
import styles from  "./Header.module.css"



const Header = () => {
  return (
    <>
    <section className={styles.head}>
            <div className={styles.ico}>
            <FaFacebookF className={styles.icon}/>
            <FaTwitter className={styles.icon}/>
            <FaInstagram className={styles.icon}/>
            <FaLinkedinIn className={styles.icon}/>
            </div>
            <div className={styles.contact}>
                <div className={styles.phone}>
                <FaPhoneAlt className={styles.ph}/>
                <p>(+1) 234 5678 9101</p>
                </div>
                <div className={styles.email}>
                <MdEmail className={styles.ph}/>
                <p>shop@yourdomain.com</p>
                </div>
            </div>
        </section>
        <section className={styles.header}>
            <div className={styles.sell}>
                <p>Selling</p><p className={styles.point}>.</p>
                <FaBars className={styles.bars}/>
            </div>
            <div className={styles.nav}>
                <a href="#">Home</a>
                <a href="#">Products</a>
                <a href="#">About Us</a>
                <a href="#">Special</a>
                <a href="#">Testimonails</a>
                <a href="#">Blog</a>
                <a href="#">Contact</a>
            </div>
        </section>
    </>
  )
}

export default Header