
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

      <TopNavUI routeTo="/OurMission1"/>
      <br/>

      <MissionUI header="Choose a Category" url="/static/categoryPic.svg" body="Select which sector you would like to volunteer at, or the category of items you want to donate."/>

      <ButtonUI title="Continue" type="next" routeTo="/OurMission3" />



    </div>
  </div>

    
  )
  }

export default OurMission;
