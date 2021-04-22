import ButtonUI from '../../../Comps/ButtonUI'
import Button4UI from '../../../Comps/CustomComponent2/Button4'
import SupportUs from '../../../Comps/SupportUs/index'
import styles from '../../../styles/SupportUs.module.css'
import BackButtonUI from '../../../Comps/BackButton/index'

function Home() {
  return (<div className={styles.SupportUs}>
    <div className={styles.bg}>
       <BackButtonUI />
       <SupportUs header="Support Us"
       subheader="Which Organization do you want to help?"
       supportingtext="(please select one)"
       />
       
        
    
       <ButtonUI title= "Helping Families in Need Society" />
       <br></br>
       <ButtonUI  title= "Greater Vancouver Food Bank" />
       <br></br>
       <ButtonUI  title= "Quest Food Exchange" />
       <br></br>
       <ButtonUI  title= "Aboriginal Front Door Society"/>
       <br></br><br></br>
       <Button4UI />
       <br></br>
    </div>
  </div>

    
  )
  }

export default Home;