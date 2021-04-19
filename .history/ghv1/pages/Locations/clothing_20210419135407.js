import NavbarUI from '../Comps/NavBar'
import styles from '../styles/main.module.css'
import LocationUI from '../Comps/location/index.js'

function Home() {
  return (<div className={styles.main}>
    <div className={styles.bg}>

      <h1>LOCATIONS</h1>
      <h1>Shelter</h1>
      <LocationUI 
      header="Dress for success"
      address="675 W Hastings St, Vancouver, BC V6B 1N9"
      status="Open 9 a.m. - 5 p.m."
      status2="(604) 408-7923"
      />
      <LocationUI  
      header="Big Brothers Vancouver"
      address="1193 Kingsway Unit 102, Vancouver, BC V5V 3C9"
      status="Open 9 a.m. - 5 p.m."
      status2="(604) 876-2447"
      />
      <LocationUI 
      header="Lookout Emergency Aid"
      address="832 E Pender St, Vancouver, BC V6A 1W1"
      status="Open 24 hours"
      status2="(604) 215-2445"
      />
      <LocationUI 
      header="Rancity Housing & Support Society"
      address="1648 Commercial Dr, Vancouver, BC V5N 4A4"
      status="Open 24 hours"
      status2="(604) 428-8252"
      />

      
      
      <NavbarUI />


    </div>
  </div>

    
  )
  }

export default Home;