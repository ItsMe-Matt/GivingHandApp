import ButtonUI from '../../Comps/ButtonUI'
import MissionUI from '../../Comps/MissionUI'
import TopNavUI from '../../Comps/TopNavUI'

import styles from '../../styles/ourMission.module.css'


function OurMission1() {
  return (<div className={styles.main}>
    <div className={styles.bg}>
      <TopNavUI routeTo="/OurMission"/>

      <MissionUI 
        header="Select Donation" 
        url="/static/donationPic.svg"
        body="Choose between donating time (volunteer hours) and a money donation!"/>

      <ButtonUI title="Continue" type="next" routeTo="/OurMission2" /> 



    </div>
  </div>

    
  )
  }

export default OurMission1;
