import styles from './location.module.css'

function LocationUI({
    header="",
    address="",
    status="",
    status2="",
    title=""
}) {
    return <div className={styles.container}>
        <div className={styles.header}>
            {header}
            </div>

        <div className={styles.wordContainer}>

        <div className={styles.lineContainer}>
            <span className={styles.bold}>Address:</span>
            <span className={styles.text}>{address}</span>
            </div>

        <div className={styles.lineContainer}>
            <span className={styles.bold}>Hours:</span>
            <span className={styles.text}>{status}</span>
            </div>

        <div className={styles.lineContainer}>
            <span className={styles.bold}>Phone:</span>
            <span className={styles.text}>{status2}</span>
            </div>
        </div>
    </div>







} 

export default LocationUI;