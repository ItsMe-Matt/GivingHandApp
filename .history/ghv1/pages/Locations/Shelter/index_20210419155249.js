import NavbarUI from '../../../Comps/NavBar'
import styles from '../../../styles/main.module.css'
import LocationUI from '../../../Comps/location/index.js'

function Home() {
  return (<div className={styles.main}>
    <div className={styles.bg}>
     <h1>LOCATIONS</h1>
      <div className={styles.box}>

       <h1>Shelter</h1>
       <LocationUI 
       header="Covenant House Vancouver"
       address="326 W Pender St, Vancouver, BC V6B 1T1"
       status="Open 24 hours"
       status2="(604) 685-7474"
       />
       <LocationUI  
       header="Aboriginal Shelter Vancouver"
       address="201 Central St, Vancouver, BC V6A 4A9"
       status="Opens 4:30 p.m. - 10 am"
       status2="(604) 682-5556"
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

      
       <br></br><br></br>
       <NavbarUI />

      </div>
    </div>
  </div>

    
  )
  }

export default Home;