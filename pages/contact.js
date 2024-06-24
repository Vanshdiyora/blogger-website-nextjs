import React, { useState } from 'react'
import styles from '../styles/contact.module.css'

function Contact() {
  const [values,setValues]=useState(
    {
      name:'',
      email:'',
      mobile:'',
      desc:''
    }
  )
  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(values)
    fetch("http://localhost:3000/api/contact",{
      method:'POST',
      headers:{
        'Content-Type':'application/json',
      },
      body:JSON.stringify(values)
    })

  }
  const handleChange=(e)=>{
    const {name,value}=e.target;
    setValues({...values, [name]:value})
  }

  return (
    <div className={styles.container}>

      <form className={styles.formCont} onSubmit={handleSubmit}>
      <h2>Contact Us</h2>
      <div className={styles.inputCont}>
        <label>Name : </label>
        <input type='text' name='name' placeholder='Enter Your Name' onChange={handleChange} value={values.name}/>
      </div>
      <div className={styles.inputCont}>
        <label>Email : </label>
        <input type='text' name='email' placeholder='Enter Your Email' onChange={handleChange} value={values.email}/>
      </div>
      <div className={styles.inputCont}>
        <label>Description : </label>
        <input type='text' name='desc' placeholder='Enter Your Description'onChange={handleChange} value={values.desc}/>
      </div>
      <div className={styles.inputCont}>
        <label>Mobile Number : </label>
        <input type='text' name='mobile' placeholder='Enter Your Mobile No.'onChange={handleChange} value={values.mobile}/>
      </div>
      <button className={styles.btn} type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default Contact