import ButtonUI from '../../../Comps/ButtonUI'
import SupportUs from '../../../Comps/SupportUs/index'
import styles from '../../../styles/SupportUs.module.css'

import TopNavUI from '../../../Comps/TopNavUI'


function Home() {
  return (<div className={styles.SupportUs}>
    <div className={styles.bg}>
       <TopNavUI routeTo="/SupportUs/Sector2" />
       <SupportUs 
       header="Support Us"
       subheader="Donation Type: Money"
       infotext="Which Organization would you like to help?"
       supportingtext="(please select one)"
       page="FourthSupport"
       />
    
       <ButtonUI title= "Covenant House Vancouver" type="shadow" routeTo="/OverlayShelter1" />
       <ButtonUI  title= "Aboriginal Shelter Vancouver" type="shadow"  routeTo="/OverlayShelter2" />
       <ButtonUI  title= "Lookout Emergency Aid" type="shadow" routeTo="/OverlayShelter3" />
       <ButtonUI  title= "Raincity Housing & Support Society" type="shadow" routeTo="/OverlayShelter4" />
       <br></br><br></br>
       <ButtonUI title="Continue" type="start" routeTo="/ThankYou" />
       <br></br>
    </div>
  </div>

    
  )
  }

export default Home;