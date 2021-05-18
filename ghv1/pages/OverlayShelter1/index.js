import ButtonUI from '../../Comps/ButtonUI'
import SupportUs from '../../Comps/SupportUs/index'
import OrganizationCards from '../../Comps/OrganizationCards/index'
import TopNavUI from '../../Comps/TopNavUI'

import styles from '../../styles/organ.module.css'


function Home() {
  return (<div className={styles.organ}>
    <div className={styles.bg}>
      <div className={styles.overlay}>
       <div className={styles.OrganizationCards}>
           <OrganizationCards organizationText="We help young people aged 16 to 24 who have fled physical, emotional and sexual abuse; those who have been forced from their homes; and those who have aged out of foster care." supportText="" url="/static/CovenantHouse.png" routeTo="/ThankYou13" />
       </div>
       <TopNavUI routeTo="/SupportUs/Shelter" />
    <SupportUs 
       header="Support Us"
       subheader="Which Organization do you want to help?"
       supportingtext="(please select one)"
       page="FourthSupport"
       />
       <ButtonUI title= "Covenant House Vancouver" type="shadow" />
       <ButtonUI  title= "Aboriginal Shelter Vancouver" type="shadow" />
       <ButtonUI  title= "Lookout Emergency Aid" type="shadow" />
       <ButtonUI  title= "Raincity Housing & Support Society" type="shadow" />
      </div>
    </div>
  </div>

    
  )
  }

export default Home;