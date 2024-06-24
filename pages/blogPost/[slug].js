import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import styles from '../../styles/Home.module.css'
const slug = (props) => {

    const [blog, setBlog] = useState(props.data);

    

    return <div className={styles.container}>
        <main className={styles.main}>
            <h1>{blog && blog.title}</h1>
            <hr />
            <div>
                {blog && blog.content}
            </div>
        </main>
    </div>;
};


export async function getServerSideProps(context) {
      
        const { slug } = context.query;
        let res=await fetch(`http://localhost:3000/api/getBlog?slug=${slug}`)
        let data =await res.json()
    return { props: { data } }
  }
 


export default slug;
