import React, { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css'
import Link from "next/link";

const Blog = (props) => {
    const [blogs,setBlogs]=useState(props.data)
    

    return <div className={styles.main}>
        <h2>Blogs</h2>
        {
            blogs.map((item)=>{
                return(
                    <div className={styles.blogCont}>
                        <Link href={`blogPost/${item.slug}`}>
                        <h3>{item.title}</h3>
                        </Link>
                        <p>{item.content.substr(0, 140)}...</p>
                    </div>
                )
            })
        }
    </div>;

};

export async function getStaticProps(context) {
      
    const res = await fetch("http://localhost:3000/api/allBlogs")
    const data = await res.json()
   
    return { props: { data } }
  }
 
export default Blog;
