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
       infoheader="Which Organization would you like to help?"
       supportingtext="(please select one)"
       page="FourthSupport"
       />

       <ButtonUI title= "Dress for Success" type="shadow" routeTo="/OverlayClothing1" />
       <ButtonUI  title= "Big Brothers Vancouver" type="shadow" routeTo="/OverlayClothing2" />
       <ButtonUI  title= "Downtown Eastside Women’s Centre" type="shadow" routeTo="/OverlayClothing3" />
       <ButtonUI  title= "Union Gospel Mission" type="shadow" routeTo="/OverlayClothing4" />
       <br></br><br></br>
       <ButtonUI title="Continue" type="start" routeTo="/ThankYou" />
       <br></br>
    </div>
  </div>

    
  )
  }

export default Home;