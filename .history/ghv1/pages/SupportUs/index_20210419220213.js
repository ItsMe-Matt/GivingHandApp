import ButtonUI from '../../Comps/ButtonUI'
import styles from '../../styles/main.module.css'


function Home() {
  return (<div className={styles.main}>
    <div className={styles.bg}>
       <h1>Support Us</h1>
       <br></br><br></br><br></br>
       <h3>Select volunteer hours</h3>
        <p>(Please select one)</p>
    
       <ButtonUI title= "1 Hour per day" />
       <br></br><br></br>
       <ButtonUI  title= "2 Hour per day" />
       <br></br><br></br>
       <ButtonUI  title= "3 Hour per day" />
       <br></br><br></br>
       <ButtonUI  title= "Other"/>
       <br></br><br></br><br></br><br></br>
       
       <img src="Bubble.svg"></img>

       

      
    </div>
  </div>

    
  )
  }

export default Home;