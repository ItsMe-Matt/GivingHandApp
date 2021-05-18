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
        Hours=" Hours: Opens 4:30 p.m. - 10 am"
        Phone=" Phone: (604) 682-5556"
        />
        <br></br><br></br>
        <br></br>
        <AnimatedDropdown 
        Text="Lookout Emergency Aid"
        Address=" Address: 832 E Pender St, Vancouver, BC V6A 1W1"
        Hours=" Hours: Open 24 hours"
        Phone=" Phone: (604) 215-2445"
        />
        <br></br><br></br>
        <br></br>
        <AnimatedDropdown 
        Text="Rancity Housing & Support Society"
        Address=" Address: 1648 Commercial Dr, Vancouver, BC V5N 4A4
        "
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
