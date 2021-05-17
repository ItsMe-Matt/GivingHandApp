import ButtonUI from '../../../Comps/ButtonUI'
import Button4UI from '../../../Comps/CustomComponent2/Button4'
import SupportUs from '../../../Comps/SupportUs/index'
import styles from '../../../styles/SupportUs.module.css'


function Home() {
  return (<div className={styles.SupportUs}>
    <div className={styles.bg}>
       
       <SupportUs header="jsdgh;sdjkghd"/>
       
        <p>(Please select one)</p>
    
       <ButtonUI title= "Helping Families in Need Society" />
       <br></br>
       <ButtonUI  title= "Greater Vancouver Food Bank" />
       <br></br>
       <ButtonUI  title= "Quest Food Exchange" />
       <br></br>
       <ButtonUI  title= "Aboriginal Front Door Society"/>
       <br></br><br></br>
       <Button4UI />
       <br></br>
    </div>
  </div>

    
  )
  }

export default Home;