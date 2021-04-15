import styles from './mission.module.css'

function MissionUI({
  header="placeholderHeader",
  url="https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg",
  body="lorem ipsum",
}){
    return <div className={styles.container}>
        <div className={styles.header}>{header}</div>
        <img src={url} style={{
            width: "200px",
            height: "200px",
        }} />
        <div className={styles.body}>{body}</div>
    
   </div>
}


export default MissionUI;