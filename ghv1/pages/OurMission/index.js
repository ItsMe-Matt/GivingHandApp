
import HeaderBlockUI from '../../Comps/CustomComponent3'
import ButtonUI from '../../Comps/ButtonUI'
import MissionUI from '../../Comps/OurMission'
import NavbarUI from '../../Comps/NavBar'
import CalPostUI from '../../Comps/CalPost'
import Background from '../../Comps/Background'

import styles from '../../styles/OurMission.module.css'


function OurMission() {
  return (<div className={styles.main}>
    <div className={styles.bg}>

      <MissionUI/>

      <ButtonUI />



    </div>
  </div>

    
  )
  }

export default OurMission;
