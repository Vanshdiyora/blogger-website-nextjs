import "@/styles/globals.css";
import Link from "next/link";
import style from '../styles/navbar.module.css'
export default function App({ Component, pageProps }) {
  return<>
  <div className={style.navbar}>
    <ul>
          <Link href='/'><li>Home</li></Link>
          <Link href='/about'><li>About</li></Link>
          <Link href='/blog'><li>Blog</li></Link>
          <Link href='/contact'><li>Contact</li></Link>
        </ul>
  </div>

   <Component {...pageProps} />
   </>;
}
