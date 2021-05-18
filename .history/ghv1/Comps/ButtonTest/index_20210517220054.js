import { useState } from "react";
import UnopDropdown from "unop-react-dropdown";

export default ({
Text="",
Address="",
Hours="",
Phone=""

}) => {
 
  const [open, setOpen] = useState(false);
  const handler = () => {
    setOpen(!open);
  };
  // Change props and see effect
  return (
    <div
  style={{
    display: 'flex',
    justifyContent: 'center',
    width: '100%'
  }}
>
  <UnopDropdown
    align="CENTER"
    trigger={<button style={{
      backgroundColor: '#f5f5f5', /* Green */
      border: 'solid black',
      color: '#009966',
      width: '275px',
      padding:'15px',
      borderRadius: '10px',
      boxShadow: "1px 3px 1px #9E9E9E",
      display: 'inline-block',
      fontSize: 16,
    }}>{Text}</button>}
    
    
  >
    <ul
      style={{
        backgroundColor: 'white',
        borderRadius: '10px',
        border:"black 2px solid",
        height: '80px',
        padding: '1px',
        margin: '1px',
        width: '325px',
        justifyContent: 'center',
        alignContent: 'center',
        position: "absolute",
        right: -165,
        textAlign: 'center',
        fontSize: '13px'
      }}
      
    > 
    {Address}
    <br></br>
    <br></br>
    {Hours}
    <br></br>
    <br></br>
    {Phone}
     

      
       
      
        
    </ul>
  </UnopDropdown>
</div>
  );
};



