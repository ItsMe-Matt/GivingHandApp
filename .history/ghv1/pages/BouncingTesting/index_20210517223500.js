import styles from '../../styles/main.module.css'
import ThanksUI from '../../Comps/ThanksUI'
import ButtonUI from '../../Comps/ButtonUI'

function ThankYou() 

{
  return (<div className={styles.main}>
    <div className={styles.bg}>

      <ThanksUI/>
      <ButtonUI title="Donate Again" type="start" routeTo="/SupportUs" />
      <ButtonUI title="Go to Home" type="continue" routeTo="/HomePage" />
      <br></br>
      <br></br>

    </div>
  </div>

    
  )
  }

export default ThankYou;