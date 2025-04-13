import React from 'react'
import styles from  "./Section9.module.css"
import girl from '../../media/model_1_bg.jpg.webp';
import girl3 from '../../media/model_5_bg.jpg.webp';
import girl4 from '../../media/product_1_bg.jpg.webp';

const Section9 = () => {
  return (
    <>
    <section className={styles.ufo}>
    <div className={styles.peops}>
      <div className={styles.fotos}>
        <img src={girl} alt="" />
      </div>
      <div className={styles.rootss}>
        <p className={styles.johns}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        <p className={styles.founders}>Ham Brook • Jan 18, 2019• <p className={styles.n}>News</p></p>
        <p className={styles.nisis}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eligendi nobis ea maiores 
          sapiente veritatis reprehenderit suscipit quaerat rerum voluptatibus a eius.</p>
        <button className={styles.read}>Continue Reading...</button>
      </div>
    </div>  

    <div className={styles.peops}>
      <div className={styles.fotos}>
        <img src={girl3} alt="" />
      </div>
      <div className={styles.rootss}>
        <p className={styles.johns}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        <p className={styles.founders}>Ham Brook • Jan 18, 2019• <p className={styles.n}>News</p></p>
        <p className={styles.nisis}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eligendi nobis ea maiores 
          sapiente veritatis reprehenderit suscipit quaerat rerum voluptatibus a eius.</p>
        <button className={styles.read}>Continue Reading...</button>
      </div>
    </div> 

    <div className={styles.peops}>
      <div className={styles.fotos}>
        <img src={girl4} alt="" />
      </div>
      <div className={styles.rootss}>
        <p className={styles.johns}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        <p className={styles.founders}>Ham Brook • Jan 18, 2019• <p className={styles.n}>News</p></p>
        <p className={styles.nisis}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eligendi nobis ea maiores 
          sapiente veritatis reprehenderit suscipit quaerat rerum voluptatibus a eius.</p>
        <button className={styles.read}>Continue Reading...</button>
      </div>
    </div> 
    </section>
    <div className={styles.begggi}>
            <p className={styles.serrr}>CONTACT FORM</p>
            <p className={styles.weee}>Get In Touch</p>
    </div>
    </>
  )
}

export default Section9