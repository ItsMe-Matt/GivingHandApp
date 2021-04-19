import styles from './navBar.module.css'

function NavBarUI({
  header="placeholderHeader",
  url="https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg",
  body="lorem ipsum",
}){
    return <div className={styles.bar}>

      
      <div className={styles.container}>
        <img src="/static/home.svg" className={styles.icon}/>
        <img src="/static/calendar.svg" className={styles.icon}/>
        <img src="/static/donate.svg" className={styles.donate}/>
        <img src="/static/list.svg" className={styles.icon}/>
        <img src="/static/location.svg" className={styles.icon}/>
      </div>

    
   </div>
}


export default NavBarUI;