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
      status="24 hours"
      status2="(604) 294-3087"
      />
      <LocationUI  
      header="Greater Vancouver Food Bank"
      address="1428 Charles St, Vancouver, BC V5L 2S8"
      status="Open 7 p.m."
      status2=" (604) 876 3601"
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