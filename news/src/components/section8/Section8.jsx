import React from 'react'
import styles from  "./Section8.module.css"
import nigga1 from '../../media/person_3.webp';

const Section8 = () => {
  return (
    <>
     <section className={styles.hi}>
          <div className={styles.nn}>
          <div className={styles.mm}>
            <img src={nigga1} alt="" />
          </div>
          <div className={styles.text4}>
            <p className={styles.natus}>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nostrum natus excepturi fuga ullam accusantium vel ut eveniet aut consequatur laboriosam ipsam."</p>
            <p className={styles.simth}>John Simth</p>
          </div>
          </div>
        </section>
        <div className={styles.begggi}>
                <p className={styles.serrr}>BLOG</p>
                <p className={styles.weee}>Blog Posts</p>
        </div>
    </>    
  )
}

export default Section8