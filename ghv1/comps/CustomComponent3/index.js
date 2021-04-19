
function HeaderBlockUI({
    title="placeholder",
    R1="Yes",
    R2="No",
    text="lorem ipsum",
    bgcolor="red",
}){
    return <div style={{
        backgroundColor: bgcolor,
        display: "flex",
        flexDirection: "column",
        width: "fit-content",
        alignContent: "center",
        borderRadius: "4px",
        border: "2px black solid"
        }}>
        <h3 style={{textAlign: "center", padding: "1rem 0rem", margin: "0.5rem 1rem"}}>{title}</h3>
        <span style={{width: "220px", padding:"0.5rem", margin:"0.5rem", textAlign:"center"}}>{text}</span>

        <button type="button" style={{padding: "1rem 6rem", margin: "0.5rem 1rem", borderRadius: "8px"}}>{R1}</button>
        <button type="button" style={{padding: "1rem 6rem", margin: "0.5rem 1rem", marginBottom: "1.5rem", borderRadius: "8px"}}>No</button>

        </div>
}


export default HeaderBlockUI;
