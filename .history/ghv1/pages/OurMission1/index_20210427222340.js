
import HeaderBlockUI from '../../Comps/CustomComponent3'
import ButtonUI from '../../Comps/ButtonUI'
import MissionUI from '../../Comps/OurMission'
import NavbarUI from '../../Comps/NavBar'
import CalPostUI from '../../Comps/CalPost'
import Background from '../../Comps/Background'
import BackButton from '../../Comps/BackButton'

import styles from '../../styles/ourMission.module.css'


function OurMission() {
  return (<div className={styles.main}>
    <div className={styles.bg}>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <MissionUI header="Select Donation" url="/static/donationPic.svg" body="Choose between donating time (volunteer hours) and a money donation!"/>

      <ButtonUI title="Next" type="next" routeTo="/OurMission2" /> 



    </div>
  </div>

    
  )
  }

export default OurMission;
