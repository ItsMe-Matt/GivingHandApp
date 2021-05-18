import { useState } from "react";
import UnopDropdown from "unop-react-dropdown";
import './testing.module.css';

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
      backgroundColor: '#4CAF50', /* Green */
      border: 'solid white',
      color: 'white',
      width: '275px',
      padding:'15px',
      borderRadius: '10px',
      textAlign: 'center',
      textDecoration: 'none',
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
        fontSize: '14.5px'
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


