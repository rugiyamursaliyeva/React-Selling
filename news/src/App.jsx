import React, { useState, useEffect } from 'react';
import axios from 'axios'
import styles from "./App.module.css"  
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Form from './components/form/Form';
import Section1 from './components/section1/Section1';
import Section2 from './components/section2/Section2';
import Section3 from './components/section3/Section3';
import Section4 from './components/section4/Section4';
import Section5 from './components/section5/Section5';
import Section6 from './components/section6/Section6';
import Section7 from './components/section7/Section7';
import Section8 from './components/section8/Section8';
import Section9 from './components/section9/Section9';
import Card from './components/card/Card';


const App = () => {
  const [data,setData]=useState([])
  const getData =()=>{
    axios.get("https://fakestoreapi.com/products").then((res)=>{
      setData(res.data)
    })
  }
  useEffect(()=>{
    getData()
  },[])

  return (
    <>
    <div>
      <Header/>
      <Section1/>
      <div style={{ display: "flex", flexWrap: "wrap", width: "100%", justifyContent: "center" }}>
      <div style={{ display: "flex", flexWrap: "wrap", width: "80%", justifyContent: "center" }}>
        {data && data.slice(0, 3).map((x, index) => (
          <Card key={index} item={x} />
        ))}
      </div>
      
      <div style={{ display: "flex", flexWrap: "wrap", width: "80%", justifyContent: "center"}}>
        {data && data.slice(3, 6).map((x, index) => (
          <Card key={index + 3} item={x} />
        ))}
      </div>
    </div>
    <Section2/>
    <Section3/>
    <Section4/>
    <Section5/>
    <Section6/>
    <Section7/>
    <Section8/>
    <Section9/>
    <Form/>
    <Footer/>
    </div>    
    </>
  )
}

export default App