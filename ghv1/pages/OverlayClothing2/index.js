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
           <OrganizationCards organizationText="Big Brothers belong in the Greater Vancouver area." supportText="Their mission is to enable impactful mentoring relationships where children and youth can discover their power and potential, in collaboration with our local communities." url="/static/BigBrother.png" routeTo="/ThankYou10" />
       </div>
       <TopNavUI routeTo="/SupportUs/Clothing" />
    <SupportUs 
       header="Support Us"
       subheader="Which Organization do you want to help?"
       supportingtext="(please select one)"
       page="FourthSupport"
       />
       <ButtonUI title= "Dress for Success" type="shadow" />
       <ButtonUI  title= "Big Brothers Vancouver" type="shadow" />
       <ButtonUI  title= "Downtown Eastside Women's Centre" type="shadow" />
       <ButtonUI  title= "Union Gospel Mission" type="shadow" />
      </div>
    </div>
  </div>

    
  )
  }

export default Home;