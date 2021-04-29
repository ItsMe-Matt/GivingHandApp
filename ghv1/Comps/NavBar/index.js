import styles from './navBar.module.css'

import {useRouter} from 'next/router'

function NavBarUI({
  header="placeholderHeader",
  url="https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg",
  body="lorem ipsum",
  routeTo="/"
}){
  const router = useRouter();
    return <div className={styles.bar}>

      
      <div className={styles.container}>
        <img src="/static/home.svg" className={styles.icon} onClick={()=>router.push(routeTo="/HomePage")} />
        <img src="/static/calendar.svg" className={styles.icon}/>
        <img src="/static/donate.svg" className={styles.donate} onClick={()=>router.push(routeTo="/SupportUs")} />
        <img src="/static/list.svg" className={styles.icon}/>
        <img src="/static/location.svg" className={styles.icon} onClick={()=>router.push(routeTo="/Locations")} />
      </div>

    
   </div>
}


export default NavBarUI;