import styles from './support.module.css'

function SupportUI({
  header="Support Us",
  subheader="How would you like to help?",
  supportingtext="(Please select one)"
}){
    return <div className={styles.container}>
        <div className={styles.header}>{header}</div>
        <div className={styles.h2}>{subheader}</div>
        <div className={styles.h3}>{supportingtext}</div>
   </div>
}


export default SupportUI;