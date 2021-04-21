import ButtonUI from '../../Comps/ButtonUI'
import NavbarUI from '../../Comps/NavBar'
import styles from '../../styles/main.module.css'


function Home() {
  return (<div className={styles.main}>
    <div className={styles.bg}{{
      style:
      position: absolute;
      width: 375px;
        height: 593px;
      left: 0px;
top: 74px;

background: #DAD4E5;
border-radius: 40px;
      
    }}>

      <h1>LOCATIONS</h1>

      <br></br><br></br><br></br>
      <ButtonUI title= "Shelter" />
      <br></br><br></br><br></br><br></br>
      <ButtonUI  title= "Clothing" />
      <br></br><br></br><br></br><br></br>
      <ButtonUI  title= "Hygiene Products" />
      <br></br><br></br><br></br><br></br>
      <ButtonUI  title= "Food"/>
      <br></br><br></br><br></br><br></br>

      <NavbarUI />


    </div>
  </div>

    
  )
  }

export default Home;