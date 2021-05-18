import ButtonUI from '../../../Comps/ButtonUI'
import styles from '../../../styles/supportUs.module.css'
import SupportUs from '../../../Comps/SupportUs/index'
import TopNavUI from '../../../Comps/TopNavUI'

function Home() {
  return (<div className={styles.SupportUs}>
    <div className={styles.bg}>
    <TopNavUI routeTo="/SupportUs"/>  
     <SupportUs 
       header="Support Us"
       subheader="Select an amount"
       supportingtext="(please select one)"
       page="SecondSupport"
       />
    

       <ButtonUI title= "$10" routeTo="/SupportUs/Sector" type="shadow" />
       <ButtonUI  title= "$25" routeTo="/SupportUs/Sector" type="shadow" />
       <ButtonUI  title= "$50" routeTo="/SupportUs/Sector" type="shadow" />
       <ButtonUI  title= "" type="input" routeTo="/SupportUs/Sector" />

       <br></br><br></br><br></br><br></br>
    </div>
  </div>

    
  )
  }

export default Home;