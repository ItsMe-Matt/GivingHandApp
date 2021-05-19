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
      routeTo="/SupportUs/Volunteer.hours" 
      body="Volunteer a few hours of your time to help out an organization of your choice."
      src="static/volunteer.png"
      />

      <ImageButton 
      header="(Money) Donation"
      routeTo="/SupportUs/Amount" 
      body="Donate a set amount of money to support those at your chosen organization."
      src="static/money.jpg"
      />
      



    </div>
  </div>

    
  )
  }

export default SupportUs;