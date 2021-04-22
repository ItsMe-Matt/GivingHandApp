import HeaderBlockUI from '../../Comps/CustomComponent3'
import MoneyButtonUI from '../../Comps/CustomComponent4'
import SupportUs from '../../Comps/SupportUs/index'
import BackButtonUI from '../../Comps/BackButton'
import styles from '../../styles/main.module.css'
import ExitButtonUI from '../../Comps/ExitButton'
import OrganizationCardsUI from '../../Comps/OrganizationCards'


function SupportUI() {
  return (<div className={styles.main}>
    <div className={styles.bg}>

      <BackButtonUI/>

      <SupportUI 
       header="Support Us"
       subheader="Which Organization do you want to help?"
       supportingtext="(please select one)"
       />

      <MoneyButtonUI header="Money Donation" routeTo="/SupportUs/Amount" />
      <MoneyButtonUI header="Time (Volunteer)" routeTo="/SupportUs/Volunteer.hours" />


    </div>
  </div>

    
  )
  }

export default SupportUs;