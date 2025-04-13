import React from 'react'
import styles from  "./Section7.module.css"
import { MdPieChart } from "react-icons/md";
import { IoMdBackspace } from "react-icons/io";
import { MdAvTimer } from "react-icons/md";
import { MdBeenhere } from "react-icons/md";
import { MdBusinessCenter } from "react-icons/md";
import { IoIosCloudDone } from "react-icons/io";


const Section7 = () => {
  return (
    <>
    <section className={styles.mor}>
          <div className={styles.oni}>
            <div className={styles.pie}>
              <MdPieChart />
            </div>
            <div className={styles.only}>
              <p className={styles.business}>Business Consulting</p>
              <p className={styles.lorem}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
              <button className={styles.lmore}>Learn More</button>
            </div>
          </div>
    
          <div className={styles.oni}>
            <div className={styles.pie}>
              <IoMdBackspace />
            </div>
            <div className={styles.only}>
              <p className={styles.business}>Business Consulting</p>
              <p className={styles.lorem}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
              <button className={styles.lmore}>Learn More</button>
            </div>
          </div>
    
          <div className={styles.oni}>
            <div className={styles.pie}>
              <MdAvTimer />
            </div>
            <div className={styles.only}>
              <p className={styles.business}>Business Consulting</p>
              <p className={styles.lorem}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
              <button className={styles.lmore}>Learn More</button>
            </div>
          </div>
    
          <div className={styles.oni}>
            <div className={styles.pie}>
              <MdBeenhere />
            </div>
            <div className={styles.only}>
              <p className={styles.business}>Business Consulting</p>
              <p className={styles.lorem}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
              <button className={styles.lmore}>Learn More</button>
            </div>
          </div>
    
          <div className={styles.oni}>
            <div className={styles.pie}>
              <MdBusinessCenter />
            </div>
            <div className={styles.only}>
              <p className={styles.business}>Business Consulting</p>
              <p className={styles.lorem}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
              <button className={styles.lmore}>Learn More</button>
            </div>
          </div>
    
          <div className={styles.oni}>
            <div className={styles.pie}>
              <IoIosCloudDone />
            </div>
            <div className={styles.only}>
              <p className={styles.business}>Business Consulting</p>
              <p className={styles.lorem}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
              <button className={styles.lmore}>Learn More</button>
            </div>
          </div>
        </section>
        <div className={styles.beggi}>
                <p className={styles.serr}>PEOPLE SAYS</p>
                <p className={styles.wee}>Testimonials</p>
        </div>
    </>    
  )
}

export default Section7