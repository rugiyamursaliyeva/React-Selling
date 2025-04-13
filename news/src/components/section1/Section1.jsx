import React from 'react'
import styles from  "./Section1.module.css"

const Section1 = () => {
  return (
    <>
    <section className={styles.wrapper}>
            <div className={styles.shop}>
                    <p className={styles.us}>Shop With Us</p>
                    <p className={styles.lorem}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam assumenda ea quo cupiditate facere deleniti fuga officia.</p>
                <div  className={styles.btn}>
                    <button className={styles.now}>SHOP NOW</button>
                    <button className={styles.club}>CLUB MEMBERSHIP</button>
                </div>
            </div>
        </section>
        <section className={styles.text}>
            <p className={styles.pop}>POPULAR PRODUCTS</p>
            <p className={styles.our}>Our Products</p>
            <p className={styles.dolor}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nostrum natus excepturi fuga ullam accusantium vel ut eveniet aut consequatur laboriosam ipsam.</p>
        </section>
    </>    
  )
}

export default Section1