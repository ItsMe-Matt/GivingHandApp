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
       subheader="Donation Type: Time"
       infoheader="Choose a sector to help"
       supportingtext="(please select one)"
       page="ThirdSupport"
       />  

       <ButtonUI title= "Food/Kitchen" type="shadow" routeTo="/SupportUs/Food" />
       <ButtonUI title= "Hygiene Products" type="shadow" routeTo="/SupportUs/Hygiene" />
       <ButtonUI title= "Clothing Sorting" type="shadow" routeTo="/SupportUs/Clothing" />
       <ButtonUI title= "Shelter Maintenance" type="shadow" routeTo="/SupportUs/Shelter" />
    </div>
  </div>

    
  )
  }

export default Home;