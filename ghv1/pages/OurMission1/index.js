
import HeaderBlockUI from '../../Comps/CustomComponent3'
import ButtonUI from '../../Comps/ButtonUI'
import MissionUI from '../../Comps/MissionUI'
import NavbarUI from '../../Comps/NavBar'
import CalPostUI from '../../Comps/CalPost'
import Background from '../../Comps/Background'
import BackButton from '../../Comps/BackButton'
import TopNavUI from '../../Comps/TopNavUI'

import styles from '../../styles/ourMission.module.css'
import BackButtonUI from '../../Comps/BackButton'


function OurMission() {
  return (<div className={styles.main}>
    <div className={styles.bg}>
      <TopNavUI routeTo="/OurMission"/>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <MissionUI header="Select Donation" url="/static/donationPic.svg" body="Choose between donating time (volunteer hours) and a money donation!"/>

      <ButtonUI title="Continue" type="next" routeTo="/OurMission2" /> 



    </div>
  </div>

    
  )
  }

export default OurMission;
