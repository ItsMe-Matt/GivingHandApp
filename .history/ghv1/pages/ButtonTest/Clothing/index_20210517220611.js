import styles from '../../../styles/main.module.css'
import AnimatedDropdown from "../../../Comps/ButtonTest/index";
import BackButton from '../../../Comps/BackButton/index'
import NavbarUI from '../../../Comps/NavBar'

function TestButton() {
    return (<div className={styles.main}>
      <div className={styles.bg}>
      
      <div className={styles.box}>
        <BackButton routeTo="/ButtonTest"/>
        
        <h1 style={{
            color:"#6B5DA9",
        }}>Clothing</h1>
        
        <hr>gg</hr>
      
        

        
        <br></br>
        <AnimatedDropdown 
        Text="Dress for Success"
        Address="Address: 675 W Hastings St, Vancouver, BC V6B 1N9"
        Hours="Hours: Open 9 a.m. - 5 p.m."
        Phone="Phone: (604) 408-7923"
        />
        <br></br><br></br>
        <br></br>
        <AnimatedDropdown 
        Text="Big Brothers Vancouver"
        Address=" Address: 1193 Kingsway Unit 102, Vancouver, BC V5V 3C9"
        Hours=" Hours: Open 9 a.m. - 5 p.m."
        Phone=" Phone: (604) 876-2447"
        />
        <br></br><br></br>
        <br></br>
        <AnimatedDropdown 
        Text="Downtown Eastside Women’s Centre"
        Address=" Address: 302 Columbia St, Vancouver, BC V6A 4J1"
        Hours=" Hours: 24 hours"
        Phone=" Phone:  (604) 681-8480"
        />
        <br></br><br></br>
        <br></br>
        <AnimatedDropdown 
        Text="Union Gospel Mission"
        Address=" Address: 601 E Hastings St, Vancouver, BC V6A 1J7"
        Hours=" Hours: Open 24 hours"
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
