import React from 'react'
import styles from  "./Section5.module.css"
import nigga from '../../media/person_2.webp';
import nigga1 from '../../media/person_3.webp';
import nigga2 from '../../media/person_4.webp';
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";


const Section5 = () => {
  return (
    <section className={styles.uno}>
          <div className={styles.peop}>
          <div className={styles.foto}>
            <img src={nigga} alt="" />
          </div>
          <div className={styles.roots}>
            <p className={styles.john}>John Rooster</p>
            <p className={styles.founder}>CO-FOUNDER, PRESIDENT</p>
            <p className={styles.nisi}>Nisi at consequatur unde molestiae quidem provident voluptatum deleniti quo iste error eos est 
              praesentium distinctio cupiditate tempore suscipit inventore deserunt tenetur.</p>
          </div>
          <div className={styles.lamar}>
           <FaFacebookF className={styles.icons}/>
            <FaTwitter className={styles.icons}/>
            <FaInstagram className={styles.icons}/>
            <FaLinkedinIn className={styles.icons}/>
          </div>
          </div>
          <div className={styles.peop}>
          <div className={styles.foto}>
            <img src={nigga1} alt="" />
          </div>
          <div className={styles.roots}>
            <p className={styles.john}>John Rooster</p>
            <p className={styles.founder}>CO-FOUNDER, PRESIDENT</p>
            <p className={styles.nisi}>Nisi at consequatur unde molestiae quidem provident voluptatum deleniti quo iste error eos est 
              praesentium distinctio cupiditate tempore suscipit inventore deserunt tenetur.</p>
          </div>
          <div className={styles.lamar}>
          <FaFacebookF className={styles.icons}/>
            <FaTwitter className={styles.icons}/>
            <FaInstagram className={styles.icons}/>
            <FaLinkedinIn className={styles.icons}/>
          </div>
          </div>
          <div className={styles.peop}>
          <div className={styles.foto}>
            <img src={nigga2} alt="" />
          </div>
          <div className={styles.roots}>
            <p className={styles.john}>John Rooster</p>
            <p className={styles.founder}>CO-FOUNDER, PRESIDENT</p>
            <p className={styles.nisi}>Nisi at consequatur unde molestiae quidem provident voluptatum deleniti quo iste error eos est 
              praesentium distinctio cupiditate tempore suscipit inventore deserunt tenetur.</p>
          </div>
          <div className={styles.lamar}>
          <FaFacebookF className={styles.icons}/>
            <FaTwitter className={styles.icons}/>
            <FaInstagram className={styles.icons}/>
            <FaLinkedinIn className={styles.icons}/>
          </div>
          </div>
        </section>
  )
}

export default Section5