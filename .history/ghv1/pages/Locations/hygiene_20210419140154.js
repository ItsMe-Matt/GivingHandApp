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
      status="24 hours"
      status2="(604) 253-7898"
      />
      <LocationUI  
      header="Wish Drop In Centre"
      address="334 Alexander St, Vancouver, BC V6A 1C3"
      status="Opens 12 a.m. - 6 p.m."
      status2="(604) 669-9474"
      />
      <LocationUI 
      header="Directions Youth Services"
      address="1138 Burrard St, Vancouver, BC"
      status="24 hours"
      status2="(604) 669-1472"
      />
      <LocationUI 
      header="Union Gospel Mission"
      address="601 E Hastings St, Vancouver, BC V6A 1J7"
      status=""
      status2=""
      />

      
      
      <NavbarUI />


    </div>
  </div>

    
  )
  }

export default Home;