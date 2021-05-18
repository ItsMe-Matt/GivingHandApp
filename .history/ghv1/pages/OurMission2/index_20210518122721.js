
import ButtonUI from '../../Comps/ButtonUI'
import MissionUI from '../../Comps/MissionUI'
import TopNavUI from '../../Comps/TopNavUI'

import styles from '../../styles/ourMission.module.css'


function OurMission() {
  return (<div className={styles.main}>
    <div className={styles.bg}>

      <TopNavUI routeTo="/OurMission1"/>
      <br/>

      

      <ButtonUI title="Continue" type="next" routeTo="/OurMission3" />



    </div>
  </div>

    
  )
  }

export default OurMission;
