
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

      <MissionUI header="Pick an Organization" body="Choose the organization that you want to volunteer at or want your donation to go toward. More information will then be sent via email.
	  
	  You're all set!"/>
	
      <ButtonUI title="Let's Get Started"/>



    </div>
  </div>

    
  )
  }

export default OurMission;
