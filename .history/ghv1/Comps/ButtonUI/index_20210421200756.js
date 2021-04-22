import styles from './button.module.css'
import {useRouter} from 'next/router'


function buttonUI({
  title="placeholderText",
  type="continue",
  routeTo="/LandingPage"
}){
  const router = useRouter();
    if (type == "support") {
      return <div onClick={()=>router.push(routeTo)} className={styles.support} style={{

        userSelect: "none"
      }}>
       {title}
      </div>
    }
    else if (type == "continue") {
      return <div onClick={()=>router.push(routeTo)} className={styles.continue} style={{
        userSelect: "none"
      }}>
       {title}
      </div>
    }
    else if (type == "select") {

      return <div onClick={()=>router.push(routeTo)} className={styles.select} style={{

        userSelect: "none"
      }}>
       {title}
      </button>
    }

    else if (type == "mission") {

      return <div onClick={()=>router.push(routeTo)} className={styles.mission} style={{

        userSelect: "none"
      }}>
       {title}
      </button>
    }

    else if (type == "start") {

      return <div onClick={()=>router.push(routeTo)} className={styles.start} style={{
        userSelect: "none"
      }}>
       {title}
      </div>
    }

    else if (type == "next") {
      return <div onClick={()=>router.push(routeTo)} className={styles.next} style={{
        userSelect: "none"
      }}>
       {title}
      </div>
    }
    
    else if (type == "shadow") {
      return <div onClick={()=>router.push(routeTo)} className={styles.shadow} style={{
        userSelect: "none"
      }}>
       {title}
      </button>
    }
}

export default buttonUI;