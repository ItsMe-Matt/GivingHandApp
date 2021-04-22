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
    
       <ButtonUI title= "Shelter"></ButtonUI> <Link href="/pages/Locations/Shelter" />
       <br></br><br></br>
       <ButtonUI  title= "Clothing"></ButtonUI> <Link href="/pages/Locations/Clothing" />
       <br></br><br></br>
       <ButtonUI  title= "Hygiene Products"></ButtonUI> <Link href="/Locations/Hygiene" />
       <br></br><br></br>
       <ButtonUI  title= "Food"></ButtonUI> <Link href="/Locations/Food"/>
       <br></br><br></br><br></br><br></br>

       <NavbarUI />

      </div>
    </div>
  </div>

    
  )
  }

export default Home;