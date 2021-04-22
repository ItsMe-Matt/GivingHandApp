import ButtonUI from '../../../Comps/ButtonUI'
import styles from '../../../styles/SupportUs.module.css'
import SupportUs from '../../../Comps/SupportUs/index'
import BackButtonUI from '../../../Comps/BackButton/index'

function Home() {
  return (<div className={styles.SupportUs}>
    <div className={styles.bg}>

       
    can you merge everything please? so we can continue to route shit
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