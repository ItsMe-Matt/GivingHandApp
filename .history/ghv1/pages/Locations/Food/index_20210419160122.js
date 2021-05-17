import NavbarUI from '../../../Comps/NavBar'
import styles from '../../../styles/main.module.css'
import LocationUI from '../../../Comps/location/index.js'

function Home() {
  return (<div className={styles.main}>
    <div className={styles.bg}>
     <h1>LOCATIONS</h1>
     <div className={styles.box}></div>

      
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
      status2="(604) 876 3601"
      />
      <LocationUI 
      header="Quest Food Exchange"
      address="2020 Dundas St, Vancouver, BC V5L 1J4"
      status="Open 9 a.m. - 5:45 p.m."
      status2="(604) 602-0186"
      />
      <LocationUI 
      header="Aboriginal Front Door Society"
      address="384 Main St, Vancouver, BC V6A 2T1"
      status="Opens 8 a.m. - 4 p.m."
      status2="(604) 697-5662"
      />

      
      
      <NavbarUI />


    </div>
  </div>

    
  )
  }

export default Home;