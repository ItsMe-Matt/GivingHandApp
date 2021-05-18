import ButtonUI from '../Comps/ButtonUI'
import NavbarUI from '../Comps/NavBar'
import styles from '../styles/main.module.css'


function Home() {
  return (<div className={styles.main}>
    <div className={styles.bg}>

      <h1>LOCATIONS</h1>

      <br></br><br></br><br></br>
      <ButtonUI text= "" />
      <br></br><br></br><br></br><br></br>
      <ButtonUI />
      <br></br><br></br><br></br><br></br>
      <ButtonUI />
      <br></br><br></br><br></br><br></br>
      <ButtonUI />
      <br></br><br></br><br></br><br></br>

      <NavbarUI />


    </div>
  </div>

    
  )
  }

export default Home;

