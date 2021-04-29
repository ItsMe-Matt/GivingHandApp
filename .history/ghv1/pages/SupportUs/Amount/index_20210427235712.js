import ButtonUI from '../../../Comps/ButtonUI'
import styles from '../../../styles/SupportUs.module.css'
import SupportUs from '../../../Comps/SupportUs/index'
import BackButtonUI from '../../../Comps/BackButton/index'
import HomeSvgUI from '../../../Comps/Homesvg'

function Home() {
  return (<div className={styles.SupportUs}>
    <div className={styles.bg}>
     <BackButtonUI/> 
     <HomeSvgUI routeTo/> 
     <SupportUs 
       header="Support Us"
       subheader="Which Organization do you want to help?"
       supportingtext="(please select one)"
       />
    

       <ButtonUI title= "$10" routeTo="/SupportUs/Sector" type="shadow" />
       <ButtonUI  title= "$25" routeTo="/SupportUs/Sector" type="shadow" />
       <ButtonUI  title= "$50" routeTo="/SupportUs/Sector" type="shadow" />
       <ButtonUI  title= "$100" routeTo="/SupportUs/Sector" type="shadow" />
       <ButtonUI  title= "Other" routeTo="/SupportUs/Sector" type="shadow" />

       <br></br><br></br><br></br><br></br>
    </div>
  </div>

    
  )
  }

export default Home;