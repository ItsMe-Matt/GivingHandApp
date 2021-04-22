import ButtonUI from '../../Comps/ButtonUI'
import SupportUs from '../../Comps/SupportUs/index'
import styles from '../../styles/organ.module.css'
import BackButtonUI from '../../Comps/BackButton/index'
import OrganizationCards from '../../Comps/OrganizationCards/index'

function Home() {
  return (<div className={styles.organ}>
    <div className={styles.bg}>
       <BackButtonUI />
    <SupportUs 
       header="Support Us"
       subheader="Which Organization do you want to help?"
       supportingtext="(please select one)"
       />

       <ButtonUI title= "Dress for Success" type="shadow" />
       <br></br> <OrganizationCards style="opacity none" />
       <ButtonUI  title= "Big Brothers Vancouver" type="shadow" />
       <br></br> 
       <ButtonUI  title= "Downtown Eastside Women’s Centre" type="shadow" />
       <br></br>
       <ButtonUI  title= "Union Gospel Mission" type="shadow" />
       <br></br><br></br>
       <ButtonUI title="Continue" type="start" />
       <br></br>
    </div>
  </div>

    
  )
  }

export default Home;