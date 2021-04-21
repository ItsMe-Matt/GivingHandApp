
import HeaderBlockUI from '../../Comps/CustomComponent3'
import ButtonUI from '../../Comps/ButtonUI'
import MissionUI from '../../Comps/OurMission'
import NavbarUI from '../../Comps/NavBar'
import CalPostUI from '../../Comps/CalPost'
import Background from '../../Comps/Background'
import MoneyButtonUI from '../../Comps/CustomComponent4'

import styles from '../../styles/OurMission.module.css'


function Tester() {
  return (<div className={styles.main}>
    <div className={styles.bg}>

    <ButtonUI type="continue" />
    <ButtonUI type="select" />

    <ButtonUI />


    </div>
  </div>

    
  )
  }

export default Tester;
