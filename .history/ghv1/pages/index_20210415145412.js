
import HeaderBlockUI from '../Comps/CustomComponent3'
import ButtonUI from '../Comps/ButtonUI'
import MissionUI from '../Comps/OurMission'
import NavbarUI from '../Comps/NavBar'
import CalPostUI from '../Comps/CalPost'
import Background from '../Comps/Background'

import styles from '../styles/main.module.css'


function Home() {
  return (<div className={styles.main}>
    <div className={styles.bg}>

      <br></br><br></br><br></br><br></br><br></br><br></br>
      <ButtonUI />
      <br></br><br></br><br></br><br></br>
      <ButtonUI />
      <br></br><br></br><br></br><br></br>
      <ButtonUI />
      <br></br><br></br><br></br><br></br>
      <ButtonUI />
      <br></br><br></br><br></br><br></br>

      <NavbarUI />


    </div>
  </div>

    
  )
  }

export default Home;

