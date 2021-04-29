import {useRouter} from 'next/router'

function BackButtonUI({
    routeTo="/HomePage"
}){
    const router = useRouter();
    return <button onClick={()=>router.push(routeTo)} style= {{
        color: "#A9A9A9",
        backgroundColor: "transparent",
        border: "none",
        fontSize: "30px",
        outline: "none"
        
    }}>
        <div style= {{
            maxHeight: "0px",
            fontSize: "35px",
            position: "relative",
            right:"160px",
            top:"14px"
        }}>‹</div>
    </button>
  }
  

  export default BackButtonUI;