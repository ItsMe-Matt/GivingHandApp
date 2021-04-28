import {useRouter} from 'next/router'
import styles from './support.module.css'

function VolunteerButtonUI({

    header = "placeholder",
    routeTo="/LandingPage"

}){
    const router = useRouter();
    return <button onClick={()=>router.push(routeTo)} style= {{
        display: "flex",
        width: 250,
        height: 150,
        borderRadius: 15,
        color: "#009966",
        backgroundColor: "#DFDEDE",
        border: "none",
        fontSize: 18,
        margin: 10,
        padding: 8
        // boxshadow: 0, 8 15, rgba(0, 0, 0, 0.1);
    }}>
        <div className={styles.center}>
            <img src=".svg"></img>
        </div>
        <div>
            <h3>{header}</h3>
            <span style = {{
                color: "#686666",
                fontSize: 12,
                position: "relative",
                bottom: 20
            }}
            >Donate your time and help volunteer at your chosen organization</span>
            </div>
    </button>
  }
  

  export default VolunteerButtonUI;    