import SupportUI from '../../Comps/SupportUs'
import TopNavUI from '../../Comps/TopNavUI'
import ImageButton from '../../Comps/ImageButton'

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
      <ImageButton  
      header="(Time) Volunteer"
      routeTo="/SupportUs/Volunteer.hours" />

      <ImageButton 
      header="(Money) Donation"
      routeTo="/SupportUs/Amount" />



    </div>
  </div>

    
  )
  }

export default SupportUs;