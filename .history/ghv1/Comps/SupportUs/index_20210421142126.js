import styles from './support.module.css'

function SupportUI({
  header="",
  subheader="",
  
}){
    return <div className={styles.container}>
        <div className={styles.header}>{header}</div>
        <div className={styles.bar}>
        <div className={styles.box1}></div>
        <div className={styles.box2}></div>
        <div className={styles.box3}></div>
        <div className={styles.box4}></div>
        <div className={styles.box5}></div>
    </div> 
        <div className={styles.h2}>{subheader}</div>
        <div className={styles.h3}>{supportingtext}</div>
   </div>
}


export default SupportUI;