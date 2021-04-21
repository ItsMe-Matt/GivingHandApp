
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

      <MissionUI header="Choose a Category" body="Select which sector you would like to volunteer at, or the category of items you want to donate."/>

      <ButtonUI title="Next"/>



    </div>
  </div>

    
  )
  }

export default OurMission;
