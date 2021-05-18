import styles from '../../styles/main.module.css'
import AnimatedDropdown from "../../Comps/ButtonTest/index";
import BackButton from '../../Comps/BackButton/index'
import NavbarUI from '../../Comps/NavBar'

function TestButton() {
    return (<div className={styles.main}>
      <div className={styles.bg}>
      
      <div className={styles.box}>
        <BackButton />
        
        <h1 className="els">FOOD</h1>
      
        

        
        <br></br>
        <AnimatedDropdown Text="Helping Families in Need Society"/>
        <br></br><br></br>
        <br></br>
        <AnimatedDropdown Text="Greater Vancouver Food Bank"/>
        <br></br><br></br>
        <br></br><br></br>
        <AnimatedDropdown Text="Quest Food Exchange"/>
        <br></br><br></br>
        <br></br><br></br>
        <AnimatedDropdown 
        Text="Aboriginal Front Door Society"
        Ad="fhsd"
        />
        <br></br><br></br><br></br><br></br>
        
        
        <NavbarUI />
      
      
        
      
      
         
    
         </div>
      </div>
    </div>
  
      
    )
    }
  
  export default TestButton;
