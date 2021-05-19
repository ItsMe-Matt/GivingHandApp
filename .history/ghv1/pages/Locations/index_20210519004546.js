import ButtonUI from '../../Comps/ButtonUI'
import NavbarUI from '../../Comps/NavBar'
import styles from '../../styles/main.module.css'
import BackButtonUI from '../../Comps/BackButton/index'
import Bouncing from '../../Comps/Bouncing/index'


function Locations({

}) {

 
  return (<div className={styles.main}>
    <div className={styles.bg}>
      <div className={styles.box}>
        <BackButtonUI />
        <Bouncing text="LOCATION"
        />
      <h4 style={{
        color:"#6B5DA9",
        fontFamily:"Helvetica"
      }}>Select a sector below to find the "Address, Hours, and Phone Number" of each organization</h4>
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