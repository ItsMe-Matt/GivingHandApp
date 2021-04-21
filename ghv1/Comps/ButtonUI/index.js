import styles from './button.module.css'

function buttonUI({
  title="placeholderText",
  type="continue"
}){
    if (type == "support") {
      return <div className={styles.support} style={{
        userSelect: "none"
      }}>
       {title}
      </div>
    }
    else if (type == "continue") {
      return <div className={styles.continue} style={{
        userSelect: "none"
      }}>
       {title}
      </div>
    }
    else if (type == "select") {
      return <div className={styles.select} style={{
        userSelect: "none"
      }}>
       {title}
      </div>
    }

    else if (type == "mission") {
      return <div className={styles.mission} style={{
        userSelect: "none"
      }}>
       {title}
      </div>
    }

    else if (type == "start") {
      return <div className={styles.start} style={{
        userSelect: "none"
      }}>
       {title}
      </div>
    }

    else if (type == "next") {
      return <div className={styles.next} style={{
        userSelect: "none"
      }}>
       {title}
      </div>
    }



}


export default buttonUI;