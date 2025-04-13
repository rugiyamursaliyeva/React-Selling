import React from 'react'
import styles from "./Card.module.css"
import { FaStar } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";


const Card = ({  item }) => {
  return (
    <div className={styles.card}>
        <img src={item.image} className={styles.img} />
        <span className={styles.name}>{item.title}</span>
        <div className={styles.rating}>
            <span className={styles.star}><FaStar /> <span className={styles.num}>5.0</span></span>
            <span className={styles.heart}><FaHeart /><span className={styles.num}>29</span></span>
        </div>
        <span className={styles.price}>{item.price}{"  $"}</span>
        <div className={styles.btn}>
        <div className={styles.buttons}>
        <button className={styles.cartBtn}>Card</button>
        <button className={styles.viewBtn}>Wiew</button>
        </div>
        </div>
    </div>
  )
}

export default Card