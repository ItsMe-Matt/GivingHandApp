import styles from '../../../styles/main.module.css'
import AnimatedDropdown from "../../../Comps/ButtonTest/index";
import BackButton from '../../../Comps/BackButton/index'
import NavbarUI from '../../../Comps/NavBar'
import Bouncing from '../../../Comps/Bouncing/index'

function TestButton() {
    return (<div className={styles.main}>
      <div className={styles.bg}>
      
      <div className={styles.box}>
       <BackButton routeTo="/Locations"/>
        
        <Bouncing />
      
        

        
        <br></br>
        <AnimatedDropdown 
        Text="Donation Circle Society"
        Address="Address: 2487 Adanac St, Vancouver, BC V5K 2M3"
        Hours="Hours: 24 Hours"
        Phone="Phone:  (604) 253-7898"
        />
        <br></br><br></br>
        <br></br>
        <AnimatedDropdown 
        Text="Wish Drop In Centre"
        Address=" Address: 334 Alexander St, Vancouver, BC V6A 1C3"
        Hours=" Hours:  Opens 12 a.m. - 6 p.m."
        Phone=" Phone:  (604) 669-9474"
        />
        <br></br><br></br>
        <br></br>
        <AnimatedDropdown 
        Text="Directions Youth Services"
        Address=" Address: 1138 Burrard St, Vancouver, BC"
        Hours=" Hours: 24 hours"
        Phone=" Phone: (604) 669-1472"
        />
        <br></br><br></br>
        <br></br>
        <AnimatedDropdown 
        Text="Union Gospel Mission"
        Address=" Address: 601 E Hastings St, Vancouver, BC V6A 1J7"
        Hours=" Hours:  Open 24 hours"
        Phone=" Phone: (604) 253-3323"
        />
        <br></br><br></br>
        <br></br><br></br>
        <br></br><br></br><br></br>
        
        
        <NavbarUI />
      
      
        
      
      
         
    
         </div>
      </div>
    </div>
  
      
    )
    }
  
  export default TestButton;
