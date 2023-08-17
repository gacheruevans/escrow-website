import Head from 'next/head';
import { Navbar, Welcome, Footer, Services, Transactions } from '../components';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
          <title>Home | GrapeSwap</title>
          <link rel="icon" href="/assets/grapesco.ico" />
      </Head>
      <Navbar />
      <div className={styles.main}>
        <div className="gradient-bg-welcome">
          <Welcome />
        </div>
        <Services />
        <Transactions />
      </div>
      <Footer />
    </div>
  )
}
