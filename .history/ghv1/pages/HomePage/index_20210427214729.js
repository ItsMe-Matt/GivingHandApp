import ButtonUI from '../../Comps/ButtonUI'
import LogoUI from '../../Comps/Logo'
import NavbarUI from '../../Comps/NavBar'
import styles from '../../styles/main.module.css'
import BackButtonUI from '../../Comps/BackButton/index'
import HomeUI from '../../Comps/HomeUI/box1'
import Home from '../../Comps/HomeUI/box2'
import House from '../../Comps/HomeUI/box3'
import Hommes from '../../Comps/HomeUI/box4'


function home() {
  return (<div className={styles.main}>
    <div className={styles.bg}>
      <BackButtonUI routeTo="/LandingPage"/>
      <h1>HOME</h1>
      <div className={styles.box}>
        <br></br>
        <LogoUI/>
        <p>"Ending Vancouver's homelessness one step at a time."</p>
        <HomeUI paragraph="It is estimated that 80% of these homeless people have a chronic health issue."/>
        <Home/>
        <House />
        <Hommes />
        <ButtonUI title="Our Mission" type="shadow" routeTo="/OurMission"/>
        <NavbarUI />
      </div>
    </div>
  </div>

    
  )
  }

export default home;