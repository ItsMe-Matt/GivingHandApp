import styles from '../styles/main.module.css'
import ButtonUI from '../Comps/ButtonUI'


function Home() {
  return (<div className={styles.main}>
    <div className={styles.landingPage}>

      <ButtonUI title="To the Landing Page" routeTo="/LandingPage"/>


    </div>
      <style jsx>{`
      .caption {
        font-family: 'Rajdhani', sans-serif;
        color: green;
        font-size: 30px;
      }
      `}</style>
  </div>


  )
  }

export default Home;