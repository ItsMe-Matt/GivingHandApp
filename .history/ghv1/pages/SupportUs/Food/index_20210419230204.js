import ButtonUI from '../../../Comps/ButtonUI'
import styles from '../../../styles/SupportUs.module.css'


function Home() {
  return (<div className={styles.SupportUs}>
    <div className={styles.bg}>
       
       <h1>Support Us</h1>
       <br></br><br></br><br></br>
       <h3>What Organization do you want to help</h3>
        <p>(Please select one)</p>
    
       <ButtonUI title= "$10" />
       <br></br><br></br>
       <ButtonUI  title= "$25" />
       <br></br><br></br>
       <ButtonUI  title= "$50" />
       <br></br><br></br>
       <ButtonUI  title= "Other"/>
       <br></br><br></br><br></br><br></br>
    </div>
  </div>

    
  )
  }

export default Home;