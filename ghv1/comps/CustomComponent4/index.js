function MoneyButtonUI({
    header = "Money Donation"
}){
    return <button style= {{
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
        <div style = {{
            display: "flex",
            width: 100,
            height: 100,
            backgroundColor: "gray",
        }}>image</div>
        <div>
            <h3>{header}</h3>
            <span style = {{
                color: "#686666",
                fontSize: 12,
            }}
            >Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
            </div>
    </button>
  }
  

  export default MoneyButtonUI;
