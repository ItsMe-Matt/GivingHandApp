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
           <OrganizationCards organizationText="Directions Youth Services (a division of Family Services of Greater Vancouver) offers low-barrier programs and services to support youth under the age of 25 who are in crisis or experiencing homelessness as a result of abuse, neglect, substance use, or mental health challenges. We welcome and serve all youth." supportText="" url="/static/Wish.png" />
       </div>
       <TopNavUI routeTo="/SupportUs/Hygiene" />
    <SupportUs 
       header="Support Us"
       subheader="Which Organization do you want to help?"
       supportingtext="(please select one)"
       page="FourthSupport"
       />
       <ButtonUI title= "Donation Circle Society" type="shadow" />
       <ButtonUI  title= "Wish Drop in Centre" type="shadow" />
       <ButtonUI  title= "Directions Youth Services" type="shadow" />
       <ButtonUI  title= "Union Gospel Mission" type="shadow" />
      </div>
    </div>
  </div>

    
  )
  }

export default Home;