import ButtonUI from '../../../Comps/ButtonUI'
import styles from '../../../styles/SupportUs.module.css'
import SupportUs from '../../../Comps/SupportUs/index'
import BackButtonUI from '../../../Comps/BackButton/index'

function Home() {
  return (<div className={styles.SupportUs}>
    <div className={styles.bg}>
       <BackButtonUI routeTo="/SupportUs" />
       <SupportUs 
       header="Support Us"
       subheader="Select volunteer hours"
       supportingtext="(please select one)"
       />
    

       <ButtonUI title= "1 Hour per day" type="shadow" routeTo="/SupportUs/Sector" />
       <ButtonUI  title= "2 Hours per day" type="shadow" routeTo="/SupportUs/Sector" />
       <ButtonUI  title= "3 Hours per day" type="shadow" routeTo="/SupportUs/Sector" />
       <ButtonUI  title= "6 Hours per day" type="shadow" routeTo="/SupportUs/Sector" />

       <br></br><br></br><br></br><br></br>
    </div>
  </div>

    
  )
  }

export default Home;