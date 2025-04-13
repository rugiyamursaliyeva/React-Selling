import React from 'react'
import styles from  "./Section4.module.css"
import about from '../../media/about_1.jpg.webp';

const Section4 = () => {
  return (
    <>
    <section className={styles.love}>
          <div className={styles.gues}>
          <img src={about} alt="" />
          </div>
          <div className={styles.text2}>
            <p className={styles.company}>MERCHANT COMPANY</p>
            <span className={styles.abus}>About Us</span>
            <p className={styles.qui}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui fuga ipsa, repellat blanditiis nihil, consectetur. Consequuntur eum inventore, rem maxime, nisi excepturi ipsam libero ratione adipisci alias eius vero vel!</p>
            <div className={styles.dna}>
            <button className={styles.more}>LEARN MORE</button>
          </div>
          </div>  
        </section>
        <section className={styles.var}>
            <p className={styles.team}>TEAM</p>
            <p className={styles.ship}>Leadership</p>
        </section>
    </>
  )
}

export default Section4