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
           <OrganizationCards organizationText="The mission of the Downtown Eastside Women’s Centre is to provide a safe, non-judgmental environment for women from all walks of life, who live and/or work in the Downtown Eastside." supportText="To achieve this goal, the Centre provides supportive surroundings with meals, counseling, advocacy and programs which nurture and empower members." url="/static/DowntownEastside.png" routeTo="/ThankYou11"/>
       </div>
       <TopNavUI routeTo="/SupportUs/Clothing" />
    <SupportUs 
       header="Support Us"
       subheader="Donation Type: Time"
       infoheader="Which Organization do you want to help?"
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