import style from '../../styles/styles.module.css'
import styles from '../../styles/main.module.css'
import UnopDropdown from "unop-react-dropdown";
import AnimatedDropdown from "../../Comps/ButtonTest/index";
import BackButtonUI from '../../../Comps/BackButton/index'

function TestButton() {
    return (<div className={styles.main}>
      <div className={styles.bg}>
        
        
        <div className={styles.box}>
        <header>
        <h1>FOOD</h1>
      </header>
      <div>
        <AnimatedDropdown />
      </div>
         
         
         
         </div>
      </div>
    </div>
  
      
    )
    }
  
  export default TestButton;
