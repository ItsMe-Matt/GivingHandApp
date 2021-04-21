import ButtonUI from '../../Comps/ButtonUI'
import NavbarUI from '../../Comps/NavBar'
import styles from '../../styles/main.module.css'


function Home() {
  return (<div className={styles.main}>
    <div className={styles.bg}>
      
       <br></br><br></br><br></br>
    
       <ButtonUI title= "Shelter" />
       <br></br><br></br>
       <ButtonUI  title= "Clothing" />
       <br></br><br></br>
       <ButtonUI  title= "Hygiene Products" />
       <br></br><br></br>
       <ButtonUI  title= "Food"/>
       <br></br><br></br><br></br><br></br>

       

      
    </div>
  </div>

    
  )
  }

export default Home;