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
           <OrganizationCards organizationText="The Greater Vancouver Food Bank was set up as a temporary relief to the hunger crisis in 1983 and has grown significantly in the three decades since then." supportText="Today the GVFB provides assistance to around 8,500 individuals and families monthly across Vancouver, Burnaby, New Westminster, and the North Shore." url="/static/GreaterVancouver.png"/>
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