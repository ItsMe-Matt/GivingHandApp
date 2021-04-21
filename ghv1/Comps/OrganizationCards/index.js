import MoneyButtonUI from '../CustomComponent4';
import styles from './organizationCards.module.css'

function OrganizationCardsUI({
    url="https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg",
    address="325 W Pender St, Vancouver",
    status="low",
    status2="full"
}) {
    return <div className={styles.container}>
        <img src={url} className={styles.image}></img>

        <div>
            <p className={styles.description}>Big Brothers belong in the Greater Vancouver area. Their mission is to enable impactful mentoring relationships where children and youth can discover their power and potential, in collaboration with our local communities.</p>
            <p className={styles.description}>Support them here!</p>
        </div>

        <button className={styles.selectButton}>Select</button>

    </div>
} 

export default OrganizationCardsUI;