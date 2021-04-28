import ButtonUI from '../../Comps/ButtonUI'
import LogoUI from '../../Comps/Logo'
import NavbarUI from '../../Comps/NavBar'
import styles from '../../styles/main.module.css'
import BackButtonUI from '../../Comps/BackButton/index'

function home() {
  return (<div className={styles.main}>
    <div className={styles.bg}>
      <BackButtonUI routeTo="/LandingPage"/>
      <h1>HOME</h1>
      <div className={styles.box}>
        <br></br>
        <LogoUI/>
        <p>"Ending Vancouver's homelessness one step at a time."</p>
        <br></br>
        <br></br>
        <ButtonUI title="our mission" type="shadow" routeTo="/OurMission"/>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <NavbarUI />
      </div>
    </div>
  </div>

    
  )
  }

export default home;