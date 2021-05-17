import styles from './button.module.css'
import {useRouter} from 'next/router';

function buttonUI({
  title="placeholderText",
  type="continue"
}){
    if (type == "support") {
      return <button className={styles.support} style={{
        userSelect: "none"
      }}>
       {title}
      </button>
    }
    else if (type == "continue") {
      return <button className={styles.continue} style={{
        userSelect: "none"
      }}>
       {title}
      </button>
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



}


export default buttonUI;