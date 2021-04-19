import HeaderBlockUI from '../../Comps/CustomComponent3'
import MoneyButtonUI from '../../Comps/CustomComponent4'
import SupportUI from '../../Comps/SupportUs'

import styles from '../../styles/main.module.css'


function SupportUs() {
  return (<div className={styles.main}>
    <div className={styles.bg}>

      
      <SupportUI/>
      <MoneyButtonUI />
      <MoneyButtonUI />


    </div>
  </div>

    
  )
  }

export default SupportUs;