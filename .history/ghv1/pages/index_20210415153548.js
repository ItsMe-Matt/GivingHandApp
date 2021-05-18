import NavbarUI from '../Comps/NavBar'
import styles from '../styles/main.module.css'
import CalPostUI from '../Comps/CalPost/index.js'

function Home() {
  return (<div className={styles.main}>
    <div className={styles.bg}>

      <h1>LOCATIONS</h1>
      <h1>Shelter</h1>
      <CalPostUI />
      <CalPostUI />

      
      
      <NavbarUI />


    </div>
  </div>

    
  )
  }

export default Home;