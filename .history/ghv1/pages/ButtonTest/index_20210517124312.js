import style from '../../styles/styles.module.css'
import styles from '../../styles/main.module.css'
import UnopDropdown from "unop-react-dropdown";
import AnimatedDropdown from "../../Comps/ButtonTest/index";

function Locations() {
    return (<div className={styles.main}>
      <div className={styles.bg}>
        <AnimatedDropdown />
        
        <div className={styles.box}>
        <header>
        <h1>unop-react-dropdown</h1>
      </header>
      <div>
        <h3>Default dropdown</h3>
        <UnopDropdown trigger={<button>Click</button>}>
          <div>I am random</div>
          <div>I am random</div>
          <div>I am random</div>
        </UnopDropdown>
      </div>
         </div>
      </div>
    </div>
  
      
    )
    }
  
  export default Locations;
