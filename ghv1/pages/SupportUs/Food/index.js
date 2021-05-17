import ButtonUI from '../../../Comps/ButtonUI'

import SupportUs from '../../../Comps/SupportUs/index'
import styles from '../../../styles/supportUs.module.css'
import TopNavUI from '../../../Comps/TopNavUI'

function Home() {
  return (<div className={styles.SupportUs}>
    <div className={styles.bg}>
       <TopNavUI routeTo="/SupportUs/Sector" />
       <SupportUs 
       header="Support Us"
       subheader="Donation Type: "
       infoheader="Which Organization do you want to help?"
       supportingtext="(please select one)"
       page="FourthSupport"
       />
       
        
    
       <ButtonUI title= "Helping Families in Need Society" type="shadow" routeTo="/OverlayFood1" />
       <ButtonUI  title= "Greater Vancouver Food Bank" type="shadow" routeTo="/OverlayFood2" />
       <ButtonUI  title= "Quest Food Exchange" type="shadow" routeTo="/OverlayFood3" />
       <ButtonUI  title= "Aboriginal Front Door Society" type="shadow" routeTo="/OverlayFood4" />
       <br></br><br></br> 
       <ButtonUI title="Continue" type="start" routeTo="/ThankYou" />
       <br></br>
    </div>
  </div>

    
  )
  }

export default Home;