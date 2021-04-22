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
       <ButtonUI title= "Food" type="shadow" routeTo="/SupportUs/Food" />
       <ButtonUI  title= "Hygiene Products" type="shadow" routeTo="/SupportUs/Hygiene" />
       <ButtonUI  title= "Clothing" type="shadow" routeTo="/SupportUs/Clothing" />
       <ButtonUI  title= "Shelter" type="shadow" routeTo="/SupportUs/Shelter" />
       <br></br><br></br><br></br><br></br>
    </div>
  </div>

    
  )
  }

export default Home;