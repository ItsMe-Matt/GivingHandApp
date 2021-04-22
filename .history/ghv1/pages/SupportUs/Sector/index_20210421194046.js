import ButtonUI from '../../../Comps/ButtonUI'
import styles from '../../../styles/SupportUs.module.css'
import styles from '../../../styles/SupportUs.module.css'
import BackButtonUI from '../../../Comps/BackButton/index'

function Home() {
  return (<div className={styles.SupportUs}>
    <div className={styles.bg}>
       
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