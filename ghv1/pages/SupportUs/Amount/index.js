import ButtonUI from '../../../Comps/ButtonUI'
import styles from '../../../styles/SupportUs.module.css'


function Home() {
  return (<div className={styles.SupportUs}>
    <div className={styles.bg}>
       
       <h1>Support Us</h1>
       <br></br><br></br><br></br>
       <h3>Select an Amount</h3>
        <p>(Please select one)</p>
    
       <ButtonUI title= "$10" routeTo="/SupportUs/Sector" type="shadow" />
       <ButtonUI  title= "$25" routeTo="/SupportUs/Sector" type="shadow" />
       <ButtonUI  title= "$50" routeTo="/SupportUs/Sector" type="shadow" />
       <ButtonUI  title= "$100" routeTo="/SupportUs/Sector" type="shadow" />
       <br></br><br></br><br></br><br></br>
    </div>
  </div>

    
  )
  }

export default Home;