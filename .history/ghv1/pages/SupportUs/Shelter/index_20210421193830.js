import ButtonUI from '../../../Comps/ButtonUI'
import Button4UI from '../../../Comps/CustomComponent2/Button4'
import SupportUs from '../../../Comps/SupportUs/index'
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
    
       <ButtonUI title= "Covenant House Vancouver" />
       <br></br>
       <ButtonUI  title= "Aboriginal Shelter Vancouver" />
       <br></br>
       <ButtonUI  title= "Lookout Emergency Aid" />
       <br></br>
       <ButtonUI  title= "Rancity Housing & Support Society"/>
       <br></br><br></br>
       <Button4UI/>
       <br></br>
    </div>
  </div>

    
  )
  }

export default Home;