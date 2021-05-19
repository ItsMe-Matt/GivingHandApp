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
        backgroundColor: "#F5F5F5",
        border: "solid",
        borderColor: 'lightgrey',
        fontSize: 18,
        margin: 10,
        padding: 10,
        justifyContent: "center",

    }}>
        <div className={styles.center}>
            <img src={src} style={{
                width: 100,
                height: 80,
                paddingTop: 15,
            }}></img>
        </div>
        <div className={styles.header}>
            {header} 
        </div>
        <br></br>
        <div>
            <span className={styles.information} style = {{
                color: "#686666",
                fontSize: 12,
                position: "relative",
                top:50,
                left:5,
            }}
            > {body} </span>
            </div>
    </div>
  }
  

  export default ImageButton;    