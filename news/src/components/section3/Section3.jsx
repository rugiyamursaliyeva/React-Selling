import React from 'react'
import styles from  "./Section3.module.css"
import girl4 from "../../media/product_1_bg.jpg.webp";
import girl from '../../media/model_1_bg.jpg.webp';

const Section3 = () => {
  return (
    <>
     <section className={styles.don}>
          <div className={styles.cry}>
          <div className={styles.photo}>
            <img src={girl} alt="" />
          </div>
          <div className={styles.details}>
            <h2>About This Product</h2>
            <p className={styles.id}>
              Et tempora id nostrum saepe amet doloribus deserunt totam officiis cupiditate asperiores quasi
              accusantium voluptatum dolorem quae sapiente voluptatem ratione odio iure blanditiis earum fuga
              molestiae alias dicta perferendis inventore!
            </p>
            <p className={styles.sit}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus soluta assumenda sed optio, error at?
            </p>
            <div className={styles.priceSection}>
              <p className={styles.prc}>Price:</p>
              <div className={styles.oldPrice}>
              <p className={styles.sifir}>$269.00</p>
              <p>$69.00</p>
              </div>
            </div>
            <div className={styles.buttons}>
              <button className={styles.detailsBtn}>VIEW DETAILS</button>
              <button className={styles.cartsBtn}>ADD TO CART</button>
            </div>
          </div>
          </div>
        </section>
    
        <section className={styles.don}>
          <div className={styles.cry}>
          <div className={styles.details}>
            <h2>About This Product</h2>
            <p className={styles.id}>
              Et tempora id nostrum saepe amet doloribus deserunt totam officiis cupiditate asperiores quasi
              accusantium voluptatum dolorem quae sapiente voluptatem ratione odio iure blanditiis earum fuga
              molestiae alias dicta perferendis inventore!
            </p>
            <p className={styles.sit}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus soluta assumenda sed optio, error at?
            </p>
            <div className={styles.priceSection}>
              <p className={styles.prc}>Price:</p>
              <div className={styles.oldPrice}>
              <p className={styles.sifir}>$269.00</p>
              <p>$69.00</p>
              </div>
            </div>
            <div className={styles.buttons}>
              <button className={styles.detailsBtn}>VIEW DETAILS</button>
              <button className={styles.cartsBtn}>ADD TO CART</button>
            </div>
          </div>
          <div className={styles.photo}>
            <img src={girl4} alt="" />
          </div>
          </div>
        </section>
    </>    
  )
}

export default Section3