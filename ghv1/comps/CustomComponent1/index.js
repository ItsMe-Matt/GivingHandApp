function PageUI(){
    return <div style={{
      width: 440,
      height: "auto",
      borderRadius: 20,
      backgroundColor: "lightgrey",
      padding: 30,
    }}>
      <span style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}>
        <h3 style={{
          color: "purple",
          fontSize: 24,
          fontStyle: "bold",
          textAlign: "center"
        }}>“Ending Vancouver’s homelessness one step at a time.”</h3>
        <p style={{
          fontSize: 12,
          textAlign: "center"
        }}>The mission of Giving Hand is to end homelessness for the people of vancouver by providing a safe, temporary refuge and critical services to support them in healing, rebuilding their lives and integrating back into a community.
        </p>
          <button style={{
            color: "Green",
            fontSize: 16,
            fontStyle: "bold",
            width: 150,
            borderRadius: 20,
            padding: 5
        }}>Continue</button>
      </span>
    </div>
  }
  
  export default PageUI;