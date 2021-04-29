import NavbarUI from '../../../Comps/NavBar'
import styles from '../../../styles/main.module.css'
import LocationUI from '../../../Comps/location/index.js'
import BackButtonUI from '../../../Comps/BackButton/index'

function Locations() {
  
  return (<div className={styles.main}>
    <div className={styles.bg}>
    
     <div className={styles.box}>
     <BackButtonUI routeTo="/Locations" />
      <h1 style="color: {}">Clothing</h1>
      <br></br><br></br>
      <LocationUI 
      header="Dress for success"
      address="675 W Hastings St, Vancouver, BC V6B 1N9"
      status="Open 9 a.m. - 5 p.m."
      status2="(604) 408-7923"
      />
      <br></br>
      <LocationUI  
      header="Big Brothers Vancouver"
      address="1193 Kingsway Unit 102, Vancouver, BC V5V 3C9"
      status="Open 9 a.m. - 5 p.m."
      status2="(604) 876-2447"
      />
      <br></br>
      <LocationUI 
      header="Downtown Eastside Women’s Centre"
      address="302 Columbia St, Vancouver, BC V6A 4J1"
      status="24 hours"
      status2="(604) 681-8480"
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