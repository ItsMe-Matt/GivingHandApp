import ButtonUI from '../../Comps/ButtonUI'
import SupportUs from '../../Comps/SupportUs/index'
import styles from '../../styles/organ.module.css'
import BackButtonUI from '../../Comps/BackButton/index'
import OrganizationCards from '../../Comps/OrganizationCards/index'

function Home() {
  return (<div className={styles.organ}>
    <div className={styles.bg}>
       <div className={styles.OrganizationCards}>
           <OrganizationCards />
       </div>
       <BackButtonUI routeTo="/SupportUs" />
    <SupportUs 
       header="Support Us"
       subheader="Which Organization do you want to help?"
       supportingtext="(please select one)"
       page="FifthSupport"
       />
       <ButtonUI title= "Dress for Success" type="shadow" />
       <ButtonUI  title= "Big Brothers Vancouver" type="shadow" />
       <ButtonUI  title= "Downtown Eastside Women’s Centre" type="shadow" />
       <ButtonUI  title= "Union Gospel Mission" type="shadow" />
       <br></br><br></br>
       <ButtonUI title="Continue" type="start" routeTo="/ThankYou" />
       <br></br>
    </div>
  </div>

    
  )
  }

export default Home;