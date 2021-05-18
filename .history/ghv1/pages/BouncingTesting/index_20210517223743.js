import styles from '../../styles/main.module.css'
import Bouncing from '../../Comps/Bouncing/index'
import ReactAnimations from '../../Comps/Bouncing/index';

function Bounce() 

{
  return (<div className={styles.main}>
    <div className={styles.bg}>

      <ReactAnimations />
      
      <br></br>
      <br></br>

    </div>
  </div>

    
  )
  }

export default Bounce;