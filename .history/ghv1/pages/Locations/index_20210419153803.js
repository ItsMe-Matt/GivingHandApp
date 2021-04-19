import ButtonUI from '../../Comps/ButtonUI'
import NavbarUI from '../../Comps/NavBar'
import styles from '../../styles/main.module.css'


function Home() {
  return (<div className={styles.main}>
    <div className={styles.bg}>
      <div className={styles.box}>
    

       <h1>LOCATIONS</h1>

       <br></br>
       <ButtonUI title= "Shelter" />
       <br></br><br></br>
       <ButtonUI  title= "Clothing" />
       <br></br>
       <ButtonUI  title= "Hygiene Products" />
       <br></br>
       <ButtonUI  title= "Food"/>
       

       <NavbarUI />

      </div>
    </div>
  </div>

    
  )
  }

export default Home;