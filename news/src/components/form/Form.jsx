import React, { useState, useEffect } from 'react';
import styles from "./Form.module.css"
import axios from 'axios'

const Form = () => {
    const [fname, setFirstName] = useState('')
    const [lname, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState("")
  
  
    const sendData = (e) => {
      e.preventDefault()
      axios.post("https://northwind.vercel.app/api/categories",
        {
          fname: fname,
          lname: lname,
          email: email,
          subject: subject,
          message: message,
  
        })
    }
    const [data, setData] = useState([]);
  
    const getData = () => {
      axios.get("https://fakestoreapi.com/products ")
      .then((res) => {
        setData(res.data);
      });
    };
  
  useEffect(() => (
    getData()
  ),[])
  return (
    <section className={styles.cart}>
    <form onSubmit={sendData}>
    <div className={styles.row}>
      <div className={styles.a}>
        <p>First Name</p>
        <input type="text" value={fname} onChange={(e) => setFirstName(e.target.value)} placeholder="First Name"/>
      </div>
        <div className={styles.s}>
          <p>Last Name</p>
          <input type="text" value={lname} onChange={(e) => setLastName(e.target.value)} placeholder="Last Name"/>
        </div>
      </div>
      <div className={styles.f}>
        <p>Email</p>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email"/>
      </div>
      <div className={styles.f}>
        <p>Subject</p>
      <input type="text" value={subject} onChange={(e) => setSubject(e.target.value)} placeholder="Subject"/>
      </div>
      <div className={styles.f}>
        <p>Message</p>
        <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Write your notes or questions here..."></textarea>
      </div>
      <button className={styles.submit}>SEND MESSAGE</button>
    </form>
  </section>
  )
}

export default Form