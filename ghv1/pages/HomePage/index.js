import ButtonUI from '../../Comps/ButtonUI'
import NavbarUI from '../../Comps/NavBar'
import BackButtonUI from '../../Comps/BackButton'
import Image from '../../Comps/Image'
import HomePost from '../../Comps/HomePost'

import styles from '../../styles/main.module.css'


function HomePage() {
  return (<div className={styles.main}>
    <div className={styles.box}>
        <BackButtonUI routeTo="LandingPage"/>

        <Image src="/static/logo.png" width="171px" height="131px" />
        <p className={styles.subtitle}>"Ending Vancouver's homelessness one step at a time."</p>

        <ButtonUI title="Donate Now!" type="start" routeTo="/SupportUs"/>
        <ButtonUI title="Our Mission" type="shadow" routeTo="/OurMission"/>



        <div className={styles.postCont}>
          <HomePost body="It is estimated that 80% of these homeless people have a chronic health issue." src="/static/heartbeat.svg"/>
          <HomePost body="70% of people in Vancouver are experiencing chronic homelessness." src="/static/heartbeat.svg" type="right"/>
          <HomePost body="The 2020 Metro Vancouver count found that in Vancouver, 2,095 residents identified as homeless." src="/static/homeIcon.svg"/>
        </div>

        <br></br> 
        
        <div className={styles.nav}>
          <NavbarUI />
        </div>

    </div>
  </div>


    
  )
  }

export default HomePage;