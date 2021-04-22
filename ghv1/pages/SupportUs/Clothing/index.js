import ButtonUI from '../../../Comps/ButtonUI'
import Button4UI from '../../../Comps/CustomComponent2/Button4'
import styles from '../../../styles/SupportUs.module.css'


function Home() {
  return (<div className={styles.SupportUs}>
    <div className={styles.bg}>
       
       <h1>Support Us</h1>
       <br></br>
       <h3>What Organization do you want to help?</h3>
        <p>(Please select one)</p>
    
       <ButtonUI title= "Dress for Success" type="shadow" />
       <br></br>
       <ButtonUI  title= "Big Brothers Vancouver" type="shadow" />
       <br></br>
       <ButtonUI  title= "Downtown Eastside Women’s Centre" type="shadow" />
       <br></br>
       <ButtonUI  title= "Union Gospel Mission" type="shadow" />
       <br></br><br></br>
       <ButtonUI title="Continue" type="start" />
       <br></br>
    </div>
  </div>

    
  )
  }

export default Home;