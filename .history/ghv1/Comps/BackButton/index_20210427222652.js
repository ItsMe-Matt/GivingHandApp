import {useRouter} from 'next/router'

function BackButtonUI({
    routeTo="/HomePage"
}){
    const router = useRouter();
    return <button onClick={()=>router.push(routeTo)} style= {{
        color: "#A9A9A9",
        backgroundColor: "transparent",
        border: "none",
        fontSize: "60px",
        outline: "none"
        
    }}>
        <div style= {{
            maxHeight: "0px",
            fontSize: "30px",
            position: "relative",
            right:"160px",
            top:"20px"
        }}>‹</div>
    </button>
  }
  

  export default BackButtonUI;