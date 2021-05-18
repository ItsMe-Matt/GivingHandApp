import ButtonUI from '../../../Comps/ButtonUI'
import styles from '../../../styles/SupportUs.module.css'


function Home() {
  return (<div className={styles.SupportUs}>
    <div className={styles.bg}>
       
    <SupportUs 
       header="Support Us"
       subheader="Which Organization do you want to help?"
       supportingtext="(please select one)"
       />
    
       <ButtonUI title= "1 Hour per day" />
       <br></br><br></br>
       <ButtonUI  title= "2 Hour per day" />
       <br></br><br></br>
       <ButtonUI  title= "3 Hour per day" />
       <br></br><br></br>
       <ButtonUI  title= "6 Hour per day"/>
       <br></br><br></br><br></br><br></br>
    </div>
  </div>

    
  )
  }

export default Home;