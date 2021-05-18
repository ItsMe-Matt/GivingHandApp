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
           <OrganizationCards organizationText="'A home for every person' is a lofty goal. We believe it is 100% achievable and benefits all of us. And we are confident that if we all work together, we can achieve this goal sooner than we ever thought possible." supportText="" url="/static/Raincity.png" routeTo="/ThankYou16" />
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