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
           <OrganizationCards 
           organizationText="We’re a small group of dedicated volunteers who, for the last 38 years, have been picking up and distributing used household items to single Moms and Dads in need." 
           supportText="We work with over 85 community, government and charitable organizations to directly help more than 1,300 families each year. Our community stretches across the Lower Mainland." 
           url="/static/HelpingFamilies.png" 
           routeTo="ThankYou"/>
       </div>
       <TopNavUI routeTo="/SupportUs/Food" />
    <SupportUs 
       header="Support Us"
       subheader="Which Organization do you want to help?"
       supportingtext="(please select one)"
       page="FourthSupport"
       />
       <ButtonUI title= "Helping Families in Need Society" type="shadow" />
       <ButtonUI  title= "Greater Vancouver Food Bank" type="shadow" />
       <ButtonUI  title= "Quest Food Exchange" type="shadow" />
       <ButtonUI  title= "Aboriginal Front Door Society" type="shadow" />
      </div>
    </div>
  </div>

    
  )
  }

export default Home;