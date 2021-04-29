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
      <BackButtonUI routeTo="/"/>
      <h1>HOME</h1>
      <div className={styles.box}>
        <LogoUI/>
        <p>"Ending Vancouver's homelessness one step at a time."</p>
        <HomeUI paragraph="It is estimated that 80% of these homeless people have a chronic health issue."/>
        <Home paragraph="70% of people in Vancouver are experiencing chronic homelessness."/>
        <br></br> <br></br> <br></br><br></br><br></br>
        <House paragraph="The 2020 Metro Vancouver count found that in Vancouver, 2,095 residents identified as homeless."/>
        <Hommes paragraph="84% of the homelessness population were already living in Vancover when they found themselves with out a home.  "/>
        
        <br></br> <br></br> <br></br>
        <br></br> <br></br> <br></br>
        <br></br> <br></br> <br></br>
        <br></br> <br></br> <br></br>
        <ButtonUI title="Our Mission" type="shadow" routeTo="/OurMission"/>
        <br></br> 
        <NavbarUI />
      </div>
    </div>
  </div>

    
  )
  }

export default home;