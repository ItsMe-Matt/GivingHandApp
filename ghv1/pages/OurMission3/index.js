
import HeaderBlockUI from '../../Comps/CustomComponent3'
import ButtonUI from '../../Comps/ButtonUI'
import MissionUI from '../../Comps/MissionUI'
import NavbarUI from '../../Comps/NavBar'
import CalPostUI from '../../Comps/CalPost'
import Background from '../../Comps/Background'
import TopNavUI from '../../Comps/TopNavUI'


import styles from '../../styles/ourMission.module.css'


function OurMission() {
  return (<div className={styles.main}>
    <div className={styles.bg}>
      <TopNavUI routeTo="/OurMission2"/>

      <br></br>
      <MissionUI header="Pick an Organization" url="/static/organizationPic.svg" body="Choose the organization that you want to volunteer at or want your donation to go toward. More information will then be sent via email. You're all set!"/>
      <br/>
      <ButtonUI title="Let's Get Started" type="start" routeTo="/HomePage" />



    </div>
  </div>

    
  )
  }

export default OurMission;
