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
           <OrganizationCards organizationText="The Vision of Aboriginal Front Door Society is composed of Aboriginal people that are able to walk through life with love, honor, respect, and compassion for all things in creation, including themselves." supportText="" url="/static/FrontDoor.png" />
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