import React from 'react'
import styles from  "./Section2.module.css"

const Section = () => {
  return (
    <>
    <section className={styles.site}>
            <div className={styles.get}>
                <p className={styles.par}>Get notified on each updates.</p>
                <div className={styles.email}>
                    <input type="email" placeholder='Enter your email address'/>
                    <button className={styles.sub}>SUBSCRIBE</button>
                </div>
                <p className={styles.amet}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat commodi veniam doloremque ducimus tempora.</p>
            </div>
        </section>
        <section className={styles.text1}>
            <p className={styles.some}>AWESOME PRODUCTS</p>
            <p className={styles.feat}>Featured Products</p>
            <p className={styles.elit}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nostrum natus excepturi fuga ullam accusantium vel ut eveniet aut consequatur laboriosam ipsam.</p>
        </section>
    </>    
    
  )
}

export default Section