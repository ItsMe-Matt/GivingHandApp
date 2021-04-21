import NavbarUI from '../Comps/NavBar'
import styles from '../styles/main.module.css'
import LocationUI from '../Comps/location/index.js'

function Home() {
  return (<div className={styles.main}>
    <div className={styles.bg}>

      <h1>LOCATIONS</h1>
      <h1>Hygiene</h1>
      <LocationUI 
      header="Donation Circle Society"
      address="2487 Adanac St, Vancouver, BC V5K 2M3"
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