import Head from "next/head";
import styles from "../styles/Home.module.css";
import Career from "./career";
export default function Home({ data }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Quillbot Careers</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <header className={styles.header}>
          <div className={styles.horizontal}>
          <img className={styles.image} src="/quilly.png"/>
            <h2 className={styles.h2}>  QuillBot</h2>
          </div>
            
          
        </header>
<br></br>
        <h4 className={styles.title}>Lets Rewrite Communications</h4>
        <h4 className={styles.title}>Together</h4>
        <p className={styles.description}>
          At QuillBot we are pioneering the transformation of paraphrasing using
          state-of-the-art AI. QuillBot is looking for world-class talent to
          change the way people write. Send an email to{" "}
          <a className={styles.text} href="mailto:hr@quillbot.com">
            hr@quillbot.com
          </a>{" "}
          or apply{" "}
          <a className={styles.text} href="">
            here
          </a>{" "}
          , if you’d like to help us lead the way.
        </p>
        <Career data={data} />
      </main>

      <footer className={styles.footer}>
        <table className={styles.table}>
          <tr>
            <td>Products</td>
            <td>Services</td>
            <td>Support</td>
            <td>Community</td>
          </tr>
          <tr>
            <td>Paraphraser</td>
            <td>Premium</td>
            <td>FAQ</td>
            <td>Team</td>
          </tr>
          <tr>
            <td>Summariser</td>
            <td>API Access</td>
            <td>Contact Us</td>
            <td>Blog</td>
          </tr>
          <tr>
            <td></td>
            <td>Affiliate</td>

            <td></td>
            <td>Careers</td>
          </tr>
        </table>
      </footer>
    </div>
  );
}

export async function getServerSideProps() {
  const url = "https://sheetsu.com/apis/v1.0su/b3f942bdd985";
  const res = await fetch(url);
  const data = await res.json();
  return { props: { data } };
}
