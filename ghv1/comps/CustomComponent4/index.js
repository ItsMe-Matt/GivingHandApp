function MoneyButtonUI({
}){
    return <button style= {{
        display: "flex",
        width: 300,
        height: "auto",
        borderRadius: 15,
        color: "#009966",
        backgroundColor: "#DFDEDE",
        border: "none",
        fontSize: 18,
        padding: 30
        // boxshadow: 0, 8 15, rgba(0, 0, 0, 0.1);
    }}>
        <div style = {{
            display: "flex",
            width: 150,
            height: 100,
            backgroundColor: "gray",
        }}>image</div>
        <div>
            <h3>Money Donation</h3>
            <span style = {{
                color: "#686666",
                fontSize: 14,
            }}
            >Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
            </div>
    </button>
  }

  export default MoneyButtonUI;
