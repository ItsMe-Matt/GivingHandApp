function TestButtonUI({
    routeTo="/HomePage"
}){
    const router = useRouter();
    return <button style= {{
        color: "#A9A9A9",
        backgroundColor: "transparent",
        border: "none",
        fontSize: "30px",
        outline: "none",
        fontStyle: "san-serif"
        
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
  

  export default TestButtonUI;