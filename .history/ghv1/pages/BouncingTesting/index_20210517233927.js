import styles from '../../styles/main.module.css'
import ReactAnimations from '../../Comps/Bouncing/index';
import HeadingCont from '../../Comps/Bouncing/index'

function Test() 

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

export default Test;