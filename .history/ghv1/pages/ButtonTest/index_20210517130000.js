import style from '../../styles/styles.module.css'
import styles from '../../styles/main.module.css'
import UnopDropdown from "unop-react-dropdown";
import AnimatedDropdown from "../../Comps/ButtonTest/index";

function Locations() {
    return (<div className={styles.main}>
      <div className={styles.bg}>
        
        
        <div className={styles.box}>
        <header>
        <h1>unop-react-dropdown</h1>
      </header>
      <div>
        <h3>Default dropdown</h3>
        <UnopDropdown trigger={<button>Click</button>}>
          <AnimatedDropdown />
          <AnimatedDropdown />
          <AnimatedDropdown title=""/>
        </UnopDropdown>

        
      </div>
         </div>
      </div>
    </div>
  
      
    )
    }
  
  export default Locations;
