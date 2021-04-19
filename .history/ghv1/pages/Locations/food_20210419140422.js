import NavbarUI from '../Comps/NavBar'
import styles from '../styles/main.module.css'
import LocationUI from '../Comps/location/index.js'

function Home() {
  return (<div className={styles.main}>
    <div className={styles.bg}>

      <h1>LOCATIONS</h1>
      <h1>Food</h1>
      <LocationUI 
      header="Helping Families in Need Society"
      address="1679 Gilmore Ave, Burnaby, BC V5C 5V9"
      status=""
      status2=""
      />
      <LocationUI  
      header=""
      address=""
      status=""
      status2=""
      />
      <LocationUI 
      header=""
      address=""
      status=""
      status2=""
      />
      <LocationUI 
      header=""
      address=""
      status=""
      status2=""
      />

      
      
      <NavbarUI />


    </div>
  </div>

    
  )
  }

export default Home;