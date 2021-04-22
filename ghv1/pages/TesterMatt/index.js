
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

    
    <MissionUI header="Ending Vancouver's homelessness one step at a time" url="/static/Bubbles.svg" width="100px"/>
    
    <SupportUI />


    <Link href='/Locations/Clothing'>
    <ButtonUI title="Let's Get Started" type="start"/>
    </Link>
    <ButtonUI title="Our Mission" type="mission"/>

    </div>
  </div>

    
  )
  }

export default Tester;
