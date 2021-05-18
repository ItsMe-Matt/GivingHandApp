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
           <OrganizationCards organizationText="In a world that’s broken by poverty and addiction, we are determined to offer restoration to those in need." supportText="We do this by coming alongside men, women, and children to provide a hand up towards hope and recovery." url="/static/UnionGospel.png" routeTo="/ThankYou12" />
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