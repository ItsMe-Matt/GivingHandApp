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
           <OrganizationCards organizationText="Quest’s Food Recovery and Redistribution model is an innovative idea in which Quest recovers quality surplus food and necessities from suppliers at all levels of the supply chain and redistributes these goods to clients of social service agencies, government and non-government programs, churches, schools and hospitals in a traditional grocery market setting." supportText="" url="/static/QuestFood.png" routeTo="/ThankYou3" />
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