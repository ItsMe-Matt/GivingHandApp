import ButtonUI from '../../../Comps/ButtonUI'
import styles from '../../../styles/SupportUs.module.css'
import SupportUs from '../../../Comps/SupportUs/index'
import BackButtonUI from '../../../Comps/BackButton/index'

function Home() {
  return (<div className={styles.SupportUs}>
    <div className={styles.bg}>
       <BackButtonUI />
       <SupportUs 
       header="Support Us"
       subheader="Which Organization do you want to help?"
       supportingtext="(please select one)"
       
       />
       <ButtonUI title= "Food"/>
       <br></br><br></br>
       <ButtonUI  title= "Hygiene Products" />
       <br></br><br></br>
       <ButtonUI  title= "Clothing" />
       <br></br><br></br>
       <ButtonUI  title= "Shelter"/>
       <br></br><br></br><br></br><br></br>
    </div>
  </div>

    
  )
  }

export default Home;