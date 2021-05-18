
import ButtonUI from '../../Comps/ButtonUI'
import MissionUI from '../../Comps/MissionUI'
import TopNavUI from '../../Comps/TopNavUI'

import styles from '../../styles/ourMission.module.css'


function OurMission() {
  return (<div className={styles.main}>
    <div className={styles.bg}>

      <TopNavUI routeTo="/OurMission1"/>
      <br/>

      <MissionUI header="Choose a Category" url="/static/categoryPic.svg" body="Select which sector you would like to volunteer at, or the category of items you want to donate."/>

      



    </div>
  </div>

    
  )
  }

export default OurMission;
