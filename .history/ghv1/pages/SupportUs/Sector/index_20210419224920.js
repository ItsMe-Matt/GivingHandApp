import ButtonUI from '../../../Comps/ButtonUI'
import styles from '../../../styles/SupportUs.module.css'


function Home() {
  return (<div className={styles.SupportUs}>
    <div className={styles.bg}>
       
       <h1>Support Us</h1>
       <br></br><br></br><br></br>
       <h3>Choose a sector to help</h3>
        <p>(Please select one)</p>
       <ButtonUI 
       title= "Food"
       <img src=""
        />
       <br></br><br></br>
       <ButtonUI  title= "Hygiene Products" />
       <br></br><br></br>
       <ButtonUI  title= "Clothing" />
       <br></br><br></br>
       <ButtonUI  title= "Shelter"/>
       <br></br><br></br><br></br><br></br>
    </div>
  </div>

    
  )
  }

export default Home;