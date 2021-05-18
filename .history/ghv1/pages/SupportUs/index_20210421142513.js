import HeaderBlockUI from '../../Comps/CustomComponent3'
import MoneyButtonUI from '../../Comps/CustomComponent4'
import SupportUI from '../../Comps/SupportUs'
import BackButtonUI from '../../Comps/BackButton'
import styles from '../../styles/main.module.css'
import ExitButtonUI from '../../Comps/ExitButton'
import OrganizationCardsUI from '../../Comps/OrganizationCards'


function SupportUs() {
  return (<div className={styles.main}>
    <div className={styles.bg}>

      <BackButtonUI/>
      <SupportUI 
      header="Support Us"
      />
      <MoneyButtonUI header="Money Donation"/>
      <MoneyButtonUI header="Time (Volunteer)"/>

    </div>
  </div>

    
  )
  }

export default SupportUs;