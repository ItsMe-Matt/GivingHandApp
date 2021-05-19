import ButtonUI from '../../Comps/ButtonUI'
import MissionUI from '../../Comps/MissionUI'
import TopNavUI from '../../Comps/TopNavUI'
import Bouncing from '../../Comps/Bouncing/index'
import styles from '../../styles/ourMission.module.css'


function OurMission() {
  return (<div className={styles.main}>
    <div className={styles.bg}>
      <TopNavUI />
      <Bouncing text/>

      <MissionUI 
        header="Ending Vancouver's homelessness one step at a time."
        url="/static/mission0Pic.png"
        width="250px"
        height="119px"
        body="The mission of Giving Hand is to end homelessness for the people of vancouver by providing a safe, temporary refuge and critical services to support them in healing, rebuilding their lives and integrating them back into a community. There are four simple steps."/>

      <ButtonUI title="Continue" type="next" routeTo="/OurMission1" />
    </div>
  </div>

    
  )
  }

export default OurMission;