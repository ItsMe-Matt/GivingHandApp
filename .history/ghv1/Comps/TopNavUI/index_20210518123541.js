import {useRouter} from 'next/router'
import styles from './header.module.css'

function TopNavUI({
    routeTo="/HomePage"
}){
    const router = useRouter();
    return <div className={styles.container}>
        <div>
        <button onClick={()=>router.push(routeTo)} style= {{
            backgroundColor: "transparent",
            border: "none",
            outline: "none",
            position: "absolute",
            Left: "24px",
            paddingTop: "8px"
        }}>
        <img src="/static/back.png" height="20px" width="20px"/>
        </button>
        </div>
        


        <div>
        <button onClick={()=>router.push("/HomePage")} style= {{
            backgroundColor: "transparent",
            border: "none",
            outline: "none",
            paddingRight: "24px",
            paddingTop: "1px"
        }}>
        <img src="/static/home.svg" />
        </button>
        </div>

    </div>
  }



  

export default TopNavUI;