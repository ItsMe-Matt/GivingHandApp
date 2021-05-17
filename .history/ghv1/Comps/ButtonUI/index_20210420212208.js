import styles from './button.module.css'
import {useRouter} from 'next/router';


const router = useRouter();
  return <ButtonUI onclick=>router.pus
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
      return <button className={styles.select} style={{
        userSelect: "none"
      }}>
       {title}
      </button>
    }

    else if (type == "mission") {
      return <button className={styles.mission} style={{
        userSelect: "none"
      }}>
       {title}
      </button>
    }

    else if (type == "start") {
      return <button className={styles.start} style={{
        userSelect: "none"
      }}>
       {title}
      </button>
    }



}


export default buttonUI;