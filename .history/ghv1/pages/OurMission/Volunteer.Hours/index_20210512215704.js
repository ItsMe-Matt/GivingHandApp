
import HeaderBlockUI from '../../../Comps/CustomComponent3'
import ButtonUI from '../../../Comps/ButtonUI'
import MissionUI from '../../../Comps/MissionUI'
import NavbarUI from '../../../Comps/NavBar'
import CalPostUI from '../../../Comps/CalPost'
import Background from '../../../Comps/Background'

import styles from '


function OurMission() {
  return (<div className={styles.main}>
    <div className={styles.bg}>


      <ButtonUI/>
      <MissionUI />
      <CalPostUI />
      <ButtonUI />
      <NavbarUI />


    </div>
  </div>

    
  )
  }

export default OurMission;
