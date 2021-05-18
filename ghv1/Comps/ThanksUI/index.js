import styles from './end.module.css'

function ThanksUI({
  header="Support Us",
  subheader="Thank you for choosing",
  supportingtext="Big Brothers Vancouver",
  url="https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg"
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
    <img src = {url} className={styles.image}></img> 
        <div className={styles.h2}>{subheader}</div>
        <div className={styles.h3}>{supportingtext}</div>
   </div>
}


export default ThanksUI;