//import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Page from '../CustomComponents1/index.js';

export default function Home() {
  return (
    <div className={styles.container}>
        <Page/>
    </div>
  )
}