import styles from '../../../styles/main.module.css'
import AnimatedDropdown from "../../../Comps/ButtonTest/index";
import BackButton from '../../../Comps/BackButton/index'
import NavbarUI from '../../../Comps/NavBar'

function TestButton() {
    return (<div className={styles.main}>
      <div className={styles.bg}>
      
      <div className={styles.box}>
        <BackButton />
        
        <h1>Shelter</h1>
      
        

        
        <br></br>
        <AnimatedDropdown 
        Text="Covenant House Vancouver"
        Address="Address:  326 W Pender St, Vancouver, BC V6B 1T1"
        Hours="Hours: 24 Hours"
        Phone="Phone: (604) 685-7474"
        />
        <br></br><br></br>
        <br></br>
        <AnimatedDropdown 
        Text="Aboriginal Shelter Vancouver"
        Address=" Address: 201 Central St, Vancouver, BC V6A 4A9"
        Hours=" Hours: Open 7 p.m."
        Phone=" Phone: (604) 876 3601"
        />
        <br></br><br></br>
        <br></br>
        <AnimatedDropdown 
        Text="Quest Food Exchange"
        Address=" Address: 2020 Dundas St, Vancouver, BC V5L 1J4"
        Hours=" Hours: Open 9 a.m. - 5:45 p.m."
        Phone=" Phone: (604) 602-0186"
        />
        <br></br><br></br>
        <br></br>
        <AnimatedDropdown 
        Text="Aboriginal Front Door Society"
        Address=" Address: 384 Main St, Vancouver, BC V6A 2T1"
        Hours=" Hours: Opens 8 a.m. - 4 p.m."
        Phone=" Phone: (604) 697-5662"
        />
        <br></br><br></br>
        <br></br><br></br>
        <br></br><br></br>
        
        
        <NavbarUI />
      
      
        
      
      
         
    
         </div>
      </div>
    </div>
  
      
    )
    }
  
  export default TestButton;
