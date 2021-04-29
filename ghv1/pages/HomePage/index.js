import ButtonUI from '../../Comps/ButtonUI'
import NavbarUI from '../../Comps/NavBar'
import styles from '../../styles/main.module.css'
import BackButtonUI from '../../Comps/BackButton/index'
import HomeUI from '../../Comps/HomeUI/box1'
import Home from '../../Comps/HomeUI/box2'
import House from '../../Comps/HomeUI/box3'
import Hommes from '../../Comps/HomeUI/box4'
import Image from '../../Comps/Image'
import HomePost from '../../Comps/HomePost'


function HomePage() {
  return (<div className={styles.main}>
    <div className={styles.bg}>
      <div className={styles.box}>

        <Image src="/static/logo.png" width="171px" height="131px" />
        <p className={styles.subtitle}>"Ending Vancouver's homelessness one step at a time."</p>

        <ButtonUI title="Donate Now!" type="start" routeTo="/SupportUs"/>
        <ButtonUI title="Our Mission" type="shadow" routeTo="/OurMission"/>

        <br/>

        <div className={styles.postCont}>
          <HomePost body="It is estimated that 80% of these homeless people have a chronic health issue." src="/static/heartbeat.svg"/>
          <HomePost body="It is estimated that 80% of these homeless people have a chronic health issue." src="/static/heartbeat.svg"/>
        </div>




        <br></br> 
        <div className={styles.nav}>
          <NavbarUI />
        </div>

      </div>
    </div>


  </div>

    
  )
  }

export default HomePage;