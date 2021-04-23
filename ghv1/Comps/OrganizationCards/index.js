import MoneyButtonUI from '../CustomComponent4';
import styles from './organizationCards.module.css'
import {useRouter} from 'next/router'

function OrganizationCardsUI({
    url="https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg",
    supportText = "Support them here!",
    organizationText = "Big Brothers belong in the Greater Vancouver area. Their mission is to enable impactful mentoring relationships where children and youth can discover their power and potential, in collaboration with our local communities.",
    routeTo="/ThankYou"

}) {
    const router = useRouter()
    return <div className={styles.container}>
        <img src={url} className={styles.image}></img>

        <div>
            <p className={styles.description}>{organizationText}</p>
            <p className={styles.description}>{supportText}</p>
        </div>

        <button onClick={()=>router.push(routeTo)} className={styles.selectButton}>Select</button>

    </div>
} 

export default OrganizationCardsUI;