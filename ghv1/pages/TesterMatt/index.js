
import Link from 'next/link'

import HeaderBlockUI from '../../Comps/CustomComponent3'
import ButtonUI from '../../Comps/ButtonUI'
import MissionUI from '../../Comps/OurMission'
import NavbarUI from '../../Comps/NavBar'
import CalPostUI from '../../Comps/CalPost'
import Background from '../../Comps/Background'
import MoneyButtonUI from '../../Comps/CustomComponent4'
import SupportUI from '../../Comps/SupportUs'


import styles from './tester.module.css'


function Tester() {
  return (<div className={styles.main}
 >
    <div className={styles.bg}>
    <SupportUI 
       header="Support Us"
       subheader="Which Organization do you want to help?"
       supportingtext="(please select one)"
       boxC1="#FFFFFF"
       boxC2="#94855d"
       />

    </div>
  </div>

    
  )
  }

export default Tester;
