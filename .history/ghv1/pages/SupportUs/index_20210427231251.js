import HeaderBlockUI from '../../Comps/CustomComponent3'
import MoneyButtonUI from '../../Comps/CustomComponent4'
import SupportUI from '../../Comps/SupportUs'
import BackButtonUI from '../../Comps/BackButton'
import styles from '../../styles/main.module.css'
import ExitButtonUI from '../../Comps/ExitButton'
import OrganizationCardsUI from '../../Comps/OrganizationCards'
import VolunteerButtonUI from '../../Comps/CustomComponent4/volunteer'

function SupportUs() {
  return (<div className={styles.main}>
    <div className={styles.bg}>

      <BackButtonUI/>


      <SupportUI 
       header="Support Us"
       subheader="Which Organization do you want to help?"
       supportingtext="(please select one)"
       />
       <br></br>
      <VolunteerButtonUI 
      header="Time (Volunteer)"
      routeTo="/SupportUs/Volunteer.hours" />
      <br></br><br></br><br></br>
      <MoneyButtonUI header="Money Donation" routeTo="/SupportUs/Amount" />



    </div>
  </div>

    
  )
  }

export default SupportUs;