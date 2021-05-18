import ButtonUI from '../../../Comps/ButtonUI'
import Button4UI from '../../../Comps/CustomComponent2/Button4'
import SupportUs from '../../../Comps/SupportUs/index'
import styles from '../../../styles/SupportUs.module.css'


function Home() {
  return (<div className={styles.SupportUs}>
    <div className={styles.bg}>
       
    <SupportUs 
       header="Support Us"
       subheader="Which Organization do you want to help?"
       supportingtext="(please select one)"
       />
       
    
       <ButtonUI title= "Dress for Success" />
       <br></br>
       <ButtonUI  title= "Big Brothers Vancouver" />
       <br></br>
       <ButtonUI  title= "Downtown Eastside Women’s Centre" />
       <br></br>
       <ButtonUI  title= "Union Gospel Mission"/>
       <br></br><br></br>
       <Button4UI />
       <br></br>
    </div>
  </div>

    
  )
  }

export default Home;