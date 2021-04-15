import styles from './calPost.module.css'

function CalPostUI({
    header="Covenant House Vancouver",
    address="325 W Pender St, Vancouver",
    status="low",
    status2="full"
}) {
    return <div className={styles.container}>
        <div className={styles.header}>
            {header}
            </div>

        <div>
            <span className={styles.bold}>Address:</span>
            <span className={styles.text}>{address}</span>
            </div>

        <div>
            <span className={styles.bold}>Donation Level:</span>
            <span className={styles.text}>{status}</span>
            </div>

        <div>
            <span className={styles.bold}>Volunteer Help:</span>
            <span className={styles.text}>{status2}</span>
            </div>










    </div>







} 

export default CalPostUI;