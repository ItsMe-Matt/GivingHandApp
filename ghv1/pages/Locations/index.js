import ButtonUI from '../../Comps/ButtonUI'
import NavbarUI from '../../Comps/NavBar'
import styles from '../../styles/main.module.css'
import BackButtonUI from '../../Comps/BackButton/index'

function Home() {
  return (<div className={styles.main}>
    <div className={styles.bg}>
      <BackButtonUI />
      <h1>LOCATIONS</h1>
      <div className={styles.box}>
       <br></br><br></br><br></br>
    

       <ButtonUI title= "Shelter" routeTo="/Locations/Shelter" />
       <br></br><br></br>
       <ButtonUI  title= "Clothing" routeTo="/Locations/Clothing" />
       <br></br><br></br>
       <ButtonUI  title= "Hygiene Products" routeTo="/Locations/Hygiene" />
       <br></br><br></br>
       <ButtonUI  title= "Food" routeTo="/Locations/Food" />

       <br></br><br></br><br></br><br></br>

       <NavbarUI />

       </div>
    </div>
  </div>

    
  )
  }

export default Home;