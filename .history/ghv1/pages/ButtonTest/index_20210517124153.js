import styles from '../../styles/styles.module.css'
import style from '../../styles/main.module.css'
import UnopDropdown from "unop-react-dropdown";
import AnimatedDropdown from "../../Comps/ButtonTest/index";

function Locations() {
    return (<div className={styles.main}>
      <div className={styles.bg}>
        <BackButtonUI />
        
        <div className={styles.box}>
        <h1>LOCATIONS</h1>
        <h4>Select a sector below to find the "Address, Hours, and Phone Number" of each organization</h4>
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
