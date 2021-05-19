import {useRouter} from 'next/router'
import styles from './support.module.css'

function ImageButton({

    header = "placeholder",
    routeTo="/",
    src="/public/money.svg/",
    body="the fitness gram pacer test is a multistage aerobic capacity test"

}){
    const router = useRouter();
    return <div onClick={()=>router.push(routeTo)} style= {{
        display: "flex",
        width: 250,
        height: 150,
        borderRadius: 15,
        color: "#009966",
        backgroundColor: "#DFDEDE",
        fontSize: 18,
        margin: 10,
        padding: 10
    }}>
        <div className={styles.center}>
            <img src={src} width="100px"></img>
        </div>
        <div className={styles.header}>
            {header} 
        </div>
        <br></br>
        <div>
            <span style = {{
                color: "#686666",
                fontSize: 12,
                position: "relative",
                top:40,
            }}
            > {body} </span>
            </div>
    </div>
  }
  

  export default ImageButton;    