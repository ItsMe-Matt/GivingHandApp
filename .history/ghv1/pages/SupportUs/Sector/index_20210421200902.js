import ButtonUI from '../../../Comps/ButtonUI'
import styles from '../../../styles/SupportUs.module.css'
import SupportUs from '../../../Comps/SupportUs/index'
import BackButtonUI from '../../../Comps/BackButton/index'

function Home() {
  return (<div className={styles.SupportUs}>
    <div className={styles.bg}>

       
       <h1>Support Us</h1>
       <br></br><br></br><br></br>
       <h3>Choose a sector to help</h3>
        <p>(Please select one)</p>
       <ButtonUI title= "Food" routeTo="/SupportUs/Food" />

       <br></br><br></br>
       <ButtonUI  title= "Hygiene Products" routeTo="/SupportUs/Hygiene" />
       <br></br><br></br>
       <ButtonUI  title= "Clothing" routeTo="/SupportUs/Clothing" />
       <br></br><br></br>
       <ButtonUI  title= "Shelter" routeTo="/SupportUs/Shelter" />
       <br></br><br></br><br></br><br></br>
    </div>
  </div>

    
  )
  }

export default Home;