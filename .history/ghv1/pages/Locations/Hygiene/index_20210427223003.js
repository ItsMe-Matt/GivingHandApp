import NavbarUI from '../../../Comps/NavBar'
import styles from '../../../styles/main.module.css'
import LocationUI from '../../../Comps/location/index.js'
import BackButtonUI from '../../../Comps/BackButton/index'

function Locations() {
  return (<div className={styles.main}>
    <div className={styles.bg}>
      <BackButtonUI routeTo="/Locations" />
      <h1>LOCATIONS</h1>
     <div className={styles.box}>
      
      
      <h1>Hygiene</h1>
      <LocationUI 
      header="Donation Circle Society"
      address="2487 Adanac St, Vancouver, BC V5K 2M3"
      status="24 hours"
      status2="(604) 253-7898"
      />
      <br></br>
      <LocationUI  
      header="Wish Drop In Centre"
      address="334 Alexander St, Vancouver, BC V6A 1C3"
      status="Opens 12 a.m. - 6 p.m."
      status2="(604) 669-9474"
      />
      <br></br>
      <LocationUI 
      header="Directions Youth Services"
      address="1138 Burrard St, Vancouver, BC"
      status="24 hours"
      status2="(604) 669-1472"
      />
      <br></br>
      <LocationUI 
      header="Union Gospel Mission"
      address="601 E Hastings St, Vancouver, BC V6A 1J7"
      status="Open 24 hours"
      status2="(604) 253-3323"
      />

      
      <br></br><br></br><br></br>
      <NavbarUI />

     </div>
    </div>
  </div>

    
  )
  }

export default Locations;