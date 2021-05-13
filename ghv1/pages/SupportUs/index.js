import SupportUI from '../../Comps/SupportUs'
import TopNavUI from '../../Comps/TopNavUI'
import VolunteerButtonUI from '../../Comps/CustomComponent4'

import styles from '../../styles/supportUs.module.css'


function SupportUs() {
  return (<div className={styles.SupportUs}>
    <div className={styles.bg}>
      <TopNavUI routeTo="/HomePage" />

      <SupportUI 
       header="Support Us"
       subheader="How would you like to help?"
       supportingtext="(please select one)"
       page="FirstSupport"
       />
       <br></br>
      <VolunteerButtonUI  
      header="(Time) Volunteer"
      routeTo="/SupportUs/Volunteer.hours" />

      <VolunteerButtonUI 
      header="(Money) Donation"
      routeTo="/SupportUs/Amount" />



    </div>
  </div>

    
  )
  }

export default SupportUs;