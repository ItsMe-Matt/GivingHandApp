import ButtonUI from '../../Comps/ButtonUI'
import NavbarUI from '../../Comps/NavBar'
import styles from '../../styles/main.module.css'


function Home() {
  return (<div className={styles.main}>
    <div className={styles.bg}>
      <div className={styles.box}>
    

       <h1>LOCATIONS</h1>

       <br></br><br></br><br></br>
       <ButtonUI title= "Shelter" />
       <br></br><br></br><br></br><br></br>
       <ButtonUI  title= "Clothing" />
       
       <ButtonUI  title= "Hygiene Products" />
       
       <ButtonUI  title= "Food"/>
       

       <NavbarUI />

      </div>
    </div>
  </div>

    
  )
  }

export default Home;