import ButtonUI from '../../../Comps/ButtonUI'
import Button4UI from '../../../Comps/CustomComponent2/Button4'
import SupportUs from '../../../Comps/SupportUs/index'
import styles from '../../../styles/SupportUs.module.css'
import BackButtonUI from '../../../Comps/BackButton/index'
import OrganizationCards from '../../../Comps/OrganizationCards/index'
import HomeSvgUI from '../../Comps/Homesvg'

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

       <ButtonUI title= "Dress for Success" type="shadow" routeTo="/Organization" />
       <ButtonUI  title= "Big Brothers Vancouver" type="shadow" routeTo="/Organization" />
       <ButtonUI  title= "Downtown Eastside Women’s Centre" type="shadow" routeTo="/Organization" />
       <ButtonUI  title= "Union Gospel Mission" type="shadow" routeTo="/Organization" />
       <br></br><br></br>
       <ButtonUI title="Continue" type="start" routeTo="/Organization" />
       <br></br>
    </div>
  </div>

    
  )
  }

export default Home;