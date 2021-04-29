import ButtonUI from '../../../Comps/ButtonUI'
import styles from '../../../styles/SupportUs.module.css'
import SupportUs from '../../../Comps/SupportUs/index'
import BackButtonUI from '../../../Comps/BackButton/index'
import HomeSvgUI from '../../../Comps/Homesvg'
import TopNavUI from '../../../Comps/TopNavUI'


function Home() {
  return (<div className={styles.SupportUs}>
    <div className={styles.bg}>
      <TopNavUI routeTo="Volunteer.hours"/>

    <SupportUs 
       header="Support Us"
       subheader="Choose a sector to help"
       supportingtext="(please select one)"

       page="ThirdSupport"

       />   


       <ButtonUI title= "Food" type="shadow" routeTo="/SupportUs/Food" />
       <br></br>
       <ButtonUI title= "Hygiene Products" type="shadow" routeTo="/SupportUs/Hygiene" />
       <br></br>
       <ButtonUI title= "Clothing" type="shadow" routeTo="/SupportUs/Clothing" />
       <br></br>
       <ButtonUI title= "Shelter" type="shadow" routeTo="/SupportUs/Shelter" />
       <br></br><br></br><br></br><br></br>
    </div>
  </div>

    
  )
  }

export default Home;