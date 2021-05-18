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
        
       <Bouncing text="Food"/>
      
        

        
        <br></br>
        <AnimatedDropdown 
        Text="Helping Families in Need Society"
        Address="Address: 1679 Gilmore Ave, Burnaby, BC V5C 5V9"
        Hours="Hours: 24 Hours"
        Phone="Phone: (604) 294-3087"
        />
        <br></br><br></br>
        <br></br>
        <AnimatedDropdown 
        Text="Greater Vancouver Food Bank"
        Address=" Address: 1428 Charles St, Vancouver, BC V5L 2S8"
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
        <br></br><br></br><br></br>
        
        
        <NavbarUI />
      
      
        
      
      
         
    
         </div>
      </div>
    </div>
  
      
    )
    }
  
  export default TestButton;
