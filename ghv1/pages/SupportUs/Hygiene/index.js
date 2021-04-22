import ButtonUI from '../../../Comps/ButtonUI'
import Button4UI from '../../../Comps/CustomComponent2/Button4'
import SupportUs from '../../../Comps/SupportUs/index'
import styles from '../../../styles/SupportUs.module.css'
import BackButtonUI from '../../../Comps/BackButton/index'

function Home() {
  return (<div className={styles.SupportUs}>
    <div className={styles.bg}>
       <BackButtonUI />
      <SupportUs 
       header="Support Us"
       subheader="Which Organization do you want to help?"
       supportingtext="(please select one)"
       />
       
    
       <ButtonUI title= "Donation Circle Society" type="shadow" />
       <ButtonUI  title= "Wish Drop In Centre" type="shadow" />
       <ButtonUI  title= "Directions Youth Services" type="shadow" />
       <ButtonUI  title= "Union Gospel Mission" type="shadow" />
       <br></br><br></br>
       <ButtonUI title="Continue" type="start" />
       <br></br>
    </div>
  </div>

    
  )
  }

export default Home;