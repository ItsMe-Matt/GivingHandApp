import ButtonUI from '../../Comps/ButtonUI'
import NavbarUI from '../../Comps/NavBar'
import styles from '../../styles/main.module.css'
import BackButtonUI from '../../Comps/BackButton/index'

function Locations() {
  return (<div className={styles.main}>
    <div className={styles.bg}>
      <BackButtonUI />
      <h1>LOCATIONS</h1>
      <div className={styles.box}>
      <h4>Select a option below </h4>
       <ButtonUI title= "Shelter" routeTo="/Locations/Shelter" type="shadow" />
       <br></br>
       <ButtonUI  title= "Clothing" routeTo="/Locations/Clothing" type="shadow" />
       <br></br>
       <ButtonUI  title= "Hygiene Products" routeTo="/Locations/Hygiene" type="shadow" />
       <br></br>
       <ButtonUI  title= "Food" routeTo="/Locations/Food" type="shadow" />
       <br></br><br></br><br></br>
       <NavbarUI />

       </div>
    </div>
  </div>

    
  )
  }

export default Locations;