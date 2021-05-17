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
       infoheader="Which Organization do you want to help?"
       subheader="Donation Type: "
       supportingtext="(please select one)"
       page="FourthSupport"
       />
       
    
       <ButtonUI title= "Donation Circle Society" type="shadow" routeTo="/OverlayHygiene1" />
       <ButtonUI  title= "Wish Drop In Centre" type="shadow" routeTo="/OverlayHygiene2" />
       <ButtonUI  title= "Directions Youth Services" type="shadow" routeTo="/OverlayHygiene3" />
       <ButtonUI  title= "Union Gospel Mission" type="shadow" routeTo="/OverlayHygiene4" />
       <br></br><br></br>
       <ButtonUI title="Continue" type="start" routeTo="/ThankYou" />
       <br></br>
    </div>
  </div>

    
  )
  }

export default Home;