import ButtonUI from '../../../Comps/ButtonUI'
import Button4UI from '../../../Comps/CustomComponent2/Button4'
import SupportUs from '../../../Comps/SupportUs/index'
import styles from '../../../styles/SupportUs.module.css'


function Home() {
  return (<div className={styles.SupportUs}>
    <div className={styles.bg}>
       
       <h1>Support Us</h1>
       <SupportUs />
       <h3>What Organization do you want to help?</h3>
        <p>(Please select one)</p>
    
       <ButtonUI title= "Donation Circle Society" />
       <br></br>
       <ButtonUI  title= "Wish Drop In Centre" />
       <br></br>
       <ButtonUI  title= "Directions Youth Services" />
       <br></br>
       <ButtonUI  title= "Union Gospel Mission"/>
       <br></br><br></br>
       <Button4UI/>
       <br></br>
    </div>
  </div>

    
  )
  }

export default Home;