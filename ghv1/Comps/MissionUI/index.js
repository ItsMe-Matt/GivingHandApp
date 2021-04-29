import styles from './mission.module.css'

function MissionUI({
  header="Header",
  url="https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg",
  body="body",
  width="200px",
  height="200px"
}){
    return <div className={styles.container}>
        <div className={styles.header}>{header}</div>
        <img src={url} style={{
            width: width,
            height: height
        }} />
        <div className={styles.body}>{body}</div>
    
   </div>
}


export default MissionUI;