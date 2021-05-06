import ButtonUI from '../../../Comps/ButtonUI'
import styles from '../../../styles/SupportUs.module.css'
import SupportUs from '../../../Comps/SupportUs/index'
import BackButtonUI from '../../../Comps/BackButton/index'
import TopNavUI from '../../../Comps/TopNavUI'

function Home() {
  return (<div className={styles.SupportUs}>
    <div className={styles.bg}>
       <TopNavUI routeTo="/SupportUs" />
       <SupportUs 
       header="Support Us"
       subheader="Donation Type: Time"
       infoheader="Select volunteer hours"
       supportingtext="(please select one)"
       page="SecondSupport"
       />
    

       <ButtonUI title= "1 Hour per day" type="shadow" routeTo="/SupportUs/Sector" />
       <ButtonUI  title= "2 Hours per day" type="shadow" routeTo="/SupportUs/Sector" />
       <ButtonUI  title= "3 Hours per day" type="shadow" routeTo="/SupportUs/Sector" />
       <ButtonUI  title= "Other" type="shadow" routeTo="/SupportUs/Sector" />

       <br></br><br></br><br></br><br></br>
    </div>
  </div>

    
  )
  }

export default Home;