import NavbarUI from '../Comps/NavBar'
import styles from '../styles/main.module.css'
import LocationUI from '../Comps/location/index.js'

function Home() {
  return (<div className={styles.main}>
    <div className={styles.bg}>

      <h1>LOCATIONS</h1>
      <h1>Shelter</h1>
      <CalPostUI />
      <CalPostUI header=" Aboriginal Shelter Vancouver"
    address="201 Central St, Vancouver, BC V6A 4A9"
    status="Hours: Opens 4:30 p.m. - 10 am"
    status2="Phone: (604) 682-5556"/>

      
      
      <NavbarUI />


    </div>
  </div>

    
  )
  }

export default Home;