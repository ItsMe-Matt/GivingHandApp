import ButtonUI from '../../../Comps/ButtonUI'
import styles from '../../../styles/supportUs.module.css'
import SupportUs from '../../../Comps/SupportUs/index'
import BackButtonUI from '../../../Comps/BackButton/index'
import TopNavUI from '../../../Comps/TopNavUI'


function Home() {
  return (<div className={styles.SupportUs}>
    <div className={styles.bg}>
      <TopNavUI routeTo="Volunteer.hours"/>

    <SupportUs 
       header="Support Us"
       subheader="Donation Type: "
       infoheader="Choose a sector to help"
       supportingtext="(please select one)"
       page="ThirdSupport"
       />  

       <ButtonUI title= "Food" type="shadow" routeTo="/SupportUs/Food" />
       <ButtonUI title= "Hygiene Products" type="shadow" routeTo="/SupportUs/Hygiene" />
       <ButtonUI title= "Clothing" type="shadow" routeTo="/SupportUs/Clothing" />
       <ButtonUI title= "Shelter" type="shadow" routeTo="/SupportUs/Shelter" />
    </div>
  </div>

    
  )
  }

export default Home;