import ButtonUI from '../../../Comps/ButtonUI'
import Button4UI from '../../../Comps/CustomComponent2/Button4'
import SupportUs from '../../../Comps/SupportUs/index'
import styles from '../../../styles/SupportUs.module.css'
import BackButtonUI from '../../../Comps/BackButton/index'
import HomeSvgUI from '../../../Comps/Homesvg'


function Home() {
  return (<div className={styles.SupportUs}>
    <div className={styles.bg}>
       <BackButtonUI routeTo="/SupportUs/Sector" />
       <HomeSvgUI />
      <SupportUs 
       header="Support Us"
       subheader="Which Organization do you want to help?"
       supportingtext="(please select one)"
       />
       
    
       <ButtonUI title= "Donation Circle Society" type="shadow" routeTo="/Organization" />
       <ButtonUI  title= "Wish Drop In Centre" type="shadow" routeTo="/Organization" />
       <ButtonUI  title= "Directions Youth Services" type="shadow" routeTo="/Organization" />
       <ButtonUI  title= "Union Gospel Mission" type="shadow" routeTo="/Organization" />
       <br></br><br></br>
       <ButtonUI title="Continue" type="start" routeTo="/Organization" />
       <br></br>
    </div>
  </div>

    
  )
  }

export default Home;