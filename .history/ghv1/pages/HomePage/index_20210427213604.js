import ButtonUI from '../../Comps/ButtonUI'
import LogoUI from '../../Comps/Logo'
import NavbarUI from '../../Comps/NavBar'
import styles from '../../styles/main.module.css'
import BackButtonUI from '../../Comps/BackButton/index'
import HomeUI from '../../Comps/Home/box1'
import HomeUI from '../../Comps/Home/box2'

function home() {
  return (<div className={styles.main}>
    <div className={styles.bg}>
      <BackButtonUI routeTo="/LandingPage"/>
      <h1>HOME</h1>
      <div className={styles.box}>
        <br></br>
        <LogoUI/>
        <p>"Ending Vancouver's homelessness one step at a time."</p>
        <Home />
        <ButtonUI title="Our Mission" type="shadow" routeTo="/OurMission"/>
        <NavbarUI />
      </div>
    </div>
  </div>

    
  )
  }

export default home;