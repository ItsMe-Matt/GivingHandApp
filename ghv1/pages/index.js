import ButtonUI from '../Comps/ButtonUI'
import LogoUI from '../Comps/Logo'

import styles from '../styles/main.module.css'


function Home() {
  return (<div className={styles.main}>
    <div className={styles.landingPage}>


      <br></br>
      <br></br>
      <br></br>
      <LogoUI/>
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
      <p>
        Helping, providing for, and
        <br></br>
        nuturing the homeless.
      </p>
      <ButtonUI title="Let's Get Started" type="start" routeTo="/HomePage" />
      <ButtonUI title="Our Mission" type="mission" routeTo="/OurMission" />


    </div>
    
  </div>


  )
  }

export default Home;