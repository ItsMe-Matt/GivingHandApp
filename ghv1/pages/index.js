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
      <p className={styles.caption}> 
ajklsdaksdadalsdasdkadjalk
      </p>
      <ButtonUI title="Let's Get Started" type="start" routeTo="/SupportUs" />
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