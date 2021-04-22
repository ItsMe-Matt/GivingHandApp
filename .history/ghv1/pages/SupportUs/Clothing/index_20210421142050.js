import ButtonUI from '../../../Comps/ButtonUI'
import Button4UI from '../../../Comps/CustomComponent2/Button4'
import SupportUs from '../../../Comps/SupportUs/index'
import styles from '../../../styles/SupportUs.module.css'


function Home() {
  return (<div className={styles.SupportUs}>
    <div className={styles.bg}>
       <SupportUs />
       <h1>Support Us</h1>
       <br></br>
       <h3>What Organization do you want to help?</h3>
        <p>(Please select one)</p>
    
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