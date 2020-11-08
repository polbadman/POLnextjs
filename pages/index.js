import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>صفحه اصلی برنامه</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          خوش آمدید <a href="http://polnet.ir">POLNET.IR!</a>
        </h1>
        <p>این یک پروژه دانشجویی برای تمرینی برابزارهای جاوااسکریپت بخصوص node.jsوفریمورک های React/nextمی باشد.</p>
        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://github.com/polbadman/POLnextjs" className={styles.card}>
            <h3>مستندات پروژه &rarr;</h3>
            <p>جهت برسی مستندات پروژه کلیک بفرمایید.</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="http://polnet.ir"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{'POLNET.IR'}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
