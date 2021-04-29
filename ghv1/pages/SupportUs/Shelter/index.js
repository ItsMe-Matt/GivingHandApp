import ButtonUI from '../../../Comps/ButtonUI'
import SupportUs from '../../../Comps/SupportUs/index'
import styles from '../../../styles/SupportUs.module.css'

import TopNavUI from '../../../Comps/TopNavUI'


function Home() {
  return (<div className={styles.SupportUs}>
    <div className={styles.bg}>
       <TopNavUI routeTo="/SupportUs/Sector" />
       <SupportUs 
       header="Support Us"
       subheader="Which Organization do you want to help?"
       supportingtext="(please select one)"
       page="FourthSupport"
       />
    
       <ButtonUI title= "Covenant House Vancouver" type="shadow" routeTo="/Organization" />
       <ButtonUI  title= "Aboriginal Shelter Vancouver" type="shadow"  routeTo="/Organization" />
       <ButtonUI  title= "Lookout Emergency Aid" type="shadow" routeTo="/Organization" />
       <ButtonUI  title= "Rancity Housing & Support Society" type="shadow" routeTo="/Organization" />
       <br></br><br></br>
       <ButtonUI title="Continue" type="start" routeTo="/Organization" />
       <br></br>
    </div>
  </div>

    
  )
  }

export default Home;