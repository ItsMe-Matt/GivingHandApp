import styles from './home.module.css'

function HomePost({
    body="placeholderBody",
    src="https://pm1.narvii.com/7599/1ba86c1d0e40891d6e71f2bbdcbf64fd88eb0770r1-512-512v2_hq.jpg",
    type="left"
}) {
    if (type == "left") {
        return <div className={styles.container}>
            <div className={styles.left}>
                <div className={styles.body}>{body}</div>
            </div>

            <div className={styles.right}>
                <img src={src} width="100px" height="100px" />
            </div>
        </div>
    }
    if (type == "right") {
        return <div className={styles.container}>
        <div className={styles.right}>
            <img src={src} width="100px" height="100px" />
        </div>
        <div className={styles.left}>
            <div className={styles.body}>{body}</div>
        </div>
    </div>
    }
    
}

export default HomePost;