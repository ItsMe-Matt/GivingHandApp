import styles from '../styles/main.module.css'
import ButtonUI from '../Comps/ButtonUI'


function Home() {
  return (<div className={styles.main}>
    <div className={styles.landingPage}>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      

      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <p className={styles.caption}> 
        Helping, providing for, and nuturing the homeless.
      </p>
      <ButtonUI title="Let's Get Started" type="start" routeTo="/HomePage" />
      <ButtonUI title="Our Mission" type="mission" routeTo="/OurMission" />


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