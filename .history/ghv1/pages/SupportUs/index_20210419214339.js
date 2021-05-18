import ButtonUI from '../../Comps/ButtonUI'
import styles from '../../styles/main.module.css'


function Home() {
  return (<div className={styles.main}>
    <div className={styles.bg}>
      
       <br></br><br></br><br></br>
    
       <ButtonUI title= "1 Hour per day" />
       <br></br><br></br>
       <ButtonUI  title= "1 Hour per day" />
       <br></br><br></br>
       <ButtonUI  title= "1 Hour per day" />
       <br></br><br></br>
       <ButtonUI  title= "Food"/>
       <br></br><br></br><br></br><br></br>
       

       

      
    </div>
  </div>

    
  )
  }

export default Home;