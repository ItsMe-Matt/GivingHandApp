import NavbarUI from '../../../Comps/NavBar'
import styles from '../../../styles/main.module.css'
import LocationUI from '../../../Comps/location/index.js'

function Home() {
  return (<div className={styles.main}>
    <div className={styles.bg}>
     <h1>LOCATIONS</h1>
     <div className={}

      
      <h1>Clothing</h1>
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
      header="Downtown Eastside Women’s Centre"
      address="302 Columbia St, Vancouver, BC V6A 4J1"
      status="24 hours"
      status2="(604) 681-8480"
      />
      <LocationUI 
      header="Union Gospel Mission"
      address="601 E Hastings St, Vancouver, BC V6A 1J7"
      status="Open 24 hours"
      status2="(604) 253-3323"
      />

      
      
      <NavbarUI />


    </div>
  </div>

    
  )
  }

export default Home;