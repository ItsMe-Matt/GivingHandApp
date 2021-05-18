import ButtonUI from '../../Comps/ButtonUI'
import NavbarUI from '../../Comps/NavBar'
import styles from '../../styles/main.module.css'
import Link from 'next/link'

function Home() {
  return (<div className={styles.main}>
    <div className={styles.bg}>
      <h1>LOCATIONS</h1>
      <div className={styles.box}>
       <br></br><br></br><br></br>
    
       <ButtonUI title= "Shelter"></ButtonUI>
       <br></br><br></br>
       <ButtonUI  title= "Clothing"></ButtonUI>
       <br></br><br></br>
       <ButtonUI  title= "Hygiene Products"></ButtonUI>
       <br></br><br></br>
       <ButtonUI  title= "Food">
       <Link href="/Locations/Food"></Link>
       </ButtonUI>
       <br></br><br></br><br></br><br></br>

       <NavbarUI />

       </div>
    </div>
  </div>

    
  )
  }

export default Home;