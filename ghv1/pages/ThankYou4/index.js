
import ThanksUI from '../../Comps/ThanksUI'
import ButtonUI from '../../Comps/ButtonUI'

import styles from '../../styles/main.module.css'
import TopNavUI from '../../Comps/TopNavUI';

function ThankYou() 

{
  return (<div className={styles.main}>
    <div className={styles.bg}>

      <TopNavUI routeTo="/OverlayFood4" />

      <ThanksUI supportingtext="Aboriginal Front Door Society" url="/static/FrontDoor.png" />
      <ButtonUI title="Donate Again" type="start" routeTo="/SupportUs" />
      <ButtonUI title="Go to Home" type="continue" routeTo="/HomePage" />
      <br></br>
      <br></br>

    </div>
  </div>

    
  )
  }

export default ThankYou;