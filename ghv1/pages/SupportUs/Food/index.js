import ButtonUI from '../../../Comps/ButtonUI'
import Button4UI from '../../../Comps/CustomComponent2/Button4'
import SupportUs from '../../../Comps/SupportUs/index'
import styles from '../../../styles/SupportUs.module.css'
import BackButtonUI from '../../../Comps/BackButton/index'

function Home() {
  return (<div className={styles.SupportUs}>
    <div className={styles.bg}>
       <BackButtonUI routeTo="/SupportUs/Sector" />
       <SupportUs 
       header="Support Us"
       subheader="Which Organization do you want to help?"
       supportingtext="(please select one)"
       page="FourthSupport"
       />
       
        
    
       <ButtonUI title= "Helping Families in Need Society" type="shadow" routeTo="/Organization" />
       <ButtonUI  title= "Greater Vancouver Food Bank" type="shadow" routeTo="/Organization" />
       <ButtonUI  title= "Quest Food Exchange" type="shadow" routeTo="/Organization" />
       <ButtonUI  title= "Aboriginal Front Door Society" type="shadow" routeTo="/Organization" />
       <br></br><br></br> 
       <ButtonUI title="Continue" type="start" routeTo="/Organization" />
       <br></br>
    </div>
  </div>

    
  )
  }

export default Home;