import ButtonUI from '../../../Comps/ButtonUI'
import Button4UI from '../../../Comps/CustomComponent2/Button5'
import styles from '../../../styles/SupportUs.module.css'


function Home() {
  return (<div className={styles.SupportUs}>
    <div className={styles.bg}>
       
       <h1>Support Us</h1>
       <br></br><br></br>
       <h3>What Organization do you want to help?</h3>
        <p>(Please select one)</p>
    
       <ButtonUI title= "Helping Families in Need Society" />
       <br></br>
       <ButtonUI  title= "Greater Vancouver Food Bank" />
       <br></br>
       <ButtonUI  title= "Quest Food Exchange" />
       <br></br>
       <ButtonUI  title= "Aboriginal Front Door Society"/>
       <br></br>
       <Button4UI title= "Continue"/>
       <br></br>
    </div>
  </div>

    
  )
  }

export default Home;