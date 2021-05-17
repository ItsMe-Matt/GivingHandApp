import ButtonUI from '../../../Comps/ButtonUI'
import styles from '../../../styles/SupportUs.module.css'
import SupportUs from '../../../Comps/SupportUs/index'
import BackButtonUI from '../../../Comps/BackButton/index'
import TopNavUI from '../../../Comps/TopNavUI'


function Home() {
  return (<div className={styles.SupportUs}>
    <div className={styles.bg}>
      <TopNavUI routeTo="Amount"/>

    <SupportUs 
       header="Support Us"
       subheader="Donation Type: Money"
       infotext="Choose a sector to help"
       supportingtext="(please select one)"
       page="ThirdSupport"
       />  

       <ButtonUI title= "Food" type="shadow" routeTo="/SupportUs/Food2" />
       <ButtonUI title= "Hygiene Products" type="shadow" routeTo="/SupportUs/Hygiene2" />
       <ButtonUI title= "Clothing" type="shadow" routeTo="/SupportUs/Clothing2" />
       <ButtonUI title= "Shelter" type="shadow" routeTo="/SupportUs/Shelter2" />
    </div>
  </div>

    
  )
  }

export default Home;