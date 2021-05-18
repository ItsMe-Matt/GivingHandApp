import NavbarUI from '../Comps/NavBar'
import styles from '../styles/main.module.css'
import LocationUI from '../Comps/location/index.js'

function Home() {
  return (<div className={styles.main}>
    <div className={styles.bg}>

      <h1>LOCATIONS</h1>
      <h1>Shelter</h1>
      <LocationUI header="",
    address="",
    status="",
    status2=""/>
      <LocationUI />
      <LocationUI />
      <LocationUI />

      
      
      <NavbarUI />


    </div>
  </div>

    
  )
  }

export default Home;