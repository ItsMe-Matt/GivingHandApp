import SupportUI from '../../Comps/SupportUs'
import TopNavUI from '../../Comps/TopNavUI'
import ImageButton from '../../Comps/ImageButton'
import Bouncing from '../../Comps/Bouncing/index'
import styles from '../../styles/supportUs.module.css'


function SupportUs() {
  return (<div className={styles.SupportUs}>
    <div className={styles.bg}>
      <TopNavUI routeTo="/HomePage" />

      <Bouncing text="SUPPORT US" style={color="red"}/>


      <SupportUI 
       header=""
       subheader="How would you like to help?"
       supportingtext="(please select one)"
       page="FirstSupport"
       />

       <br></br>
      <ImageButton  
      header="(Time) Volunteer"
      routeTo="/SupportUs/Volunteer.hours" 
      body="Volunteer a few hours of your time to help out an organization of your choice"
      src="/ghv1/public/static/volunteer.png"
      />

      <ImageButton 
      header="(Money) Donation"
      routeTo="/SupportUs/Amount" 
      body="Donate money to support those at your chosen organization"
      src="/ghv1/public/static/money.png"
      />
      



    </div>
  </div>

    
  )
  }

export default SupportUs;